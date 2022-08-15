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
/* const favouriteTitle = document.getElementById('favourite-title');
favouriteTitle.style.fontSize = '3rem';
favouriteTitle.style.color = 'coral'; */

// * 3.getElementsByClass()
/* const importantPlaces = document.getElementsByClassName('important-place');
for(const importantPlace of importantPlaces){
    importantPlace.style.color = 'lightskyblue'
} */

// * 4.querySelectorAll()
/* const selectAll = document.querySelectorAll('#food-container ul li');
console.log(selectAll); */

// * 5.querySelector()
/* const selector = document.querySelector('#food-container ul li')
console.log(selector); */

// * style
/* const dressList = document.getElementById('dress-list');
const dressChilds = dressList.children;
for(const dressChild of dressChilds){
    dressChild.style.fontSize = '2rem';
    dressChild.style.color = 'cyan';
} */

// * getAttribute()
/* const title1 = document.querySelector('#food-container');
console.log(title1.getAttribute('class'))
console.log(title1.getAttribute('id')) */

// * setAttribute()
/* const title2 = document.querySelector('#dress-container');
console.log(title2.setAttribute('class', 'test'));
console.log(title2.setAttribute('title', 'testing title attributes using tooltips')); */

// * removeAttribute()
/* const title3 = document.querySelector('.remove-this-class-attribute');
console.log(title3.removeAttribute('class')); */

// * classList()
/* const title4 = document.querySelector('#food-container');

title4.classList.add('test0', 'test4', 'test5');
console.log(title4.classList)

title4.classList.remove('test0');
console.log(title4.classList)

title4.classList.replace('test5', 'newtest');
console.log(title4.classList) */

// * innerHTML
/* const placesLists = document.getElementsByClassName('places-list')[0].innerHTML;
console.log(placesLists) */


// * innerText
/* const food1 = document.querySelector('#food1');
console.log(food1.innerText);
food1.innerText = 'kacchi biriyani';
console.log(food1);
 */

// *createElement
/* const placesLists = document.querySelector('.places-list');

const li = document.createElement('li')
li.innerText = 'CoxsBazar';
li.setAttribute('class', 'important-place');
placesLists.appendChild(li);
console.log(placesLists.parentElement.parentElement); */

// * add a section in container using appendChild()
// ? 1.where to be added
const mainContainer = document.getElementById('main-container');

// ? 2.what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Favourite Car List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'Porche 911 GTRS4';
ul.appendChild(li1);
const li2 = document.createElement('li')
li2.innerText = 'Audi RS6';
ul.appendChild(li2);
const li3 = document.createElement('li')
li3.innerText = 'BMW M8 Competition';
ul.appendChild(li3);
const li4 = document.createElement('li')
li4.innerText = 'Nissan GTR35';
ul.appendChild(li4);

section.appendChild(ul)
// ? add all the child
mainContainer.appendChild(section);

// * children/chilsNodes
const drssContainer = document.getElementById('dress-container');
// console.log(drssContainer.childNodes);
// console.log(drssContainer.firstChild);
// console.log(drssContainer.children[1].children[1].innerText);