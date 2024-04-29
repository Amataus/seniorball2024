window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("randbutton");
    var picture = document.getElementById("randimg");
    let imgarray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg"];
    button.addEventListener("click", () => {
       let num = Math.floor(Math.random()*14 );
       picture.src = imgarray[num];
       picture.style.height = '400px';
       picture.style.width = '400px';
    })

});