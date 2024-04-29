const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth - 1000;
const maxHeight = window.innerHeight - buttonHeight - 1000;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("nobutton");

    button.addEventListener("mouseover", () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
        button.style.top = Math.floor(Math.random() * (maxWidth+1)) + "px";
    })

    const mhm = document.getElementById("yesbutton");


    mhm.addEventListener("mouseover", () => {
        document.body.className = "hover";
    })

    mhm.addEventListener("mouseout", () => {
        document.body.className = "cover";
    })
});
