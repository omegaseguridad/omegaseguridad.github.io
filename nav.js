window.addEventListener("scroll", function (){
    var header = document.querySelector("nav");
    header.classList.toggle("header2", window.scrollY>0);
})