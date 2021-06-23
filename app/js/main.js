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

    block.find('.toggle-body').find('.mobileScroll').mCustomScrollbar();
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

//попап карты на выборе доставик
$('.popup__map-btn').on('click',function(){
    if($(this).closest('.popup__map-block').find('input').is(':checked')){
        $('.delivery-radio__map').slideToggle();
    }
})
$('.popup__map-close').on('click',function(){
    $(this).closest('.delivery-radio__map').slideToggle();
})
//попап карты на выборе доставки конец

//удаление карточки
 $('.card-del').on('click',function(){
     $(this).closest('.card-block').remove();
 })
//удаление карточки конец

//burger mobile
 $('.burger-btn').on('click',function(){
     $(this).closest('.burger-menu').toggleClass('burger-open');
 })
//burger mobile end

// //ползунок
// $("#polzunok").slider({
//     animate: "slow",
//     range: true,    
//     values: [ 10, 65 ],
//     slide : function(event, ui) {    
//         $("#result-polzunok").text( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] );        
//     }
// });
// // $( "#result-polzunok" ).text("от " + $("#polzunok").slider("values", 0) + " до " + $("#polzunok").slider("values", 1));
// //ползунок конец

$(document).ready(function() {

//ползунок в конце страницы
	var width = $('.progress-bar__body').width();
    var maxPage = parseInt($('.number__page-all').text());
    var nowPage = parseInt($('.number__page-now').text());
    // console.log(width + ' ' + maxPage + ' ' + nowPage)
    var line = $('.progress-bar__line');

    line.width((width / maxPage) * nowPage)
//ползунок в конце страницы конец

//mCustomScrollBar
    // $('.mCustomScrollBar').mCustomScrollbar();
//mCustomScrollBarr

//изменение положения кнопки в корзине
    if($(window).width() < 991){
        $('.page-cart__button-box').appendTo('.page-cart__body');
    }else{
        if($('.main').hasClass('cart-placed')){
            $('.page-cart__button-box').appendTo('.page-cart__success');
        }else{
            $('.page-cart__button-box').appendTo('.page-cart__container')
        }
    }
    $(window).resize(function(){
        if($(window).width() < 991){
            $('.page-cart__button-box').appendTo('.page-cart__body');
            // alert();
        }else{
            if($('.main').hasClass('cart-placed')){
                $('.page-cart__button-box').appendTo('.page-cart__success');
            }else{
                $('.page-cart__button-box').appendTo('.page-cart__container')
            }
        }
    });
//изменение положения кнопки в корзине конец
});

//filters
    $('.sidebar__filter, .filters-close').on('click',function(){
        $('.sidebar-burger').slideToggle();
    })
//filters end

//выбираем самовывоз и скрывается "Адрес доставки"
$('.delivery-radio__label').on('click',function(){
    if($(this).hasClass('popup__map-block')){
        if(!$(this).find('.delivery-radio__input').prop("checked")){
        $(this).closest('.page-cart__container').find('.delivery-address').fadeOut();
        $(this).closest('.page-cart__container').find('.delivery-address__select-company').fadeOut();
        }
    }else{
        $(this).closest('.page-cart__container').find('.delivery-address').fadeIn();
        $(this).closest('.page-cart__container').find('.delivery-address__select-company').fadeIn();
    }
})
//выбираем самовывоз и скрывается "Адрес доставки" конец

$(document).ready(function(){
    $(".niceScroll").niceScroll({
        cursorcolor: '#E1A986',
        cursorborder: '0',
        cursorwidth: '5px',
        // cursorminheight: '40px'
    });
    if($('body').find('div').hasClass('sidebar__slider-slide')){
        // alert();
        var slider = $('.sidebar__slider-slide');

        noUiSlider.create(slider[0], {
            start: [0, 100],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }
})