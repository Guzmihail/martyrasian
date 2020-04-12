import logger from './modules/logger';

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`div ol a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`div ol a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('div[id]').forEach((div) => {
        observer.observe(div);
    });
    
});

$(function(){

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(" .nav-links li");
    const elem = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        elem.classList.toggle("ele");
        navLinks.classList.toggle("open");
        links.forEach(link =>{
            link.classList.toggle("fade");
        });
        $('.line').toggleClass('leni-none');
    });


    $('.services-options').click(function(){
        $(this).next().slideToggle(900);
        $(this).toggleClass("expand");

        
    });

    
    
    var $slider = $('.faq__slider');
    var $progressBarLabel = $( '.slider__label' );
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
          var calc = ( (nextSlide) / (slick.slideCount) ) * 172;
          $progressBarLabel.css('margin-left', calc + '%');
        });
        $slider.slick({
        inifinite:false,
        slidesToShow: 1,
        initialSlide:1,
        prevArrow:'<div class="slider-arrows arrowLeft"></div>',
        nextArrow:'<div class="slider-arrows arrowRight"></div>',
        responsive: [
                    {
                 breakpoint: 1024,
                 settings: {
              
                   slidesToShow: 1,
              
                   slidesToScroll: 3,
              
                   infinite: true,
              
                   
              
                 }
              
               },
               {
                breakpoint: 774,
                settings: {
                  prevArrow:false,
                  nextArrow:false,
                }
               },
              
               {
              
                 breakpoint: 600,
              
                 settings: {
                  prevArrow:false,
                  nextArrow:false,
                   slidesToShow: 2,
              
                   slidesToScroll: 2
              
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
  

    // Modal Form
        $('.promo__wrapper-box').click(function(){
          $('.modal-Form').slideToggle();
        $('.modal-Form').addClass('modal-Form__pseodo');
        $('body').css('overflow','hidden');
          
      });

      $('.modal__close-fomr').click(function(){
        $('.modal-Form').fadeOut();
        $('.modal-Form').removeClass('modal-Form__pseodo');
        $('body').css('overflow','auto');
      });
    // Modal Form

    // Modal Video
      $('.video-btn').click(function(){
        $('.modal-video').slideToggle();
      // $('.modal-Form').addClass('modal-Form__pseodo');
        $('body').css('overflow','hidden');
      });

      $('.modal__close-video').click(function(){
        $('.modal-video').fadeOut();
        // $('.modal-Form').removeClass('modal-Form__pseodo');
        $('body').css('overflow','auto');
      });

    // Modal Video

      // Modal Slider
      $('.faq__slider-link').click(function(){
        $('.modal').slideToggle();
        $('body').addClass('no-scroll');
      });

      $('.modal__close').click(function(){
        $('.modal').fadeOut();
        $('body').removeClass('no-scroll');
      });
      // Modal Slider


logger();

  
});