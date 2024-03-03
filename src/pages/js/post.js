const formEl = document.querySelector(".form")
const token = localStorage.getItem("accessToken")

formEl.addEventListener('submit', event => {
  
    event.preventDefault()
    

    
    
    const formData = new FormData(formEl)
    const data = Object.fromEntries(formData)
  
    
   fetch('https://api.noroff.dev/api/v1/social/posts',{
    method:'POST',
    headers: {
        'content-Type' : 'application/json',
        authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json() )
    .then(json => console.log(json))
    .catch(error => console.log(error))
});
