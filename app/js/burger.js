(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const items = menu.querySelectorAll('.menu__item');
    burger.addEventListener('click', () => {
        if(menu.classList.contains('active')) {
            menu.classList.remove('active')
            burger.classList.remove('active')
        } else {
            menu.classList.add('active');
            burger.classList.add('active');
        }
    })    

    items.forEach(i => {
        i.addEventListener('click', () => {
            menu.classList.remove('active');
            burger.classList.remove('active');
        })
    })
    
})();