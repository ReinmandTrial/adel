document.querySelectorAll('.slider-color__container').forEach(function (elem) {
    new Swiper(elem, {
        navigation: {
            nextEl: elem.nextElementSibling.nextElementSibling,
            prevEl: elem.nextElementSibling,
        },
        grabCursor: false, //  курсор-рука
        // autoHeight: true, // автовысота
        slidesPerView: 'auto', //кол-во показываемых слайдов
        watchOverflow: true, //если слайдов мало, - слайдер отключается
        // spaceBetween: '10', // отступы между слайдами
        loop: true, // бесконечный слайдер
        slideToClickedSlide: false,
        breakpoints: {
            0: {
                // slidesPerView: 5,
                // spaceBetween: 15,
            },
            768: {
                // slidesPerView: 6,
                // spaceBetween: 20,
            },
            992: {
                // spaceBetween: 29,
            },
        },
    });
});
document.querySelectorAll('.slider__container').forEach(function (elem) {
    new Swiper(elem, {
        navigation: {
            nextEl: elem.nextElementSibling.nextElementSibling,
            prevEl: elem.nextElementSibling,
        },
        grabCursor: false, //  курсор-рука
        // autoHeight: true, // автовысота
        slidesPerView: 'auto', //кол-во показываемых слайдов
        watchOverflow: true, //если слайдов мало, - слайдер отключается
        spaceBetween: 20, // отступы между слайдами
        loop: true, // бесконечный слайдер
        slideToClickedSlide: false,
        simulateTouch: false,
        breakpoints: {
            0: {

                slidesPerView: '2',
            },
            768: {
                slidesPerView: '3',
            },
            992: {
                slidesPerView: 'auto',
            },
        },
    });
});