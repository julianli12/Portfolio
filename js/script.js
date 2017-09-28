$(function(){
    "use strict";

    var topoffset = 50;

    //activate Scrollspy
    $('body').scrollspy({
      target:'header .navbar',
      offset: topoffset
    });

    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#featured'){
      $('header nav').addClass('inbody');
    } else{
      $('header nav').removeClass('inbody');
    }

    // Add an inbody class to nav when fire
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
      var hash = $(this).find('li.active a').attr('href');

      if(hash !== '#featured'){
        $('header nav').addClass('inbody');
      } else{
        $('header nav').removeClass('inbody');
      }
    });

    //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  //carousel auto start
  $('.carousel').carousel({
    interval: 5000,
    pause: false,
    /*auto warp to first, keyboard command
    warp: false,
    keyboard: false*/
  });

  //automately generate carousel indicator
  var slideqty = $('#featured .item').length;
  for (var i=0; i<slideqty; i++){
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
    if (i==0) {
      var insertText = '<li data-target="#featured" data-slide-to="' + i + '" class="active"></li>';
    }
    $('#featured ol').append(insertText);
  }

  //full height
  var wheight = $(window).height(); //get height of window
  $('.fullheight').css('height', wheight);

  //convert image from hero to background image
  $('#featured .item img').each(function(){
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //adjust height of .fullheight elements on window resize
  $(window).resize(function(){
    wheight = $(window).height();
    $('.fullheight').css('height', wheight);
  });
})
