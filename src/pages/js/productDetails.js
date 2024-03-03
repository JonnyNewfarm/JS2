const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const row = document.getElementById('product-details-row')
const url = `https://api.noroff.dev/api/v1/social/posts/${id}`

        
async function fetchPost() {

try {
    const fetchToken = localStorage.getItem('accessToken');
    const getData = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${fetchToken}`,
      },
      
    }
    const response = await fetch(url, getData);
    const details = await response.json();

    console.log(details);

    createHtml(details);

}
catch (error) {
    console.log(error);

}

}

fetchPost();

function createHtml(details) {
row.innerHTML = `<div class="card mb-3" style="max-width: 900px;">
<div class="row g-0">
  <div class="col-md-5">
    <img src="${details.media}" class="img-fluid rounded-start" alt="product-image" style="object-fit: cover">
  </div>
  <div class="col-md-6">
    <div class="card-body">
      <h1 class="card-title">${details.title}</h1>
      <h5 class="card-text">Body:</h5>
      <p class="card-text">${details.body}</p>
      
      <h5 class="card-text">Tags:</h5>
      <p class="card-text">${details.tags}</p>
      <h5 class="card-text">Created:</h5>
      <p class="card-text">${details.created}</p>
      <h5 class="card-text">Updated:</h5>
      <p class="card-text">${details.updated}</p>
      
      
      
     
     
  

    </div>
  </div>
</div>
</div>
                        `;
}
