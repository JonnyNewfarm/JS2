const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const row = document.getElementById('product-details-row')
const url = `https://api.noroff.dev/api/v1/social/posts/${id}`
const deleteBtn = document.getElementById("delete-btn")
const fetchToken = localStorage.getItem('accessToken');

function onClick() {
  fetch(`https://api.noroff.dev/api/v1/social/posts/${id}`,{
            method:'DELETE',
            headers: {
                'content-Type' : 'application/json',
                authorization: `bearer ${fetchToken}`,

            },
            });


}
    
  



        
async function fetchPost() {

try {
    
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
      <h5 class="card-title">${details.title}</h5>
      <p class="card-text">${details.description}</p>
      <p class="card-text"><small class="text-muted">Offer ends:</small></p>
      <p class="card-text">${details.endsAt}</p>
      <p class="card-text"><small class="text-muted">Amount of bids</small></p>
      <div>${details._count.bids}</div>
      <br>
      <p class="card-text"><small class="text-muted">place your bid</small></p>
     
      <div class="input-group mb-3">
      

<a href="#" class="btn btn-danger" onClick="onClick()" id="delete-btn" type="button">Delete</a>


    </div>
  </div>
</div>
</div>
                        `;
}



       
            