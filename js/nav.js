window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    header.classList.toggle("header2", window.scrollY>0);
})