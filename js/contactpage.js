/*rolling text effect*/
let elementsRol = document.querySelectorAll(".rolling-text");

elementsRol.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("block");
    
    for(let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
});

elementsRol.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.remove("play");
    });
});

/*gsap reveal anims*/

const contacttl = gsap.timeline();

contacttl.from("#header", 1, {
    opacity:0,
    y:-200,
    delay:0.2,
    ease: "power4.out",
});


contacttl.from(".left-text", 1, {
    opacity:0,
    y: -100,
    ease: "power3.out",
    stagger: {
        amount: 0.5,
    },
},
"-=1"
);


contacttl.from(".input", 1, {
    x: 800,
    ease: "power4.out",
    stagger: {
        amount: 0.2,
    },
}, 
    "-=1"
);



contacttl.from("button", 1.5, {
    opacity: 0,
    ease: "power4.out",
}, 
"-=0.5"
);