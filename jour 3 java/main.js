// let boutonCouleur = document.getElementById("changerCouleur")
// let divs = document.querySelectorAll('div')

// boutonCouleur.addEventListener('click', function(){
//     divs.forEach(div => div.classList.toggle('dark'))

// })

//image

let image = document.querySelector('img')
let toggleImageButton = document.getElementById('toggleImage')

image.style.visibility ='hidden'

function toggleImage(){
    if (image.style.visibility === 'hidden'){
        image.style.visibility = 'visible'
        toggleImageButton.innerHTML = "Cacher l'image"
    } else {
        image.style.visibility = 'hidden'
        toggleImageButton.innerHTML = "Afficher l'image "
 }}

 toggleImageButton.addEventListener('click' , toggleImage)