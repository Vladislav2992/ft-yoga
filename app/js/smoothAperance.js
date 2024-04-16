(function () {    
    let animatedElements = document.querySelectorAll('.anim-item')
    document.addEventListener('scroll', animScroll)    
    function animScroll () {
        if(animatedElements.length > 0) {
            for (let i = 0; i < animatedElements.length; i++) {
                const animItem = animatedElements[i];
                const animItemHeigth = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStarn = 4;
                
                //вычисляем точку старта 
                let animItemPoint = window.innerHeight - animItemHeigth / animStarn; // докрутили до 1/4 размера элемента (если элемент меньше окна браузера)
                
                // если высота элемента выше высоты экрана, определяем точку старта как высота экрана - 1/4 высоты экрана
                if (animItemHeigth > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStarn
                }
                
                // начинаем добавлять класс, когда докрутили до элемента 
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeigth)) {
                    animItem.classList.add('animated')
                } 
            }
        
            function offset (el) {
                const rest = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rest.top + scrollTop, left: rest.left + scrollLeft }
            }
        }
    }
    animScroll()
})();