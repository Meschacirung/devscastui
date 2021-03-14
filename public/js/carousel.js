document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#podcasts', {
        autoplay : false,
        perPage : 4,
        perMove : 1,
        autoHeight : true,
        pagination:false,
        arrows : true ,    
        breakpoints: {
            640: {
                perPage: 2,
                autoplay : false,
            },
            768: {
                perPage: 4,
                autoplay : false,
            },
            1024: {
                perPage: 3,
                autoplay : false,
            },
        }
    } ).mount();
    
} );