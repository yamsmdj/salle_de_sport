let navbar = document.querySelector('.navbar');
let btn = document.querySelector('button')
let burger = document.querySelector('navbar-toggler-icon')

btn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
      btn.innerHTML = "&#x2715;";
    } else {
      btn.innerHTML = "&#x2630;";
    }
  })

