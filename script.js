function menuShow(){
  let menuMobile = document.querySelector('.menu-responsivo');
  if(menuMobile.classList.contains('open')  ){
    menuMobile.classList.remove('open');
    
  }else{
    menuMobile.classList.add('open')
  };
};
$(document).ready(function(){
      $('.carrossel01').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });