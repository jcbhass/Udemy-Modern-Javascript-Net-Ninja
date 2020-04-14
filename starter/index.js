/* The Query Selector */

// console.log('Hello');
// const para = document.querySelector('p');
// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para);
// })

// console.log(paras[2]); 

// const errors = document.querySelectorAll('.error');

// console.log(errors);


/* Other Ways to Query the DOM */

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name 
// const errors = document.getElementsByClassName('error');
// console.log(errors); 
// console.log(errors[0]);

// get elements by their tag name 
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

/* Adding & Changing Page Content */
// const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText += ' pleased to meet you';
// console.log(para.innerText);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// content.innerHTML = '<h2>Sympathy for the Devil</h2>'

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p.error');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;');

const title = document.querySelector('h1');
title.setAttribute('style', 'margin: 50px');
console.log(title.style);
title.style.color = 'orange';

console.log(content.classList);

content.classList.add('error');
content.classList.remove('error');


const newTitle = document.querySelector('.title');

newTitle.classList.toggle('test');
// newTitle.classList.toggle('test');






























