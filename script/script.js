//Практически весь код на js написан с помощью chatgpt. Своими руками я лишь правил

window.addEventListener('DOMContentLoaded', function() {
    updateImg();
    //сокрытие мобильного меню при перезагрузке
    var dropdown = document.querySelector('.dropdown-mobmenu');
    dropdown.classList.remove('show-dropdown');
    //запуск слайдрера
    updateSlider();
});
window.addEventListener('resize', function() {
    updateImg();
});
function updateImg() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 1024 && windowWidth > 500) {
        //граница в первом блоке
        document.querySelector('.borderimg').src="./../source/main/block1/vector-2.png";
        //текст во втором блоке
        document.querySelector('.text').innerHTML = 'Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является элементом латинского текста классического автора и философа Цицерона. Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет совсем неразумно пытаться передать содержание; это не гениально, не правильно, используется даже не понятный латинский.';
    } 
    else if (windowWidth <= 500) {
        document.querySelector('.borderimg').src="./../source/main/block1/vector-3.svg";
        document.querySelector('.text').innerHTML = 'Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является элементом латинского текста классического автора и философа Цицерона. Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет совсем неразумно пытаться передать содержание; это не гениально, не правильно, используется даже не понятный латинский.';
    }
    else {
        document.querySelector('.borderimg').src="./../source/main/block1/vector-1.png";
        document.querySelector('.text').innerHTML = 'Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель.<br><br> Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является элементом латинского текста классического автора и философа Цицерона. Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет совсем неразумно пытаться передать содержание; это не гениально, не правильно, используется даже не понятный латинский.';
    }
}
//показ мобильного меню
function showDropdown() {
    var dropdown = document.querySelector('.dropdown-mobmenu');
    if (dropdown.classList.contains('show-dropdown')) {
        dropdown.classList.remove('show-dropdown');
    } else {
        dropdown.classList.add('show-dropdown');
    }

}
//функционал слайдера
function updateSlider() {
    const slider = document.querySelector('.slider');
    const sliderHolder = document.querySelector('.slider-holder');
    const sliderBlocks = document.querySelectorAll('.header-block');
    const sliderLineBlocks = document.querySelectorAll('.slider-line-block');
    let currentSlide = 0;

    slider.addEventListener('click', () => {
        nextSlide();
        updateActiveBlock();
    });

    function nextSlide() {
    currentSlide++;
    if (currentSlide >= sliderBlocks.length) {
        currentSlide = 0;
    }
    sliderHolder.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    function updateActiveBlock() {
        sliderLineBlocks.forEach((block, index) => {
            if (index === currentSlide) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        });
    }
}