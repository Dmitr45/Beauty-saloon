console.log('Скрипт app.js подключен и работает!');

import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebP();


import * as slider from "./modules/slick.js";
slider.sliderJQ();



// Слайдер в header
$(document).ready(function(){
$('.header_slider').slick({
        arrows: true, // Нужны ли стрелки
        dots: true,
        autoplay: true, //true,
        slidesToScroll:1,
        speed: 3000,

});
// Слайдер в haircuts_slider
let  haircutsSlider = () => {
let  haircutsSliderParam = () => {
        const windowInnerWidth = window.innerWidth;
              if (windowInnerWidth < 1170) {
                    return({
                              arrows: true, // Нужны ли стрелки
                              dots: false,
                              slidesToShow: 1,
                              slidesToScroll: 1,
                      })
              } else {
                     return({
                              arrows: true, // Нужны ли стрелки
                              dots: false,
                              slidesToShow: 2,
                              slidesToScroll: 2,
                      })
              }
      }
$('.haircuts_slider').slick(haircutsSliderParam());
};
setInterval(haircutsSlider(),1000);

// Слайдер в reviews_slider
$('.reviews_slider').slick({
        arrows: false, // Нужны ли стрелки
        dots: true,
        autoplay: true,
        slidesToShow:1,
        slidesToScroll: 1,
        speed: 2000,
});});

flsFunctions.CopyPhone();
flsFunctions.infoMore()

flsFunctions.RotateCard(".haircuts_slider_text", ".haircuts_slider_img"); // переворачиваем карточку  при нажатии на кнопку с селектором .haircuts_slider_text
document.querySelector("#copyright_year").innerHTML = flsFunctions.DateTime().NowYear; // Текущий год в футере


flsFunctions.ButtonScrollUp('#up', 0);
