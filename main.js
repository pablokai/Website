gsap.registerPlugin(ScrollTrigger);


window.addEventListener('load', function () {
  document.querySelector('body').classList.add("loaded")
});


var triangle = document.querySelector('.triangle');


TweenMax.to('.cursor', 3, {
  scale: 1,
  ease: Power1.easeOut,
  repeat: -1
});

//gsap.to(triangle, {rotation: 400, repeat: -1,  repeatDelay: 0});

gsap.set('.cursor', {
  xPercent: -50,
  yPercent: -50
});

var mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
  gsap.to(mouseCursor, 0.2, {
    x: e.clientX,
    y: e.clientY
  });
});

var container = document.getElementById('model');

gsap.to('.arrow', {
  autoAlpha: 0
})
gsap.to('.sparkle', {
  autoAlpha: 0
})

var tl = gsap.timeline({
  repeat: 0,
  repeatDelay: 0
});

tl /*.to(".loader",  {duration: 2})*/
  .to("#model", {
    x: -1500
  }, '-=2')
  //.to(".loader",  {x: 2000, duration: 1}, '-=0.5')
  .to(".title-holder", {
    y: -100
  }, '-=3')
  .to(".navbar", {
    y: -500
  }, '-=1')
  .to(".icons", {
    x: 500
  }, '-=1')
  .to(".square-one", {
    y: -1000
  }, '-=1')
  .to(".square-four", {
    y: 1000
  }, '-=1')
  .to(".square-two", {
    y: 1000
  }, '-=1')
  .to(".square-three", {
    x: 1500
  }, '-=1')
  .to("#model", {
    x: 0,
    scale: 1.1,
    duration: 2
  })
  .to("#model", {
    scale: 1,
    duration: 1
  })
  .to(".block", {
    y: 0,
    duration: 2
  }, '-=3')
  .to(".square-one", {
    y: 0,
    duration: 2
  }, '-=3')
  .to(".square-four", {
    y: 0,
    duration: 2
  }, '-=3')
  .to(".square-two", {
    y: 0,
    duration: 2
  }, '-=3')
  .to(".square-three", {
    x: 0,
    duration: 2
  }, '-=3')
  .to(".title-holder", {
    y: 0,
    duration: 0.5
  }, '-=3.5')
  .to(".navbar", {
    y: 0,
    duration: 2
  }, '-=3')
  .to(".icons", {
    x: 0,
    duration: 2
  }, '-=3')



/*gsap.to(".tran-one", {
    scrollTrigger: ".tran-one", 
    x: 500
  });

  gsap.to(".tran-two", {
    scrollTrigger: ".tran-two", 
    x: -500
  }, );*/



const tl2 = gsap.timeline({

    scrollTrigger: {
      trigger: ".transition",
      start: "-=40%",
      end: "+=40%",
      scrub: true,
      markers: false
    }
  })
  .to('.tran-one', {
    x: 200,
    duration: 2
  })
  .to('.tran-two', {
    x: -200,
    duration: 2
  }, "-=2")
  .to('.sparkle', {
    autoAlpha: 1
  }, "-=2")
  .to('.arrow', {
    autoAlpha: 1
  }, "-=2");


/*
  gsap.to(".navbar", {
    scrollTrigger:{
      trigger: "body",
      start: "+= 20%",
      end: "+=500",
      markers: true
    },
    //backgroundColor : '#090b11',
    backgroundColor : '#ffffff',
    duration: 0.5
  }
  );

*/

/*const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills-container",
    start: "-=70%",
    end: "+=25%",
    scrub: true,
    markers: true
  }
})
.fromTo('.skill-item', {y:200} , {y:0});*/