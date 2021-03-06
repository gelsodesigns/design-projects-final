$(document).ready(function() {
    
    /* Animation on scroll */
    $(function() {
      $("a[href*='#']:not([href='#'])").click(function() {
         if (location.pathname.replace(/[?'/,]/g,'') == this.pathname.replace(/[?'/,]/g,'') && location.hostname == this.hostname) {
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
});