console.log("Cześć");
let przycisk = document.querySelector(".nowaGra");
przycisk.addEventListener("click", () => {
    przycisk.innerHTML = "<img width='200' src='image/nowa gra 1.png'>"
})
console.log(przycisk);

console.log("Witaj");
let przyciskCzczcionka = document.querySelector(".content");
let fontType = document.querySelector(".fontType");
let fontButton = document.querySelector(".fontButton")
fontButton.addEventListener("click", () => {
    if (przyciskCzczcionka.classList.contains("content")) {
        przyciskCzczcionka.classList.add("contentGothic");
        przyciskCzczcionka.classList.remove("content");
        fontType.innerText = "Czcionka klimatyczna";
    } else {
        (przyciskCzczcionka.classList.add("content"));
        (przyciskCzczcionka.classList.remove("contentGothic"));
        (fontType.innerText = "Czcionka klasyczna");
    }
})