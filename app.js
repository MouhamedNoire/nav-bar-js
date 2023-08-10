//classList -shows/gets all classes 
//contains -check ClassList for a specific class
//add -add class
//remove -remove class
//toggle -toggle class

const navToggle= document.querySelector('.nav-toggle');
const links= document.querySelector('.links');

navToggle.addEventListener('click', ()=>{
    //check if the class we wanted is here 
    //console.log(links.classList.contain('links'));

    // a method thats work
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }
    // else{
    //     links.classList.add('show-links');
    // }

    //another method that work too

    links.classList.toggle("show-links");
})