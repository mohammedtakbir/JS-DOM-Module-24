// * 1. getElementById
/* const grandParent = document.getElementById('grandparent-id');
changeColor(grandParent); */

// * 2.getElementByClassName
// const parents = Array.from(document.getElementsByClassName('parent'));
// ? using for...of loop
/* for(const parent of parents){
    parent.style.backgroundColor='#333';
} */
// ? using forEach() method
// parents.forEach(changeColor);

// * 3.querySelector
/* const grandParent = document.querySelector('#grandparent-id');
const grandParent = document.querySelector('.grantParent');
changeColor(grandParent); */

/* const parents = document.querySelector('.parent');
changeColor(parents); */

// * 3.querySelectorAll
// const parents = document.querySelectorAll('.parent');
// ? using for...of loop
/* for(const parent of parents){
    changeColor(parent);
} */
// ? using forEach() method
// parents.forEach(changeColor);

// * 4.selecting children(parent to children)
// ? 1.children
// const grandParent = document.querySelector('.grantParent');
// const parents = Array.from(grandParent.children);
// parents.forEach(changeColor);

// const parentOne = parents[0];
// const children = Array.from(parentOne.children);
// children.forEach(changeColor);
// changeColor(children[0])

// ? 2.all the methods getElementByTagName/Id/ClassName and querySelector/All work on every single element not just the document
// const grandParent = document.querySelector('.grantParent');
/* const childOne = grandParent.querySelector('.child');
changeColor(childOne); */

/* const childOne = grandParent.querySelectorAll('.child');
childOne.forEach(changeColor); */

// * 5.selecting parent(children to parent)
// ? 1.parentElement/parentNode
// const childOne = document.querySelector('#child-one');
// changeColor(childOne)

// const parent = childOne.parentElement;
// changeColor(parent)
// const grandParent = parent.parentElement;
// changeColor(grandParent)

// ? 2.closest()
/* const childOne = document.querySelector('#child-one');
const grandParent = childOne.closest('.grantParent');
changeColor(grandParent); */

// * 6.selecting siblings
// ? 1.nextElementSibling
const childOne = document.querySelector('#child-one')
const childTwo =childOne.nextElementSibling;
// changeColor(childTwo) 

// ? 2.previousElementSibling
changeColor(childTwo.previousElementSibling);



// ! for changing background color
function changeColor(element){
    element.style.backgroundColor= '#333';
}