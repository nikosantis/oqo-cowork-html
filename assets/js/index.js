// carousel intro
var carou1 = $('.CarouselHeader')
var carou2 = $('.CarouselIntroText')
var carou3 = $('.SeparatorIntro__Carousel')

carou1.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:10000,
    smartSpeed: 1000
})

carou2.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:10000,
    smartSpeed: 700
})

carou3.owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 700,
    items: 3,
    margin:50,
    nav:true,
    dots: true,
    navText: ['<i class="material-icons"> keyboard_arrow_left </i>', '<i class="material-icons"> keyboard_arrow_right </i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})