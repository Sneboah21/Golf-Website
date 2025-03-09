var crsr = document.querySelector("#cursor")
var blurc = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
      crsr.style.left = dets.x - 12 + "px";
      crsr.style.top = dets.y - 12 + "px";
      blurc.style.left = dets.x - 150 + "px";
      blurc.style.top = dets.y - 150 + "px";
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
      elem.addEventListener("mouseenter",function(){
            crsr.style.scale = 3;
            crsr.style.border = "1px solid #fff";
            crsr.style.backgroundColor = "transparent";
            crsr.style.transition = "all 0.5s ease";
      })
      elem.addEventListener("mouseleave",function(){
            crsr.style.scale = 1;
            crsr.style.border = "0px solid #92b508";
            crsr.style.backgroundColor = "#92b508"; 
            crsr.style.transition = "all 0s ease";
      })
})



gsap.to("#nav",{
      backgroundColor: "#000",
      duration: 1,
      height: "110px",
      scrollTrigger:{
            trigger: "#nav",
            scroller: "body",
            // markers: true,
            start: "top -10%",
            end: "top -11%",
            scrub: 2
      }
})

gsap.to("#main",{
      backgroundColor: "#000",
      // duration: 2,
      scrollTrigger:{
            trigger: "#main",
            scroller: "body",
            // markers: true,
            start: "top -30%",
            end: "top -80%",
            scrub: 2
      }
})

//tilting effect using Vanilla Tilt
var tilt = document.querySelectorAll(".card");
VanillaTilt.init(tilt,{
      max: 15, // Adjust the max tilt degree
    speed: 3000, // Smooth transition speed
    glare: true, // Enable glare effect
    "max-glare": 0.5, // Max glare opacity
    scale: 1.1, // Slightly scale the element on hover
    easing: "cubic-bezier(.03,.98,.52,.99)", // Smooth easing function
    gyroscope: true, // Enable gyroscope feature
    gyroscopeMaxAngleX: 60, // Max tilt on the X-axis
    gyroscopeMaxAngleY: 60 // Max tilt on the Y-axis
});

gsap.from("#about-us img,#about-us-in",{
      y:90,
      opacity:0,
      duration:3,
      scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            start:"top 60%",
            end:"top 55%",
            scrub:2
      }
})
gsap.from(".card",{
      scale:0.8,
      opacity:0,
      duration:1,
      stagger:0.1,
      scrollTrigger:{
            trigger:".card",
            scroller:"body",
            start:"top 70%",
            end:"top 65%",
            scrub:2
      }
})
gsap.from("#colon1",{
      y:-80,
      x:-80,
      scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 50%",
            end:"top 60%",
            scrub:4
      }
})
gsap.from("#colon2",{
      y:80,
      x:80,
      scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 50%",
            end:"top 60%",
            scrub:4
      }
})

gsap.from("#page4 h1",{
      y:40,
      scrollTrigger:{
            trigger:"#page4 h1",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2
      }
})