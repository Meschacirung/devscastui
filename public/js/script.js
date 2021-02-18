window.addEventListener('scroll', function(){
    if (window.pageYOffset > 600) {
        document.querySelector('.navbar').classList.remove('py-4')
        document.querySelector('.navbar').classList.add('shadow-sm', 'py-2')
    }

    else  {
        document.querySelector('.navbar').classList.remove('shadow-sm', 'py-2')
        document.querySelector('.navbar').classList.add('py-4')
    }
})