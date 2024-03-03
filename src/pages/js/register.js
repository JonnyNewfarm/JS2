
const form = document.querySelector(".form");
const registerUrl = 'https://api.noroff.dev/api/v1/social/auth/register';
const regError = document.getElementById("register-error");
regError.style.display = "none";

async function registerUser(url, data){
    console.log(url, data);
    try{
    const postData = {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);

    if (response.status !== 201) {
        regError.style.display = "block";
      } else{
        location.href = "login.html";

      }
    } catch (error){
        console.log(error)

    }

}




form.addEventListener('submit', (event) => {

    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
console.log(data);

    registerUser(registerUrl, data);
});
