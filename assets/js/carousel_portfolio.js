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