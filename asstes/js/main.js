// show and hide menu


$(document).ready(function(){

    'use strict';

    $(window).scroll(function(){

        'use strict'

        if ($(window).scrollTop() < 100){

            $('.navbar-default').css({
                'background-color':'rgba(59,59,59,0)'
            })
            
            $('.navbar').css({

                'margin-top':'-100px',
                'opacity' :0

            })

        }else{
            $('.navbar').css({
                'margin-top':0,
                'opacity':1
            })

            $('.navbar-default').css({
                'background-color':'rgba(59,59,59,0.7)',
                'border-color':'#ddd'
            })
    
        }

       
    })
     

        // active menu item on click


})

$(document).ready(function(){

    'use strict'


      // Add smooth scrolling to all links
      $(".nav-item").on('click', function(event) {
      
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if

        //   active menu on click

        $('.navbar-nav li a').click(function(){
            $('.navbar-nav li').removeClass('activee')

            $(this).parent().addClass('activee')
        })

        // highlight menu on scroll


        })


      });

      var owl = $('.owl-carousel');
      owl.owlCarousel();
      // Go to the next item
      $('.customNextBtn').click(function() {
          owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.customPrevBtn').click(function() {
          // With optional speed parameter
          // Parameters has to be in square bracket '[]'
          owl.trigger('prev.owl.carousel', [300]);
      })


$(document).ready(function(){
    new WOW().init();
})
    

       
       
