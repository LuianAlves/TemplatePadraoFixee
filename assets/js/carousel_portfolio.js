$(".portfolio-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 6,
            nav: false
        },
        991: {
            items: 3,
            nav: false
        },
    },
});