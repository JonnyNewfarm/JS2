const formEl = document.querySelector(".form")

formEl.addEventListener('submit', event => {
  
    event.preventDefault()
    

    
    
    const formData = new FormData(formEl)
    const data = Object.fromEntries(formData)
  
    
   fetch('https://api.noroff.dev/api/v1/social/auth/register',{
    method:'POST',
    headers: {
        'content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json() )
    .then(data => console.log(data))
    .catch(error => console.log(error))
});

