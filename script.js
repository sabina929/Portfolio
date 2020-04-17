// LOADING SCREEN
const wrapper = document.querySelector(".wrapper");
const main = document.querySelector("main");

let tlLoader = gsap
    .timeline({
      paused: true,
      defaults: { duration: 2 }
    })
    .fromTo(".wrapper .loader", {duration: 1,opacity:1}, {opacity:0})
    .fromTo(".wrapper", {ease: "elastic(2, .1)",transformOrigin: "50% 0%", yPercent: 0,scale: 1,borderRadius: "0px"}, {yPercent: -100,scale: 0,borderRadius: "50%"}, "<.2")

// LOADING
function loading() {
  setTimeout(() => {
    tlLoader.play()
    // wrapper.style.display = "none";
    // wrapper.style.opacity = 0;

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);  
    
  }, 5000);
}
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener(
    "load",
    function() {
      setTimeout(() => {
        loading();
      }, 500);
    },
    false
  );
});

// GSAP ANIMATIONS
gsap.to(".to-left", {x: -720, duration: 15, ease: "linear", yoyo:true, repeat: -1})
gsap.to(".to-right", {x: 0, duration: 15, ease: "linear", yoyo:true, repeat: -1})


Splitting();

let select = (selector) => {
    return document.querySelector(selector);
  };
  

  // LOREM SECTION
  let loremLeft = select("#nav > p.to-left > span:nth-child(1)");
  let loremRight = select("#nav > p.to-right > span:nth-child(4)");
  let loremBack = select("section#lorem .back");


  let tlLorem = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1.4,transformOrigin: "50% 50%", opacity: 0, ease: "elastic(.1, 1)" }
    })

    .fromTo("section#lorem", {yPercent: 50,scale: 0, opacity: 0, borderRadius: "50%"}, {yPercent: -50,scale: 1, opacity: 1, borderRadius: "0px"})
    
  
    .to(".logo", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    .to(".copyright", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    

    .fromTo("section#lorem img", {duration: 5, y: -100, opacity: 0, ease: "elastic(2, .1)"}, {
      y:0, opacity:1
  }, "<.6")

    .from("section#lorem .splitting .char", {
        y: 40,
        duration: 1.8,
        stagger: 0.01,
        ease: "elastic(.8, 0.0)"
      }, "<.6")


      .to("#tracker", {
        background:"hsl(56, 19%, 16%)",
        opacity: 1
      }, "<.6")

    loremLeft.addEventListener("click", () => tlLorem.play());
    loremRight.addEventListener("click", () => tlLorem.play());
    loremBack.addEventListener("click", () => tlLorem.reverse());


  // IPSUM SECTION
  let ipsumLeft = select("#nav > p.to-left > span:nth-child(2)");
  let ipsumRight = select("#nav > p.to-right > span:nth-child(3)");
  let ipsumBack = select("section#ipsum .back");


  let tlIpsum = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1.4,transformOrigin: "50% 50%", opacity: 0, ease: "elastic(.1, 1)" }
    })

    .fromTo("section#ipsum", {yPercent: 50,scale: 0, opacity: 0, borderRadius: "50%"}, {yPercent: -50,scale: 1, opacity: 1, borderRadius: "0px"})
    
  
    .to(".logo", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    .to(".copyright", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    


    .fromTo("section#ipsum img", {duration: 5, y: -100, opacity: 0, ease: "elastic(2, .1)"}, {
        y:0, opacity:1
    }, "<.6")

    .from("section#ipsum .splitting .char", {
        y: 40,
        duration: 1.8,
        stagger: 0.01,
        ease: "elastic(.8, 0.0)"
      }, "<.6")


      .to("#tracker", {
        background:"hsl(56, 19%, 16%)",
        opacity: 1
      }, "<.6")

    ipsumLeft.addEventListener("click", () => tlIpsum.play());
    ipsumRight.addEventListener("click", () => tlIpsum.play());
    ipsumBack.addEventListener("click", () => tlIpsum.reverse());



  // DOLOR SECTION
  let dolorLeft = select("#nav > p.to-left > span:nth-child(3)");
  let dolorRight = select("#nav > p.to-right > span:nth-child(2)");
  let dolorBack = select("section#dolor .back");


  let tlDolor = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1.4,transformOrigin: "50% 50%", opacity: 0, ease: "elastic(.1, 1)" }
    })

    .fromTo("section#dolor", {yPercent: 50,scale: 0, opacity: 0, borderRadius: "50%"}, {yPercent: -50,scale: 1, opacity: 1, borderRadius: "0px"})
    
  
    .to(".logo", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    .to(".copyright", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    


    .fromTo("section#dolor img", {duration: 5, y: -100, opacity: 0, ease: "elastic(2, .1)"}, {
        y:0, opacity:1
    }, "<.6")

    .from("section#dolor .splitting .char", {
        y: 40,
        duration: 1.8,
        stagger: 0.01,
        ease: "elastic(.8, 0.0)"
      }, "<.6")


      .to("#tracker", {
        background:"hsl(56, 19%, 16%)",
        opacity: 1
      }, "<.6")

    dolorLeft.addEventListener("click", () => tlDolor.play());
    dolorRight.addEventListener("click", () => tlDolor.play());
    dolorBack.addEventListener("click", () => tlDolor.reverse());




    // SIT SECTION
  let sitLeft = select("#nav > p.to-left > span:nth-child(4)");
  let sitRight = select("#nav > p.to-right > span:nth-child(1)");
  let sitBack = select("section#sit .back");
  
  
  let tlSit = gsap
  .timeline({
      paused: true,
      defaults: { duration: 1.4,transformOrigin: "50% 50%", opacity: 0, ease: "elastic(.1, 1)" }
    })

    .fromTo("section#sit", {yPercent: 50,scale: 0, opacity: 0, borderRadius: "50%"}, {yPercent: -50,scale: 1, opacity: 1, borderRadius: "0px"})
    
    .to(".logo", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<.6")
    .to(".copyright", {
      color:"hsl(251, 60%, 17%)",
      opacity: 1
    }, "<")

    
    .from("section#sit .splitting .char", {
      y: 40,
        duration: 1.8,
        stagger: 0.01,
        ease: "elastic(.8, 0.0)"
      }, "<.6")

      
      .to("#tracker", {
        background:"hsl(56, 19%, 16%)",
        opacity: 1
      }, "<.6")
      
      sitLeft.addEventListener("click", () => tlSit.play());
    sitRight.addEventListener("click", () => tlSit.play());
    sitBack.addEventListener("click", () => tlSit.reverse());

  
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
