
var tl = gsap.timeline()


tl.from("#nav img",{
    y:-100,
    duration:1,
    // delay:1,
    opacity:0
})
tl.from("#nav h4",{
    x:-110,
    duration:1,
    // delay:1,
    stagger:0.5,
    opacity:0
})

tl.from("#nav button", {
    // x:200,
    duration:1,
    // delay:1,
    opacity:0
})

tl.from("main h1",{
    y:200,
    duration:1,
    // delay:1,
    stagger:0.5,
    opacity:0
})

tl.from("#left-img", {
    x:-200,
    duration:1,
    // delay:1,
    opacity:0

})
tl.from("#right-img", {
    // x:-200,
    duration:1,
    // delay:1,
    opacity:0
    
})

tl.from("main p", {
    y:-30,
    opacity:0,
    duration:0.6,
    // delay:0.4,
    repeat:-1,
    yoyo:true
})