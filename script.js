const wrapper = document.querySelector(".wrapper");
const main = document.querySelector("main");

gsap.registerPlugin(MotionPathPlugin);
Splitting();

function startloadingTextAnim(){

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
}


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
          });
          
      } else {
          const tracker = document.querySelector("#tracker");
          tracker.style.width = 0;
          tracker.style.display = "none";
      }
    }

    setTimeout(()=>{
      checkMediaForTracker(mediaQuery);
      mediaQuery.addListener(checkMediaForTracker);
    }, 2000)

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

  }, 10000);
}

function startGSAPAnimations(){
  let select = (selector) => {
    return document.querySelector(selector);
  };
  let navSection = select("section#nav");
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

    aboutLeft.addEventListener("click", () => {
      tlAbout.play()
      setTimeout(()=>{
        navSection.style.display = "none";
      },1000)
    });
    aboutRight.addEventListener("click", () => {
      tlAbout.play()
      setTimeout(()=>{
        navSection.style.display = "none";
      },1000)
    });
    aboutBack.addEventListener("click", () => {
      tlAbout.reverse()
      setTimeout(()=>{
        navSection.style.display = "flex";
      },50)
    });

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


      artworksLeft.addEventListener("click", () => {
        tlArtworks.play()
        setTimeout(()=>{
          navSection.style.display = "none";
        },1000)
      });
      artworksRight.addEventListener("click", () => {
        tlArtworks.play()
        setTimeout(()=>{
          navSection.style.display = "none";
        },1000)
      });
      artworksBack.addEventListener("click", () => {
        tlArtworks.reverse()
        setTimeout(()=>{
          navSection.style.display = "flex";
        },50)
      });

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

    websitesLeft.addEventListener("click", () => {
      tlWebsites.play()
      setTimeout(()=>{
        navSection.style.display = "none";
      },1000)
    });
    websitesRight.addEventListener("click", () => {
      tlWebsites.play()
      setTimeout(()=>{
        navSection.style.display = "none";
      },1000)
    });
    websitesBack.addEventListener("click", () => {
      tlWebsites.reverse()
      setTimeout(()=>{
        navSection.style.display = "flex";
      },50)
    });

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
      
    contactLeft.addEventListener("click", () => {
      tlContact.play()
      setTimeout(()=>{
        navSection.style.display = "none";
      },1000)
    });
    contactRight.addEventListener("click", () => {
      tlContact.play()
      setTimeout(()=>{
        navSection.style.display = "none";
      },1000)
    });
    contactBack.addEventListener("click", () => {
      tlContact.reverse()
      setTimeout(()=>{
        navSection.style.display = "flex";
      },50)
    });

    // contactLeft.addEventListener("click", () => tlContact.play());
    // contactRight.addEventListener("click", () => tlContact.play());
    // contactBack.addEventListener("click", () => tlContact.reverse());

}

const sectionLoader = document.querySelector('.loader')
const sectionLoadertext = document.querySelector('h1')
function resize() {
  
	let vh = window.innerWidth;
  let sh = sectionLoader.offsetWidth;
  // console.log(sh)
  // console.log(vh)
	let scaleFactor = vh/sh;
	if(scaleFactor<7 && scaleFactor >= 6) {
		gsap.set(sectionLoader, { scale: .8 });
		gsap.set(sectionLoadertext, { scale: .8 });
	}
	else if(scaleFactor<6 && scaleFactor >=5) {
    gsap.set(sectionLoader, { scale: .7 });
    gsap.set(sectionLoadertext, { scale: .7 });
	}
	else if(scaleFactor<5 && scaleFactor >=4) {
    gsap.set(sectionLoader, { scale: .6 });
    gsap.set(sectionLoadertext, { scale: .6, marginTop: -390 });
	}
	else if(scaleFactor<4 && scaleFactor >=3) {
    gsap.set(sectionLoader, { scale: .5 });
    gsap.set(sectionLoadertext, { scale: .5, marginTop: -420 });
	}
	else if(scaleFactor<3 && scaleFactor >=2) {
    gsap.set(sectionLoader, { scale: .4 });
    // gsap.set(sectionLoadertext, { scale: .4 });
   
    if(scaleFactor<3 && scaleFactor >=2.4) {
      gsap.set(sectionLoadertext, { scale: .4, marginTop: -440 });
    }
    else if(scaleFactor<2.4 && scaleFactor >=2.3) {
      gsap.set(sectionLoadertext, { scale: .4, marginTop: -560 });
    }
    else if(scaleFactor<2.3 && scaleFactor >=2.2) {
      gsap.set(sectionLoadertext, { scale: .4, marginTop: -600 });
    }
    else if(scaleFactor<2.2 && scaleFactor >=2) {
      gsap.set(sectionLoadertext, { scale: .4, marginTop: -680 });
    }
	}
	else if(scaleFactor<2 && scaleFactor >=1) {
    gsap.set(sectionLoader, { scale: .4 });
    // gsap.set(sectionLoadertext, { scale: .4});
    
    if(scaleFactor<2 && scaleFactor >=1.6) {
      gsap.set(sectionLoadertext, { scale: .36, marginTop: -690 });
    }
    if(scaleFactor<1.6 && scaleFactor >=1.5) {
      // gsap.set(sectionLoadertext, { scale: .3, marginTop: -690 });
      gsap.set(sectionLoadertext, { scale: .3, marginTop: -780 });
    }
    else if(scaleFactor<1.5 && scaleFactor >=1.4) {
      gsap.set(sectionLoadertext, { scale: .28, marginTop: -690 });
    }
    else if(scaleFactor<1.4 && scaleFactor >=1.3) {
      gsap.set(sectionLoadertext, { scale: .26, marginTop: -690 });
    }
    else if(scaleFactor<1.3 && scaleFactor >=1) {
      gsap.set(sectionLoadertext, { scale: .24, marginTop: -940 });
    }
	}
	else {
    gsap.set(sectionLoader, { scale: 1 });
    gsap.set(sectionLoadertext, { scale: 1, marginTop: -300 });
    }
}
function macthNav(){
  // NAVIGATION
  const mediaQueryRest = window.matchMedia("(min-width: 1510px)");
  const mediaQuery1510 = window.matchMedia("(max-width: 1510px)");
  const mediaQuery1410 = window.matchMedia("(max-width: 1410px)");
  const mediaQuery1310 = window.matchMedia("(max-width: 1310px)");
  const mediaQuery1170 = window.matchMedia("(max-width: 1170px)");
  const mediaQuery1024 = window.matchMedia("(max-width: 1024px)");
  const mediaQuery910 = window.matchMedia("(max-width: 910px)");
  const mediaQuery801 = window.matchMedia("(max-width: 801px)");
  const mediaQuery710 = window.matchMedia("(max-width: 710px)");
  const mediaQuery610 = window.matchMedia("(max-width: 610px)");
  const mediaQuery510 = window.matchMedia("(max-width: 510px)");
  const mediaQuery410 = window.matchMedia("(max-width: 410px)");
  const mediaQuery360 = window.matchMedia("(max-width: 360px)");
  const mediaQuery340 = window.matchMedia("(max-width: 340px)");

  function checkMediaRestForNav() {
    if (mediaQueryRest.matches) {
        gsap.to(".to-left", {x: -720, duration: 9, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 9, ease: "linear", yoyo:true, repeat: -1})
    }
  }
  function checkMedia1510ForNav() {
    if (mediaQuery1510.matches) {
        gsap.to(".to-left", {x: -440, duration: 5, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 5, ease: "linear", yoyo:true, repeat: -1})
        
    }
  }
  function checkMedia1410ForNav() {
    if (mediaQuery1410.matches) {
        gsap.to(".to-left", {x: -300, duration: 4, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 4, ease: "linear", yoyo:true, repeat: -1})
        
    }
  }
  function checkMedia1310ForNav() {
    if (mediaQuery1310.matches) {
        gsap.to(".to-left", {x: -440, duration: 5, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 5, ease: "linear", yoyo:true, repeat: -1})
        
    }
  }
  function checkMedia1170ForNav() {
    if (mediaQuery1170.matches) {
        gsap.to(".to-left", {x: -310, duration: 5, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 5, ease: "linear", yoyo:true, repeat: -1})
        
    }
  }
  function checkMedia1024ForNav() {
    if (mediaQuery1024.matches) {
        gsap.to(".to-left", {x: -390, duration: 5, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 5, ease: "linear", yoyo:true, repeat: -1})
        
    }
  }
  function checkMedia910ForNav() {
    if (mediaQuery910.matches) {
        gsap.to(".to-left", {x: -230, duration: 4, ease: "linear", yoyo:true, repeat: -1})
        gsap.to(".to-right", {x: 0, duration: 4, ease: "linear", yoyo:true, repeat: -1})
        
    }
  }
  function checkMedia801ForNav() {
    if (mediaQuery801.matches) {
      gsap.to(".to-left", {x: -260, duration: 5, ease: "linear", yoyo:true, repeat: -1})
      gsap.to(".to-right", {x: 0, duration: 5, ease: "linear", yoyo:true, repeat: -1})      
  }
  }
  function checkMedia710ForNav() {
    if (mediaQuery710.matches) {
      gsap.to(".to-left", {x: -180, duration: 5, ease: "linear", yoyo:true, repeat: -1})
      gsap.to(".to-right", {x: 0, duration: 5, ease: "linear", yoyo:true, repeat: -1})      
  }
  }
  function checkMedia610ForNav() {
    if (mediaQuery610.matches) {
      gsap.to(".to-left", {x: -280, duration: 5, ease: "linear", yoyo:true, repeat: -1})
      gsap.to(".to-right", {x: 0, duration: 5, ease: "linear", yoyo:true, repeat: -1})      
  }
  }
  function checkMedia510ForNav() {
    if (mediaQuery510.matches) {
      gsap.to(".to-left", {x: -155, duration: 4, ease: "linear", yoyo:true, repeat: -1})
      gsap.to(".to-right", {x: 0, duration: 4, ease: "linear", yoyo:true, repeat: -1})      
  }
  }
  function checkMedia410ForNav() {
    if (mediaQuery410.matches) {
      gsap.to(".to-left", {x: -190, duration: 4.2, ease: "linear", yoyo:true, repeat: -1})
      gsap.to(".to-right", {x: 0, duration: 4.2, ease: "linear", yoyo:true, repeat: -1})      
  }
  }
  function checkMedia360ForNav() {
    if (mediaQuery360.matches) {
      gsap.to(".to-left", {x: -188, duration: 4.2, ease: "linear", yoyo:true, repeat: -1})
      gsap.to(".to-right", {x: 0, duration: 4.2, ease: "linear", yoyo:true, repeat: -1})      
  }
  }
  function checkMedia340ForNav() {
    if (mediaQuery340.matches) {
      gsap.to(".to-left", {x: -150, duration: 4, ease: "linear", yoyo:true, repeat: -1})
      gsap.to(".to-right", {x: 0, duration: 4, ease: "linear", yoyo:true, repeat: -1})      
  }
  }

  if (mediaQueryRest.matches) {
    checkMediaRestForNav();
    mediaQueryRest.addListener(checkMediaRestForNav);
  }
  if (mediaQuery1510.matches) {
    checkMedia1510ForNav();
    mediaQuery1510.addListener(checkMedia1510ForNav);
  }
  if (mediaQuery1410.matches) {
    checkMedia1410ForNav();
    mediaQuery1410.addListener(checkMedia1410ForNav);
  }
  if (mediaQuery1310.matches) {
    checkMedia1310ForNav();
    mediaQuery1310.addListener(checkMedia1310ForNav);
  }
  if (mediaQuery1170.matches) {
    checkMedia1170ForNav();
    mediaQuery1170.addListener(checkMedia1170ForNav);
  }
  if (mediaQuery1024.matches) {
    checkMedia1024ForNav();
    mediaQuery1024.addListener(checkMedia1024ForNav);
  }
  if (mediaQuery910.matches) {
    checkMedia910ForNav();
    mediaQuery910.addListener(checkMedia910ForNav);
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
  if (mediaQuery410.matches) {
    checkMedia410ForNav();
    mediaQuery410.addListener(checkMedia410ForNav);
  }
  if (mediaQuery360.matches) {
    checkMedia360ForNav();
    mediaQuery360.addListener(checkMedia360ForNav);
  }
  if (mediaQuery340.matches) {
    checkMedia340ForNav();
    mediaQuery340.addListener(checkMedia340ForNav);
  }
  
}

// window.onload = () => {
        //  resize();
// };


document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener(
    "load",
    function() {
      wrapper.style.visibility = "visible"
      
      
      setTimeout(() => {
        startloadingTextAnim();

        setTimeout(() => {
          startGSAPAnimations();
          
          setTimeout(() => {
            console.log("before execution")
          loading();
          console.log("after execution")
          }, 2000);
        }, 100);
      }, 100);
    },
    false
  );
});
window.onresize = resize;
window.onload = resize;
macthNav()
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
