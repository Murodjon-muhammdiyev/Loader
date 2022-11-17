document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader"),
        loaderBox = loader.firstElementChild;
    
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.transition = "all 1s linear";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 2500);

})