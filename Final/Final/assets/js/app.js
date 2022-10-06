$(document).ready(function() {
    $('.menu').click(function() {
      $('nav').toggleClass('active');
      $(this).find('i').toggleClass('fa-bars fa-times');
    })
  });

  $(function(){
    $('.selectpicker').selectpicker();
});

$(function(){
    $('.selectpicker').selectpicker();
});

$(document).ready(function() {
  $(".minimalist-vertical-menu").on("mouseleave", function() {
    $(".minimalist-tab-content").removeClass("active");
    $(".minimalist-tab-menu>.list-group>li").removeClass("active");
  });
                                                  
  $("li").on( "mouseleave", function() {
     if(!$(".minimalist-tab-content").hasClass("active")) {
      $(this).removeClass("active");
    }
  }).on( "mouseenter", function(e) {
    e.preventDefault();
    $(this)
      .siblings("li.active")
      .removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $(".minimalist-tab-content")
      .removeClass("active")
    $(".minimalist-tab>.minimalist-tab-content")
      .eq(index)
      .addClass("active");
  });
});

$('.slider').slick({
  dots:false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  autoplay:true,
  
  autoplaySpeed:1000,
  
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
   
  ]
});

$('.corusel-category').slick({
  dots:false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  autoplay:true,
  
  autoplaySpeed:1000,
  
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
       
        dots:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
   
  ]
});

var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.onload= function () {
 setInterval(function(){ 
     plusSlides(1);
 }, 3000);
 }
