let container =
document.querySelector(".container");
let list = document.querySelector("#list")

container.addEventListener("mouseover" , () => {
    list.style.transition = "0.3s linear";
    list.style.transitionDelay = "0.3s";
});

container.addEventListener("mouseout", () => {
    list.style.transition = "0.1s linear";
});