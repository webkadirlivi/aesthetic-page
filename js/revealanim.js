const tl = gsap.timeline();

tl.from(".intro > div", 1, {
    opacity:0,
    y: -100,
    ease: "power4.out",
    delay:1,
    stagger: {
        amount: 0.3,
    },
});


tl.from(".hr", 1, {
    width: 0,
    ease: "power4.in",
    delay:1,
    stagger: {
        amount: 0.2,
    },
}, 
    "-=3"
);

tl.from(".reveal div", 1, {
    y: 200,
    ease: "power4.out",
    stagger: {
        amount: 0.8,
    },
}, 
    "-=1.5"
);

tl.from(".nav-items", 1, {
    opacity:0,
    y: 100,
    ease: "power4.out",
    stagger: {
        amount: 0.3,
    },
}, 
    "-=1.5"
);

/*barba js*/
