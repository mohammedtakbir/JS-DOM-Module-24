 // * option:1---->getElementsByTagName
 const all = document.getElementsByTagName('*');
 // console.log(all);

 const liCollection = document.getElementsByTagName('li');
 // console.log(liCollection);
 for(const li of liCollection){
     // console.log(li);
 }

 // * opiton:1-------->getElementById
 const fruits = document.getElementById('fruits-title');
 // console.log(fruits);

 // * option:3------->getElementByClassName
 const importantPlaces = document.getElementsByClassName('important-places');
 // console.log(importantPlaces);
 for(const place of importantPlaces){
     // console.log(place);
 }

 // * option:4------>querySelelectorAll
 const allLi = document.querySelectorAll('.fruits-container li');
 // console.log(allLi)
 for(const li of allLi){
     // console.log(li);
 }
 // * option:5------->querySelector
 const firstLi = document.querySelector('fruits-container li');
 // console.log(firstLi);



//  ? .style
// const useStyle = document.getElementById('fruits-title').style.color = 'black';
const useStyle1 = document.getElementById('fruits-title').style.backgroundColor = '#000';
// console.log(useStyle1);
const useStyle2 = document.getElementById('fruits-title').style.color = '#fff';
// console.log(useStyle2);
const useStyle3 = document.getElementById('fruits-title').style.padding = "20px";
// console.log(useStyle3);
const useStyle4 = document.getElementById('fruits-title').style.textAlign = "center";
// console.log(useStyle4);

// * getAttribute()

const title1 = document.getElementById('fruits-title');
// console.log(title1.getAttribute('class'));
// console.log(title1.getAttribute('id'));

// * .classList
const title2 = document.getElementById('fruits-title');
// console.log(title2.classList);

// * .classList.add()
const title3 = document.getElementById('fruits-title');
title3.classList.add('checking1', 'checking2');
// console.log(title3.classList);

// * .classList.remove()
const title4 = document.getElementById('fruits-title');
title4.classList.remove('checking1');
// console.log(title4.classList);

// * .classList.replace()
const title5 = document.getElementById('fruits-title');
title5.classList.replace('test-class', 'one');
// console.log(title5.classList)

// * setAttribute()
const title6 = document.getElementById('places-title');
title6.setAttribute('title', 'this is tooltip creating by JS');


 // * innerHTML
const title7 = document.getElementsByClassName('places-container')[0].innerHTML;
// console.log(title7)

const div1 = document.getElementById('details');
const text1 = div1.innerHTML;
// console.log(text1);
 // * innerText
const title8 = document.getElementsByClassName('places-container')[0].innerText;
// console.log(title8)

const div = document.getElementById('details');
const text = div.innerText;
// console.log(text);