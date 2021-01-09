let circleElm = document.querySelector(".circle");

window.onmousemove = function(e) {
    let x = e.clientX;
    // console.log(x);
    x = x / -10;

    circleElm.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(15deg)`
}