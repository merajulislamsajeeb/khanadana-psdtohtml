$(document).ready(function () {
    $('.search').on('click', function () {
        $('.search-box').toggle("slow");
    });


    //About_section-slider///
    var swiper = new Swiper('.today-hot-dishes', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        lazyLoadingInPrevNext: true,
         effect: 'coverflow',
          coverflowEffect: {
              rotate: 0,
              stretch: 50,
              depth: 200,
              modifier: .4,
              slideShadows: false,
            },
        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next',
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 1,
            }
        }
    });
    
    //BLOG_section-collapse-content///
    $('.collapse-btn').on('click', function () {
        if ($('.fas').hasClass('fa-angle-double-down')) {
            $('.fas').removeClass('fa-angle-double-down');
            $('.fas').addClass('fa-angle-double-up');
        } else {
            $('.fas').removeClass('fa-angle-double-up');
            $('.fas').addClass('fa-angle-double-down');
        }

    });
    
     //====SmoothScroll=======//
    var scroll = new SmoothScroll('a[href*="#"]');
    
        //=======Return-To-Top======//
    window.addEventListener("scroll",function(){
        var navbar = document.querySelector(".return-to-top");
         navbar.classList.toggle("show", window.scrollY >100);

    })
});