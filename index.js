const header = document.traveltimeSelector("header");


window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY >60)
});

let menu= document.traveltimeSelrctor('#menu-icon');
let navar=document.traveltimeSelrctor('.navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
