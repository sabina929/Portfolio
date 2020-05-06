const wrapper = document.querySelector(".wrapper");
const main = document.querySelector("main");


gsap.registerPlugin(MotionPathPlugin);
Splitting();

let target = document.querySelector(".wrapper h1")

let results = Splitting({ target: target, by: "chars" });
// console.log(results[0].chars);

results[0].chars.forEach((char) => {
  // console.log(char);
  char.style.marginRight = "5px";
  char.style.opacity = 1;
});

// console.log(results[0].words[0]);

gsap
  .timeline({
    defaults: {
      duration: 6,
      opacity: 1
    }
  })
  .to(
    results[0].chars[16],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[15],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[14],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[13],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[12],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[11],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[10],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[9],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[8],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[7],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[6],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )
  .to(
    results[0].chars[5],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )

  .to(
    results[0].chars[4],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )

  .to(
    results[0].chars[3],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )

  .to(
    results[0].chars[2],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )

  .to(
    results[0].chars[1],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  )

  .to(
    results[0].chars[0],
    {
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "linear",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    },
    "<.4"
  );


// LOADING SCREEN  
let tlLoader = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1.8 }
    })
    .fromTo(".wrapper .loader", {duration: 1.8,opacity:1}, {opacity:0})
    .fromTo(".wrapper h1", {duration: 1.8,opacity:1}, {opacity:0}, "<.5")
    .fromTo(".wrapper", {ease: "elastic(2, .1)",transformOrigin: "50% 0%", yPercent: 0,scale: 1,borderRadius: "0px"}, {yPercent: -100,scale: 0,borderRadius: "50%"}, "<.1")

function loading() {
  setTimeout(() => {
    tlLoader.play()
    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50); 
    
    // NAVIGATION
    const mediaQueryRest = window.matchMedia("(min-width: 1024px)");
    const mediaQuery1024 = window.matchMedia("(max-width: 1024px)");
    const mediaQuery801 = window.matchMedia("(max-width: 801px)");
    const mediaQuery710 = window.matchMedia("(max-width: 710px)");
    const mediaQuery610 = window.matchMedia("(max-width: 610px)");
    const mediaQuery510 = window.matchMedia("(max-width: 510px)");

    function checkMediaRestForNav() {
      if (mediaQueryRest.matches) {
          gsap.to(".to-left", {x: -720, duration: 15, ease: "linear", yoyo:true, repeat: -1})
          gsap.to(".to-right", {x: 0, duration: 15, ease: "linear", yoyo:true, repeat: -1})
      }
    }
    function checkMedia1024ForNav() {
      if (mediaQuery1024.matches) {
          gsap.to(".to-left", {x: -480, duration: 7, ease: "linear", yoyo:true, repeat: -1})
          gsap.to(".to-right", {x: 0, duration: 7, ease: "linear", yoyo:true, repeat: -1})
          
      }
    }
    function checkMedia801ForNav() {
      if (mediaQuery801.matches) {
        gsap.to(".to-left", {x: -260, duration: 7, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 7, ease: "linear", yoyo:true, repeat: -1})      
    }
    }
    function checkMedia710ForNav() {
      if (mediaQuery710.matches) {
        gsap.to(".to-left", {x: -180, duration: 6, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 6, ease: "linear", yoyo:true, repeat: -1})      
    }
    }
    function checkMedia610ForNav() {
      if (mediaQuery610.matches) {
        gsap.to(".to-left", {x: -280, duration: 8, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 8, ease: "linear", yoyo:true, repeat: -1})      
    }
    }
    function checkMedia510ForNav() {
      if (mediaQuery510.matches) {
        gsap.to(".to-left", {x: -200, duration: 8, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 8, ease: "linear", yoyo:true, repeat: -1})      
    }
    }
  

    if (mediaQueryRest.matches) {
      checkMediaRestForNav();
      mediaQueryRest.addListener(checkMediaRestForNav);
    }
    if (mediaQuery1024.matches) {
      checkMedia1024ForNav();
      mediaQuery1024.addListener(checkMedia1024ForNav);
    }
    if (mediaQuery801.matches) {
      checkMedia801ForNav();
      mediaQuery801.addListener(checkMedia801ForNav);
    }
    if (mediaQuery710.matches) {
      checkMedia710ForNav();
      mediaQuery710.addListener(checkMedia710ForNav);
    }
    if (mediaQuery610.matches) {
      checkMedia610ForNav();
      mediaQuery610.addListener(checkMedia610ForNav);
    }
    if (mediaQuery510.matches) {
      checkMedia510ForNav();
      mediaQuery510.addListener(checkMedia510ForNav);
    }
    
    // gsap.to(".to-left", {x: -720, duration: 15, ease: "linear", yoyo:true, repeat: -1})
    // gsap.to(".to-right", {x: 0, duration: 15, ease: "linear", yoyo:true, repeat: -1})
    
    //MOUSE TRACKER
    const mediaQuery = window.matchMedia("(min-width: 1100px)");
    function checkMediaForTracker(mediaQuery) {
      if (mediaQuery.matches) {
        const tracker = document.querySelector("#tracker");
          document.addEventListener("mousemove", e => {
            tracker.setAttribute(
              "style",
              "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px; display:block;"
            );
            // console.log("added");
          });
          
      } else {
          const tracker = document.querySelector("#tracker");
          // console.log(tracker);
          tracker.style.display = "none";
      }
    }

    
    setTimeout(()=>{
      checkMediaForTracker(mediaQuery);
      mediaQuery.addListener(checkMediaForTracker);
      
    }, 2000)

    // const tracker = document.querySelector('#tracker');
    // setTimeout(() => {
    //         document.addEventListener('mousemove', e => {
    //           tracker.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px; display:block;")
    //         })
    // }, 2000)

    //  MENU ITEMS HOVER EFFECT
    let menuItemsUpper = document.querySelectorAll("#nav > p.to-left > span")
    let menuItemsLower = document.querySelectorAll("#nav > p.to-right > span")
    function scaleUp() {
      // console.log(tracker)
      // debugger
      tracker.classList.toggle("scale-up");
      // debugger
      // console.log("executed")
    }
    menuItemsUpper.forEach(menuItem => {
      menuItem.addEventListener("mouseover", scaleUp)
      // console.log("executed")
    })
    menuItemsUpper.forEach(menuItem => {
      menuItem.addEventListener("mouseout", scaleUp)
    })
    menuItemsLower.forEach(menuItem => {
      menuItem.addEventListener("mouseover", scaleUp)
    })
    menuItemsLower.forEach(menuItem => {
      menuItem.addEventListener("mouseout", scaleUp)
    })

  // }, 12000);
  }, 10);
}

function startGSAPAnimations(){
  let select = (selector) => {
    return document.querySelector(selector);
  };
  let aboutSection = select("section#about");
  let artworksSection = select("section#artworks");
  let websitesSection = select("section#websites");
  let contactSection = select("section#contact");

  aboutSection.style.display = "flex";
  artworksSection.style.display = "flex";
  websitesSection.style.display = "flex";
  contactSection.style.display = "flex";

  let aboutLeft = select("#nav > p.to-left > span:nth-child(1)");
  let aboutRight = select("#nav > p.to-right > span:nth-child(4)");
  let aboutBack = select("section#about .back");
  let artworksLeft = select("#nav > p.to-left > span:nth-child(2)");
  let artworksRight = select("#nav > p.to-right > span:nth-child(3)");
  let artworksBack = select("section#artworks .back");
  let websitesLeft = select("#nav > p.to-left > span:nth-child(3)");
  let websitesRight = select("#nav > p.to-right > span:nth-child(2)");
  let websitesBack = select("section#websites .back");
  let contactLeft = select("#nav > p.to-left > span:nth-child(4)");
  let contactRight = select("#nav > p.to-right > span:nth-child(1)");
  let contactBack = select("section#contact .back");


  // ABOUT SECTION
  let tlAbout = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1.4,transformOrigin: "50% 50%", opacity: 0, ease: "elastic(.1, 1)" }
    })

    .fromTo("section#about", {yPercent: 50, xPercent: -50,scale: 0, opacity: 0, borderRadius: "50%"}, {yPercent: -50, xPercent: -50,scale: 1, opacity: 1, borderRadius: "0px"})
    
    .to(".logo", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    .to(".copyright", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    

    .fromTo("section#about .about-img", {duration: 5, y: -100, opacity: 0, ease: "elastic(2, .1)"}, {
      y:0, opacity:1
  }, "<.6")

    .from("section#about .splitting .char", {
        y: 40,
        duration: 1.8,
        stagger: 0.008,
        ease: "elastic(.8, 0.0)"
      }, "<.6")


      .to("#tracker", {
        background:"hsl(56, 19%, 16%)",
        opacity: 1
      }, "<.6")

    aboutLeft.addEventListener("click", () => tlAbout.play());
    aboutRight.addEventListener("click", () => tlAbout.play());
    aboutBack.addEventListener("click", () => tlAbout.reverse());


  // ARTORKS SECTION
  let tlArtworks = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1.4,transformOrigin: "50% 50%", opacity: 0, ease: "elastic(.1, 1)" }
    })

    .fromTo("section#artworks", {yPercent: 50,xPercent: -50,scale: 0, opacity: 0, borderRadius: "50%"}, {yPercent: -50, xPercent: -50,scale: 1, opacity: 1, borderRadius: "0px"})
    
  
    .to(".logo", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    .to(".copyright", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    
    .fromTo("section#artworks .work-img", {duration: 5, y: -100, opacity: 0, ease: "elastic(2, .1)"}, {
        y:0, opacity:1
    }, "<.6")

    .from("section#artworks .splitting .char", {
        y: 40,
        duration: 1.8,
        stagger: 0.01,
        ease: "elastic(.8, 0.0)"
      }, "<.6")

      .to("#tracker", {
        background:"hsl(56, 19%, 16%)",
        opacity: 1
      }, "<.6")

  artworksLeft.addEventListener("click", () => tlArtworks.play());
  artworksRight.addEventListener("click", () => tlArtworks.play());
  artworksBack.addEventListener("click", () => tlArtworks.reverse());

  // WEBSITES SECTION
  let tlWebsites = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1.4,transformOrigin: "50% 50%", opacity: 0, ease: "elastic(.1, 1)" }
    })
    .fromTo("section#websites", {yPercent: 50,xPercent: -50,scale: 0, opacity: 0, borderRadius: "50%"}, {yPercent: -50,xPercent: -50,scale: 1, opacity: 1, borderRadius: "0px"})
    .to(".logo", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    .to(".copyright", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    .fromTo("section#websites .work-img", {duration: 5, y: -100, opacity: 0, ease: "elastic(2, .1)"}, {
        y:0, opacity:1
    }, "<.6")
    .from("section#websites .splitting .char", {
        y: 40,
        duration: 1.8,
        stagger: 0.01,
        ease: "elastic(.8, 0.0)"
    }, "<.6")
    .to("#tracker", {
      background:"hsl(56, 19%, 16%)",
      opacity: 1
    }, "<.6")

    websitesLeft.addEventListener("click", () => tlWebsites.play());
    websitesRight.addEventListener("click", () => tlWebsites.play());
    websitesBack.addEventListener("click", () => tlWebsites.reverse());

    // CONTACT SECTION  
  let tlContact = gsap
  .timeline({
      paused: true,
      defaults: { duration: 1.4,transformOrigin: "50% 50%", opacity: 0, ease: "elastic(.1, 1)" }
    })

    .fromTo("section#contact", {yPercent: 50,xPercent: -50,scale: 0, opacity: 0, borderRadius: "50%"}, {yPercent: -50,xPercent: -50,scale: 1, opacity: 1, borderRadius: "0px"})
    
    .to(".logo", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    .to(".copyright", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<")

    
    .from("section#contact .splitting .char", {
      y: 40,
        duration: 1.8,
        stagger: 0.01,
        ease: "elastic(.8, 0.0)"
      }, "<.6")
      
    .to("#tracker", {
      background:"hsl(56, 19%, 16%)",
      opacity: 1
    }, "<.6")
      
    contactLeft.addEventListener("click", () => tlContact.play());
    contactRight.addEventListener("click", () => tlContact.play());
    contactBack.addEventListener("click", () => tlContact.reverse());

}


// const sectionLoader = document.querySelector('h1')
// function resize() {
// 	let vh = window.innerHeight;
// 	let sh = sectionLoader.offsetHeight;
// 	let scaleFactor = vh/sh;
// 	if(scaleFactor<1) {
// 		gsap.set(sectionLoader, { scale: scaleFactor });
// 	}
// 	else {
//         gsap.set(sectionLoader, { scale: 1 });
//     }
// }

// window.onresize = resize;

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener(
    "load",
    function() {
      // resize();
      setTimeout(() => {
        loading();
        startGSAPAnimations();
      }, 500);
    },
    false
  );
});



// window.onload = () => {
// 	// init();
//          resize();
//     // GSDevTools.create();
// };




// GSAP ANIMATIONS

  
    // let theLongDark = select("section#ipsum #the-long-dark >div");

    // let tlTheLongDark = gsap.timeline({
    //   paused:true,
    // })
    // .to("section#ipsum #the-long-dark >img", {
    //   zIndex: 9999999999,
    //   position:"absolute",
    //   top: "0%",
    //   right: "0%",
    //   bottom: "0%",
    //   left: "0%",
    //   width: "100%",
    //   height: "100%",
    //   filter: "saturate(1)"
    // }, "<.6")

    // theLongDark.addEventListener("click", () => tlTheLongDark.play());
