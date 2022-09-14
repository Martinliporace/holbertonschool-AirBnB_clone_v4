#!/usr/bin/node
//Write a JavaScript script (static/scripts/1-hbnb.js)

const button_listener = document.getElementById('.button');
const checks_listener = document.querySelectorAll('.checks');

button_listener.addEventListener('click', function() {
    checks.forEach((e)=>{
        console.log(e.value);
    });
});