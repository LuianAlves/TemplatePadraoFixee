/* -------------------------------------------------- 
    # BANNER DE IMAGENS
   --------------------------------------------------
*/ 
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 890,
    autoplayHoverpause: true,

    responsive: {
        0: {
            items: 3,
            nav: false
        },
        600: {
            items: 4,
            nav: false
        },
        991: {
            items: 5,
            nav: false
        },
    },
});

/* -------------------------------------------------- 
    # PORTFOLIO
   --------------------------------------------------
*/ 

$(".portfolio-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        991: {
            items: 1,
            nav: false
        },
    },
});