document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#team', {
        autoplay : false,
        perPage : 4,
        perMove : 1,
        autoHeight : true,
        pagination:false,
        arrows : false ,    
        breakpoints: {
            567: {
                perPage: 2,
                autoplay : false,
            },
            768: {
                perPage: 3,
                autoplay : false,
            },
            1024: {
                perPage: 4,
                autoplay : false,
            },
        }
    } ).mount();
} );