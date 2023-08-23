const toggle = gsap.timeline( {paused: true});

function openNav() {
    animateOpenNav();
    const navBtn = document.getElementById("toggle");
    navBtn.onclick = function (e) {
        toggle.reversed(!toggle.reversed());
    };
}

openNav();

function animateOpenNav() {
    toggle.to(".container", 1, {
        top: "90vh",
        scale: "0.925",
        ease: "power4.out",
    });

    toggle.to(".nav-link > a", 1, {
        top: 0,
        ease: "power3.out",
        stagger: {
            amount: 0.2,
        },
    },
    "-=1");

    toggle.to(".nav-wrapper-nav-2 > a", 0.6, {
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
