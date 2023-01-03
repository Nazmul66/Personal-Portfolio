////  preloader raw code
  $(document).ready(function(){
    $(window).load(function(){
      $('.preloader').fadeOut('slow');
    });
  });


// typed.js Code
var typed = new Typed('.type', {
    strings: ['Nazmul Hassan', 'Web Designer','Freelancer', 'Web Developer'],
    smartBackspace: true, // Default value

    loop: true,
    typeSpeed: 60,
    backSpeed: 60,
    startDelay: 500,
    backDelay: 2000,
  });

  // vanila tilt.js Code
  
  VanillaTilt.init(document.querySelectorAll(".workout"), {
		max: 30,
		speed: 600,
	});

  /////  Owl carousel Code

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
    autoplay: false,
    // autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

  ////  Scrolltop bar jquery code
  $(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".fa-chevron-up").fadeIn();
        }
        else{
            $(".fa-chevron-up").fadeOut();
        }
    });

    $(".fa-chevron-up").click(function(){
        $("body").animate({scrollTop:0
        
        },500);
    });
});

////  sticky navigation jquery code
$(document).ready(function(){

  $(window).scroll(function(){
   if($(this).scrollTop() > 10){
     $("header").addClass("sticky");
   }else{
    $("header").removeClass("sticky");
   }
  });
});

////  CLick navigation jquery code
 $(document).ready(function(){
   $('ul li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
   });
 });

//// AOS Javascript code

AOS.init({
  duration: 1500,
});

/// Custom js code
function click1(){
  var mar = document.querySelector("#menu");
  mar.classList.add("active1"); 
}

function click2(){
  var mar = document.querySelector("#menu");
  mar.classList.remove("active1"); 
}
