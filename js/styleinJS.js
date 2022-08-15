const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '1px solid #000';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray';
}

/* const placeConatainer = document.getElementById('place-container');
placeConatainer.style.backgroundColor = 'coral';
placeConatainer.style.color = 'white';
placeConatainer.style.fontSize = '2rem' */
const placeConatainer = document.getElementById('place-container');
// placeConatainer.classList.add('text-center');
placeConatainer.classList.replace('text-center', 'large-text');
