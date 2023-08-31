document.addEventListener("DOMContentLoaded", function() {
    'use strict';

    gsap.registerPlugin(ScrollTrigger);
    const gsapItem = gsap.utils.toArray('.reveal-img-item');

    gsapItem.forEach((gsIt) => {
        const imgNums = gsIt.querySelectorAll('.reveal-img-num');

        imgNums.forEach((imgNum) => {
            gsap.from(imgNum, 1, {
                opacity: 0,
                translateY: 50,
                ease: "ease-in-out",
                scrollTrigger: {
                    trigger: imgNum,
                    start: "top 60%",
                    toggleActions: "play none none none",
                    markers: true
                }
            });
        });
    });

    gsapItem.forEach((gsIt) => {
        const imgInners = gsIt.querySelectorAll('.reveal-img-inner');

        imgInners.forEach((imgInner) => {
            gsap.to(imgInner, .5,{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
                ease: "expo.out",
                scrollTrigger: {
                    trigger: imgInner,
                    start: "top 70%",
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                    markers: true
                }
            });
        });
    });
    "-=1",

    gsapItem.forEach((gsIt) => {
        const imgBls = gsIt.querySelectorAll('.reveal-img-bl');

        imgBls.forEach((imgBl) => {
            gsap.to(imgBl, 1.5, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
                ease: "expo.out",
                scrollTrigger: {
                    trigger: imgBl,
                    start: "top 70%",
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                    markers: true
                }
            });
        });
    });
    "-0.5"

    gsapItem.forEach((gsIt) => {
        const imgImgs = gsIt.querySelectorAll('.reveal-img-img');

        imgImgs.forEach((imgImg) => {
            gsap.from(imgImg, 4, {
                scale: 1.5,
                filter: "blur(15px)",
                ease: "expo.out",
                scrollTrigger: {
                    trigger: imgImg,
                    start: "top 70%",
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                    markers: true
                }
            });
        });
    });
    "-1.5"
});
