const avatar = localStorage.getItem('avatar')
const avatarContainer = document.getElementById('avatarImage')



function CreateAvatar (){
    if (avatarContainer.src === null) {
 return avatarContainer.style.display = "none"
    } else{
return avatarContainer.src = `${avatar}`
    }

}
avatarContainer = CreateAvatar()

