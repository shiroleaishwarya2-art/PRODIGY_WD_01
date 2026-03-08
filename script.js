window.addEventListener("scroll", function(){

let navbar = document.getElementById("navbar");

if(window.scrollY > 50){
navbar.style.background = "#5f6a75";
}
else{
navbar.style.background = "#131921";
}

});