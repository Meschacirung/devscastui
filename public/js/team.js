document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#team', {
        autoplay : false,
        perPage : 1,
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

let slideItems = document.querySelectorAll(".splide__slide")

if (window.screen.width > 1024){
    document.querySelector(".splide").classList.remove("splide")
    document.querySelector(".splide__track").classList.remove("splide__track")
    document.querySelector(".splide__list").classList.remove("splide__list")

    for (let i = 0; i => slideItems.length; i++){

        slideItems[i].classList.remove("splide__slide")

    }
    
} else {
    document.querySelector(".splide").classList.add("splide")
    document.querySelector(".splide__track").classList.add("splide__track")
    document.querySelector(".splide__list").classList.add("splide__list")
    
}