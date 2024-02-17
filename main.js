const btn=document.querySelector(".burger");
const menu=document.querySelector(".offcanvas-menu");
const overlay=document.querySelector(".overlay");

btn.onclick=()=>{

if(menu.style.left === '0px') {
    menu.style.left = '-250px'; 
    overlay.style.display = 'none';

} else {
    menu.style.left = '0px'; 
    overlay.style.display = 'block';

}

}