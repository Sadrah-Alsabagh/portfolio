// Hero
var typed = new Typed('.multiple-text', {
    strings: [ 'Full-Stack developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
  });

  // Navbar
  window.onscroll = () =>{
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
  }