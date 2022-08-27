// counter up
$('.count').counterUp({
    delay: 15,
    time: 2000
});

// slick slider
$('.team_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
          
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });
      
  // animate bg add
  $(window).scroll(function(){

    $scrollTop = $(this).scrollTop();
    if($scrollTop > 200){
      $(".navbar").addClass('nav_bg');
    }else{
      $(".navbar").removeClass('nav_bg');
    }

  });