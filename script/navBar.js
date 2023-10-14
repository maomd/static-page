const nav = document.querySelector("header");
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 10){
        nav.classList.add("sticky")
    }
    else{
        nav.classList.remove("sticky");
    }
})