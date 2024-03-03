const row = document.getElementById('row');
const search = document.getElementById('search');
let allPosts = []

const token = localStorage.getItem("accessToken");
const name = localStorage.getItem('name')


search,addEventListener('keyup', (event) =>{
const searchString = event.target.value.toLowerCase()
 const filteredPosts = allPosts.filter( (post) =>{
return post.title.toLowerCase().includes(searchString) 


  });

  displayPosts(filteredPosts)

});


const loadPosts = async () => {
  try {
    const res = await 
fetch(`https://api.noroff.dev/api/v1/social/profiles/${name}/posts`,{
    method:'GET',
    headers: {
        'content-Type' : 'application/json',
        authorization: `bearer ${token}`,

    },
    });
     allPosts = await res.json();
    displayPosts(allPosts);
  
} catch (err) {
  console.log(err);

}

}

const displayPosts = (posts) => {
const htmlString = posts.map(
  post => {
    return `
    <div class="card" style="width: 18rem; margin-left: 15px; margin-right: 15px; margin-top: 15px; margin-bottom: 15px;">
    <img src="${post.media}" class="card-img-top" style="object-fit: cover; max-height: 200px;" alt="...">
<div class="card-body">
<h5 class="card-title">${post.title}</h5>
<p class="card-text">${post.body}</p>
<p class="card-text">${post._tag}</p>
<a href="/src/pages/deleteProduct.html?id=${post.id}" class="btn btn-primary">Go somewhere</a>
</div>
</div>
    
    
    
    `;
  }
).join('');
row.innerHTML = htmlString;
}

loadPosts();



