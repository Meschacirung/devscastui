window.addEventListener('scroll', function(){
    if (window.pageYOffset > 250) {
        document.querySelector('#navbar').classList.remove('py-4')
        document.querySelector('#navbar').classList.add('shadow-sm', 'py-2')
        document.querySelector('.dots').classList.add('fixed', 'left-0', 'top-48');
        document.querySelector('body').classList.add('bg-gray-800');
    }

    else  {
        document.querySelector('#navbar').classList.remove('shadow-sm', 'py-2')
        document.querySelector('#navbar').classList.add('py-4')
        document.querySelector('.dots').classList.remove('fixed', 'left-0', 'top-48');
        document.querySelector('body').classList.remove('bg-gray-800');
    }
});

let navbar = document.querySelector("#navbar");
let navlinks = document.querySelector("#navlinks");
let navfooter = document.querySelector("#navfooter");
let navuser = document.querySelector("#navuser");
let hamburgero = document.querySelector("#navbar-open");
let hamburgerc = document.querySelector("#navbar-close");

hamburgero.addEventListener('click', function(){
    navbar.classList.remove('h-auto');
    navbar.classList.add('h-full' , 'bg-gradient-to-b', 'from-white', 'via-gray-50', 'to-white');

    navlinks.classList.remove('-mt-40', 'hidden');
    navlinks.classList.add('mt-0', 'block');

    navfooter.classList.remove('hidden', '-mt-72');
    navfooter.classList.add('block', 'mt-0');

    navuser.classList.remove('hidden', '-mt-10');

    hamburgero.classList.add('hidden');
    hamburgerc.classList.remove('hidden');
});

hamburgerc.addEventListener('click', function(){
    navbar.classList.add('h-auto' , 'bg-white');
    navbar.classList.remove('h-full' , 'bg-gradient-to-b', 'from-white', 'via-gray-50', 'to-white');

    navlinks.classList.add('-mt-40', 'hidden');
    navfooter.classList.add('hidden', '-mt-72');
    navfooter.classList.remove('block');

    navuser.classList.add('hidden', '-mt-10');

    hamburgero.classList.remove('hidden');
    hamburgerc.classList.add('hidden');
})

let interact = document.querySelector("#interact")
let inticon = document.querySelector("#inticon")
let interactions = document.querySelector("#interactions")


interact.addEventListener('click', ()=>{
    
    if (interactions.classList[11] == 'unactive'){
        inticon.classList.remove('rotate-270')
        interactions.classList.remove('unactive')

        document.querySelector("video").classList.remove('rounded-r-2xl')
    } else {
        inticon.classList.add('rotate-270')
        interactions.classList.add('unactive')

        document.querySelector("video").classList.add('rounded-r-2xl')
    }
    

})
