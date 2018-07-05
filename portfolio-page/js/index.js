$(document).ready(function() {
    
    $(function() {
      $("a[href*='#']:not([href='#'])").click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                  $('html, body').animate({
                    scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }
      }); 
    });
    
 $('.js--nav-icon').click(function() {
     var nav = $('.nav-links');
     var icon = $('.js--nav-icon i');
     
     nav.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
     
 });
    
    
});