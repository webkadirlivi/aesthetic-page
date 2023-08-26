$(function () {
    'use strict';

//resim accord img
    function accordion() {


        $('.accordion .accordion-items').on('click', function () {
            const timeAnim = 400;
            $('.accordion .accordion-items').removeClass("active").css({'pointer-events': 'auto'});
            $(this).addClass("active").css({'pointer-events': 'auto'});
            $('.accordion .accordion-header').next().slideUp(timeAnim);
            $(this).find('.accordion-header').next().slideDown(timeAnim);

            $('.accord-img').removeClass("active");
            let id = $(this).data("id");
            $('#' + id + '-img').addClass("active");
        });
    }
    accordion();

    function cursor () {
            $(window).on('mousemove', function (e) {
                let x = e.clientX;
                let y = e.clientY;

                $('.cursor').css({left: x + 'px', top: y + 'px'});
            });

            $('.accordion-items').each(function () {
                $(this).mouseenter(function () {
                   $('.cursor').addClass("active"); 
                });

                $(this).mouseleave(function () {
                    $('.cursor').removeClass("active");
                });
            });
    }
    cursor();
});


/* GSAP*/ 

const projecttl = gsap.timeline();

projecttl.from(".title", 1, {
    opacity:0,
    y:-200,
    delay:0.2,
    ease: "power4.out",
});


projecttl.from(".accordion-items", 1, {
    opacity:0,
    y: -100,
    ease: "power3.out",
    stagger: {
        amount: 0.5,
    },
},
"-=1"
);


projecttl.from(".accordion-img", 1, {
    width: 0,
    ease: "power4.out",
    stagger: {
        amount: 0.2,
    },
}, 
    "-=1"
);

projecttl.from(".links ul li", 1, {
    opacity:0,
    ease: "power3.out",
    stagger: {
        amount: 0.5,
    },
},
"-=1"
);


