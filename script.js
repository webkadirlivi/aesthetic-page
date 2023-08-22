const tl = gsap.timeline( {paused: true});

function openNav() {
    animateOpenNav();
    const navBtn = document.getElementById("toggle");
    navBtn.onclick = function (e) {
        tl.reversed(!tl.reversed());
    };
}

openNav();

function animateOpenNav() {
    tl.to(".container", 1, {
        top: "70vh",
        scale: "0.925",
        ease: "power4.out",
    });

    tl.to(".nav-link > a", 1, {
        top: 0,
        ease: "power3.out",
        stagger: {
            amount: 0.2,
        },
    },
    "-=1");

    tl.to(".nav-2 > a", 0.6, {
        opacity: 1,
        top: 0,
        ease: "power3.out",
        stagger: {
            amount: 0.1,
        }
    }, 
    "-=1"
    ).reverse()
}
