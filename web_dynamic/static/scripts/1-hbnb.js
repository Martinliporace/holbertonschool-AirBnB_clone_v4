#!/usr/bin/node
//Write a JavaScript script (static/scripts/1-hbnb.js)

addEventListener('DOMContentLoaded', () => {
    const button_listener = document.getElementById('.button');
    const checks_listener = document.querySelectorAll('.checks');
    
    button_listener.addEventListener('click', function() {
        checks_listener.forEach((e)=>{
            console.log(e.value);
        });
});
});
