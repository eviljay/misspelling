jQuery(document).ready(function(){
    new LazyLoad({});

    const games_carousel2 = new Swiper(".games__list", {
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            480: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            900: {
                slidesPerView: 6,
                spaceBetween: 20
            }
        },
    });
});