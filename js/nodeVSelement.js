const parent1 = document.querySelector('.parent-1');
// console.log(parent1.parentNode);
// console.log(parent1.children);
// console.log(parent1.childNodes);

const parent2 = document.querySelector('.parent-2');
// console.log(parent2.children)
// console.log(parent2.childNodes);

// ? HTMLcollection always live update
/* const parents = document.getElementsByClassName('parent');
console.log(parents)
const grandParent = document.querySelector('.grandParent');
const child = document.createElement('div');
child.classList.add('parent');
grandParent.appendChild(child); */

// ? nodelist dosent update.it is static
const parents = document.querySelectorAll('.parent');
console.log(parents)
const grandParent = document.querySelector('.grandParent');
const child = document.createElement('div');
child.classList.add('parent');
grandParent.appendChild(child);