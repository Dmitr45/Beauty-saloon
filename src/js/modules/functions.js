/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function  isWebP() {
    function testWebP(callback) {
        // Проверка поддержки  webp
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
        // Добавление соответствующего класса для HTML
    testWebP(function (support) {

        if (support == true) {
            document.querySelector('html').classList.add('webp');
        } else {
            document.querySelector('html').classList.add('no-webp');
        }
    });
}


// Кнопка "Узнать больше"
export function infoMore() {
let button = document.querySelector("#info_more");
let more = document.querySelector(".info_more");
button.addEventListener("click", () =>{
    console.log("Узнать больше")
more.classList.toggle("_hide")
})}

// Переворачиваем карточки услуг
export function RotateCard(selectorButton, selectorCard){
    let Rotate = document.querySelectorAll(selectorButton); // Нашди все кнопки
    let SelectButton;
    for (SelectButton of Rotate) { // Проходим по каждой кнопке
        SelectButton.addEventListener("click", (event) => {  // Вешаем прослушиватель на каждую кнопку
            console.log("Вы хотите посмотреть обратную сторону карты?");  // Если произлшел клик
          let front = event.target.closest(".haircuts_slider_img");
            front.classList.toggle("rotateY180"); // ищем ближайшего родителя и переворачиваем
          let back = event.target.closest(".haircuts_slider_item").querySelector(".img_back");
              back.classList.toggle("rotateY180");
            setTimeout(() => {
                event.target.closest(".haircuts_slider_img").classList.toggle("rotateY180"); // ищем ближайшего родителя и переворачиваем
                event.target.closest(".haircuts_slider_item").querySelector(".img_back").classList.toggle("rotateY180");
                }, 5000);
        })
    }
}

// Кнопка скопировать телефон в формате +7**********
export function CopyPhone() {
    let Button = document.querySelectorAll(".button_copy_phone");
    let SelectButton;
    for (SelectButton of Button){
        SelectButton.addEventListener("click", (event) => { //Переберем все кнопки

            var copyPhone = document.getElementById("number_phone"); //Выбираем номер тел
            copyPhone.select();
            document.execCommand("copy"); //Копируем в буфер обмена

            for (let SelectButton2 of Button) { SelectButton2.innerHTML = "Телефон скопирован"; }

            let Phone = document.querySelectorAll(".header_form_ph");
            let SelectPhone;
            for (SelectPhone of Phone){ SelectPhone.classList.toggle("display_width0");   }
        })
    }
}

// Рассчитываем текущую дату
export function DateTime(){
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth();
    let nowDate = now.getDate();
    let nowHours = now.getHours();
    // let nowMin = getMinutes();
    //let nowSec = getSeconds();
    //getMilliseconds()
    return {
        "NowYear": nowYear,
        "NowMonth": nowMonth,
        "NowDay": nowDate
    }
}

// Функция кнопки UP
export function ButtonScrollUp(selector, delay=20) {
    document.querySelector("html").style.scrollBehavior = "smooth"; // Добавляем стиль к html замедления прокрутки
    const up = document.querySelector(selector);
    up.style.display = "none";
    document.addEventListener("scroll", ()=> {(scrollY*2 > document.documentElement.clientHeight) ? (up.style.display = "block") : (up.style.display = "none")})
    up.onclick = ()=> { window.scrollTo(scrollY, 0);   console.log("UP"); }
}