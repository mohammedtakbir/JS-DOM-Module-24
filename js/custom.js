// * 1. getElementsByTagName()
/* const liLists = document.getElementsByTagName('li');
for(const liList of liLists){
    liList.style.color = 'cyan';
}
const all = document.getElementsByTagName('*');
for(const everyElement of all){
    everyElement.style.color = 'cyan'
} */
// * 2.getElementById()
const favouriteTitle = document.getElementById('favourite-title');
favouriteTitle.style.fontSize = '3rem';
favouriteTitle.style.color = 'coral';

// * 3.getElementsByClass()
const importantPlaces = document.getElementsByClassName('important-place');
for(const importantPlace of importantPlaces){
    importantPlace.style.color = 'lightskyblue'
}

// * 4.querySelectorAll()
const selectAll = document.querySelectorAll('#food-container ul li');
// console.log(selectAll);

// * 4.querySelector()
const selector = document.querySelector('#food-container ul li')
// console.log(selector);