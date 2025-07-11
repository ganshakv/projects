// /Heading animation

gsap.to(".contents h3",{
    y:-15,
    opacity:0,
    scrollTrigger: {
        trigger:".contents h3",
        scroller: "body",
            start: "top 10%",
            end: "top 20%",
            scrub: 2,
            duration:1.5,
    }
})

gsap.to(".contents h1",{
    y:-15,
    opacity:0,
    scrollTrigger: {
        trigger:".contents h1",
        scroller: "body",
            start: "top 10%",
            end: "top 60%",
            scrub: 2,
            duration:1.5,
    }
})

// burger animation starts


ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
gsap.to(".main-burger-wrapper .mid",{
        y:"35%",
        scrollTrigger: {
            trigger:".moving",
            scroller: "body",
                start: "top 20%",
                end: "top 60%",
                scrub: 1,
        }
    })


    gsap.to(".main-burger-wrapper .bottom",{
        y:"100%", 
        scrollTrigger: {
            trigger:".moving",
            scroller: "body",
                start: "top 20%",
                end: "top 60%",
                scrub: 1,
        }
    })

// burger animation ends


  }

})

 

// left item animation starts

gsap.from(".left-col .item-img",{
    x:-200,
    opacity:0,
    rotate:360,
    scrollTrigger: {
        trigger:".moving",
        scroller: "body",
            start: "top 20%",
            end: "top 60%",
            scrub: 2,
    }
})


gsap.from(".left-col .para",{
    x:200,
    y:100,
    opacity:0,
    scrollTrigger: {
        trigger:".moving",
        scroller: "body",
            start: "top 20%",
            end: "top 60%",
            scrub: 2,
    }
})

// left item animation ends


// right item animation starts

gsap.from(".right-col .item-img",{
    x:200,
    opacity:0,
    rotate:360,
    scrollTrigger: {
        trigger:".moving",
        scroller: "body",
            start: "top 20%",
            end: "top 60%",
            scrub: 2,
    }
})


gsap.from(".right-col .para",{
    x:-200,
    y:100,
    opacity:0,
    scrollTrigger: {
        trigger:".moving",
        scroller: "body",
            start: "top 20%",
            end: "top 60%",
            scrub: 2,
    }
})

// right item animation ends



ScrollTrigger.matchMedia({
  "(min-width: 1024px) and (max-width: 1200px)": function () {
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".detail-sec",
        scroller: "body",
            start: "top 30%",
            end: "top 60%",
            scrub: 2,
    }
})
tl.to(".moving .top",{ top:"115%",left:"100%",scale:1},0)
tl.to(".moving .mid",{ top:"130%",left:"100%",scale:1},0)
tl.to(".moving .bottom",{ top:"138%",left:"100%",scale:1},0)

  }
})

ScrollTrigger.matchMedia({
  "(min-width: 1440px)": function () {
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".detail-sec",
        scroller: "body",
            start: "top 30%",
            end: "top 60%",
            scrub: 2,
    }
})
tl.to(".moving .top",{ top:"160%",left:"160%"},0)
tl.to(".moving .mid",{ top:"180%",left:"160%"},0)
tl.to(".moving .bottom",{ top:"195%",left:"160%"},0)

  }

})


ScrollTrigger.matchMedia({
  "(min-width: 320px) and (max-width: 986px)": function () {
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".detail-sec",
        scroller: "body",
            start: "top 50%",
            end: "top 50%",
            scrub: 2,
    }
})
tl.to(".moving .top",{ y: "1150px", scale: 1 }, 0)
tl.to(".moving .mid",{ y: "1150px", scale: 1 }, 0)
tl.to(".moving .bottom",{ y: "1150px", scale: 1 }, 0)


  }
})