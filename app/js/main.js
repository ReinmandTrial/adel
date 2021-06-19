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
//Открытие блоков
$('.toggle-btn').on('click', function () {
    var btn = $(this);
    var block = btn.closest('.toggle-block');

    btn.closest('.toggle-block').find('.toggle-body').slideToggle('slow');

    block.find('.toggle-show').slideToggle('slow');

    block.find('.toggle-icon').toggleClass('icon-triangle-down');
    block.find('.toggle-icon').toggleClass('icon-triangle-up');
})

$('.toggle-btn--close').on('click', function () {
    var btn = $(this);
    var block = btn.closest('.toggle-block');
    $(this).closest('.toggle-block').find('.toggle-body').slideToggle('slow');
    block.find('.toggle-show').slideToggle('slow');
})
//конец открытие блоков

//select 
//select open-close
$('.select-header').on('click', function () {
    var btn = $(this);
    var block = btn.closest('.select');
    block.find('.select-body').slideToggle();
    block.find('.select-icon').toggleClass('icon-triangle-down');
    block.find('.select-icon').toggleClass('icon-triangle-up');
})
//select open-close

//select выбор элемента
$('.select-item').on('click', function () {
    var btn = $(this);
    var block = btn.closest('.select');
    var thisText = btn.text();
    block.find('.select-title').text(thisText);

    block.find('.select-input').val(thisText);

    block.find('.select-body').slideToggle();
    block.find('.select-icon').toggleClass('icon-triangle-down');
    block.find('.select-icon').toggleClass('icon-triangle-up');
})
//select end

// сердечко
$('.heart-item').on('click', function () {
    $(this).closest('.heart-block').find('.heart-item').toggleClass('active');
})
// сердечко конец

//count 
$(function () {
    $('body').on('input', '.count-input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
})
$('.count-mine').on('click', function () {
    var val = $(this).closest('.count-block').find('.count-input').val();
    if (val > 0) {
        $(this).closest('.count-block').find('.count-input').val(parseInt(val) - 1);
    }
})
$('.count-more').on('click', function () {
    var val = $(this).closest('.count-block').find('.count-input').val();
    if (val < 999) {
        $(this).closest('.count-block').find('.count-input').val(parseInt(val) + 1);
    }
})
//count end

//удаление карточки
$('.card-del').on('click', function () {
    $(this).closest('.card-block').remove();
})
//удаление карточки конец