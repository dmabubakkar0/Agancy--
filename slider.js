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
   center:true,
    items:3,
    responsive: {
      0: {
        items: 2,
        nav: false,
       
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        margin: 30,
      },
    },
  });
});
