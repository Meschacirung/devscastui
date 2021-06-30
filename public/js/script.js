let navbar = document.querySelector("#navbar");
let navlinks = document.querySelector("#navlinks");
let navuser = document.querySelector("#navuser");
let hamburger = document.querySelector("#hamburger");

hamburger.addEventListener('click', function(){

    navlinks.classList.remove('hidden', '-mt-12')
    navlinks.classList.add('mt-3')
    /*
    if (document.querySelector('.line-1').classList[3] != 'rotate-1'){

        document.querySelector('.line-1').classList.add('rotate-1');
        document.querySelector('.line-2').classList.add('hidden');
        document.querySelector('.line-3').classList.add('rotate-2');
        

        navbar.classList.remove('h-14');
        navbar.classList.add('h-full');

        navlinks.classList.remove('hidden');
        navlinks.classList.add('mt-0', 'block');

        navuser.classList.remove('hidden', '-mt-10');
    } else {

        document.querySelector('.line-1').classList.remove('rotate-1');
        document.querySelector('.line-2').classList.remove('hidden');
        document.querySelector('.line-3').classList.remove('rotate-2');

        navbar.classList.add('h-14');
        navbar.classList.remove('h-full');

        navlinks.classList.add('hidden');
        navlinks.classList.remove('mt-0', 'block');

        navfooter.classList.add('hidden');
        navfooter.classList.add('block', 'mt-0');

        navuser.classList.add('hidden', '-mt-10');

    }
    */

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
