// let navbar = document.querySelector('.navbar');
// let btn = document.querySelector('button')
// let burger = document.querySelector('navbar-toggler-icon')
// let itext = document.getElementById('itext');
// let ihtml = document.querySelector('#ihtml');

// itext.innerText = "le code hexadecimale pour la croix est &#x2715;"
// ihtml.innerHTML = "le code hexadecimale pour la croix est &#x2715;"

// btn.addEventListener('click', ()=>{
//     navbar.classList.toggle('active');
//     if (navbar.classList.contains('active')) {
//       btn.innerHTML = "&#x2715;";
//     } else {
//       btn.innerHTML = "&#x2630;";
//     }
//   })
//   let slider = document.querySelector('')
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)