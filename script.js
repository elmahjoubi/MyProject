
//Menu fixed
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('.site-header').addClass("menu-fixed");
  }
  else{
    $('.site-header').removeClass("menu-fixed");
  }
});


//Tab page menus
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});


//AOS animate
AOS.init({
  easing: 'ease-in-out-sine'
});

//Menu mobile
$(document).ready(function(){

  $('#menu-toggle').click(function(){
    $(this).toggleClass('open');
  });

  $("#menu-toggle").click(function(){
    $("#menu-mobile").slideToggle("slow");
  });
  $("#close-menu").click(function(){
    $("#menu-mobile").slideToggle("slow");
  });
});

//Slider accueil

  $('#slider').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots:false,
      navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      autoplay:true,
      autoplayTimeout:4000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });


//Slider actus

  $('#actus').owlCarousel({
      loop:true,
      margin:40,
      nav:true,
      dots:false,
      navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      autoplay:true,
      autoplayTimeout:2000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });


//back-top
$(document).ready(function(){

  $("#back-top").hide();
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

});
