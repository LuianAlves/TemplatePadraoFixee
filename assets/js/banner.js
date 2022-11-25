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