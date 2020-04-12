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





