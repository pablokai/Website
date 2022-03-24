/*var vid = document.getElementById("videoBackground");
vid.playbackRate = 0.1;*/

/*var cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = (e.pageX - 12.5) + "px";
    cursor.style.top = (e.pageY -12.5) + "px";
    cursor.style.display = "block";
}
*/

TweenMax.to('.cursor', 3, {scale: 1, ease: Power1.easeOut , repeat: -1});


gsap.set('.cursor',{xPercent:-50,yPercent:-50});

var mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove',e => {
    gsap.to(mouseCursor,0.2,{
        x:e.clientX,
        y:e.clientY
    });
});

