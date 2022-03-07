const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',()
=>{
//change the theme of website
document.body.classList.toggle('dark');
document.header.clssList.toggle('dark');
});

var username = prompt("What is your name?");