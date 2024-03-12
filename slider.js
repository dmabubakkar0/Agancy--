$(document).ready(function () {
  $(".hero_slider ").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: 50,
    nav: false,
    center: true,
    items: 2,
    responsive: {
      0: {
        items: 3,
        nav: false,
      },
      600: {
        items: 5,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
        margin: 30,
      },
    },
  });
});


$(document).ready(function () {
  $(".testimonial ").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: 100,
    nav: false,
   
    responsive: {
      480:{
        items:0,  
        nav:false,  
      },
      
      678:{
        items:3,  
        center:true, 
      },
      
      960:{
        items:1,   
        margin:20,  
        center:false, 
      
      },
      
      1200:{
        items:3,
        loop:false,
        margin: 30,
    }
  }
  });
});
