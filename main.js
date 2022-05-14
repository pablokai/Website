gsap.registerPlugin(ScrollTrigger);


/* MOBILE MENU CODE*/

if (window.innerWidth <= 800) {

  let menu = [document.querySelector('.link-about'), document.querySelector('.link-projects'), document.querySelector('.link-contact')];

  menu.forEach(item =>
    item.addEventListener('click', function () {
      document.querySelector('.menu').style.display = 'none';
      document.getElementById('close-menu').style.display = 'none';
      document.getElementById('open-menu').style.display = 'block';
      document.getElementById('checkbox_toggle').checked = false;
      document.body.style.overflow = 'auto';
    })
  );

  let menuToggle = document.getElementById('checkbox_toggle');

  menuToggle.addEventListener('change', function () {
    menuToggle.checked ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  });

}else{


/* MOUSE CURSOR CODE */

var mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
  gsap.to(mouseCursor, 0.2, {
    x: e.clientX,
    y: e.clientY
  });
});

/* LOADER AND STARTUP CODE */


function hideT() {

  gsap.to('.arrow', {
    autoAlpha: 0
  })
  gsap.to('.sparkle', {
    autoAlpha: 0
  })
}

function hideAbout() {

  gsap.to('.avatar', {
    autoAlpha: 0
  })
  gsap.to('.about', {
    autoAlpha: 0
  })
}

/* TRANSITION SECTION CODE */

gsap.to('.arrow', {
  autoAlpha: 0
});
gsap.to('.sparkle', {
  autoAlpha: 0
});

const tl2 = gsap.timeline({

    scrollTrigger: {
      trigger: ".transition",
      start: "-=40%",
      end: "+=40%",
      scrub: true,
      markers: false,
      onLeaveBack: hideT
    },
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



const tl3 = gsap.timeline({

    scrollTrigger: {
      trigger: ".sec2",
      start: "-=100%",
      end: "+=70%",
      scrub: 4,
      markers: false,
    },

  }).to('.about', {
    autoAlpha: 0
  })
  .to('.avatar', {
    autoAlpha: 0
  })
  .to('.about', {
    autoAlpha: 1,
    duration: 2
  }, )
  .to('.avatar', {
    autoAlpha: 1
  }, "-=2");



const tl4 = gsap.timeline({

    scrollTrigger: {
      trigger: ".sec3",
      start: "-=100%",
      end: "+=60%",
      scrub: 5,
      markers: false,
    },
  })
  .to('.skills-title', {
    autoAlpha: 0
  }, "-=5")
  .to('.line', {
    autoAlpha: 0
  }, "-=5")
  .to('#skill-two-left', {
    x: -1000
  }, "-=5")
  .to('#skill-two-right', {
    x: 1000
  }, "-=5")
  .to('#android', {
    x: 1000
  }, "-=5")
  .to('#java', {
    x: -1000
  }, "-=5")
  .to('.skill-three', {
    autoAlpha: 0
  }, "-=5")
  .to('.skills-title', {
    autoAlpha: 1
  }, "-=3")
  .to('.line', {
    autoAlpha: 1
  }, "-=3")
  .to('#skill-two-left', {
    x: 0
  }, "-=2")
  .to('#skill-two-right', {
    x: 0
  }, "-=2")
  .to('#android', {
    x: 0
  }, "-=1")
  .to('#java', {
    x: 0
  }, "-=1")
  .to('.skill-three', {
    autoAlpha: 1
  }, "-=1");

const tl5 = gsap.timeline({

    scrollTrigger: {
      trigger: ".sec5",
      start: "-=100%",
      end: "+=110%",
      scrub: 2,
      markers: false,
    },

  }).to('.model-text', {
    autoAlpha: 0
  })
  .to('.model-text', {
    autoAlpha: 1
  });

const tl6 = gsap.timeline({

    scrollTrigger: {
      trigger: ".sec4",
      start: "-=40%",
      end: "+=50%",
      scrub: 3,
      markers: false,
    },

  }).to('.title-projects', {
    autoAlpha: 0
  }, "-=3")
  .to('.blue-circle', {
    autoAlpha: 0,
    x: 200
  }, "-=3")
  .to('.title-projects', {
    autoAlpha: 1
  })
  .to('.blue-circle', {
    autoAlpha: 1,
    rotation: 360,
    x: 0

  });



}


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