let navbar = document.querySelector("#navbar");
let navlinks = document.querySelector("#navlinks");
let navuser = document.querySelector("#navuser");
let hamburger = document.querySelector("#hamburger");

hamburger.addEventListener('click', function(){

    if(document.querySelector('#links').classList.contains('invisible')) {
        navlinks.classList.remove('h-0')
        navlinks.classList.add('py-6')
    
        document.querySelector('.line-1').classList.add('rotate-45', '-mb-1');
        document.querySelector('.line-2').classList.add('-rotate-45');
        document.querySelector('.line-2').classList.remove('mt-2');
        hamburger.classList.remove('-mt-1');
    
        setTimeout(function (){
            document.querySelector('#links').classList.remove('invisible', '-mt-32', 'opacity-0');
            document.querySelector('#navactions').classList.remove('invisible', 'opacity-0');
        }.bind(this), 150)
    } else{
        document.querySelector('#links').classList.add('invisible', '-mt-32', 'opacity-0');
        document.querySelector('#navactions').classList.add('invisible', 'opacity-0');

        document.querySelector('.line-1').classList.remove('rotate-45', '-mb-1');
        document.querySelector('.line-2').classList.remove('-rotate-45');
        document.querySelector('.line-2').classList.add('mt-2');
        hamburger.classList.add('-mt-1');
    
        setTimeout(function (){
            navlinks.classList.add('h-0')
            navlinks.classList.remove('py-6')
        }.bind(this), 150)
    }
});

let interact = document.querySelector("#interact")
let inticon = document.querySelector("#inticon")
let interactions = document.querySelector("#interactions")


interact.addEventListener('click', ()=>{
    
    if (interactions.classList[14] == 'unactive'){
        inticon.classList.remove('rotate-270')
        interactions.classList.remove('unactive')

        document.querySelector("video").classList.remove('md:rounded-r-2xl')
    } else {
        inticon.classList.add('rotate-270')
        interactions.classList.add('unactive')

        document.querySelector("video").classList.add('md:rounded-r-2xl')
    }
    

})

let saved = document.querySelector('#saved')
let expander = document.querySelector('#expand')
let cContainer = document.querySelector('#mContent')
let closer = document.querySelector('#closer')

closer.addEventListener('click', ()=>{
    saved.classList.add('-mb-100')
})

expander.addEventListener('click', ()=>{

    if (cContainer.classList[3] != 'scrollbar-black'){

        cContainer.classList.add('scrollbar-black', 'scroller');
        saved.classList.remove('-mb-56');
        expander.classList.add('rotate-90');

    }else{
        cContainer.classList.remove('scrollbar-black', 'scroller');
        saved.classList.add('-mb-56');
        expander.classList.remove('rotate-90');
    }

})


let portfolio = document.querySelector("#toportfolio")

portfolio.addEventListener('click', ()=>{

    document.getElementById('#main').scrollIntoView ( {
        behavior : 'smooth',
    });

})
