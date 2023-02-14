//MenuBtn
const menuBtn = document.querySelector('header .navbar-toggler');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        center: true,
        navText: [
            "<i class='fa-solid fa-arrow-left'></i>",
            "<i class='fa-solid fa-arrow-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    //Alert loader
    $("button.open-notification").click(function(){
        $('.notification').removeClass('display-none');
        $('.notification').addClass('display-active');
        $('html').addClass('cant-scroll');
    });

    $("button.close-notification, .cross").click(function(){
        $('.notification').removeClass('display-active');
        $('.notification').addClass('display-none');
        $('html').removeClass('cant-scroll');
    });

});

//carousel
$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});

//Animation
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('#opening h1', { 
    x: -200, autoAlpha: 0,
},{
    x: 0, autoAlpha: 1,
    duration: 1, ease: "power2.out",
});

gsap.fromTo('#opening p', { 
    x: -200, autoAlpha: 0,
},{
    x: 0, autoAlpha: 1, delay: 1,
    duration: 1, ease: "power2.out",
});

gsap.fromTo('#second div.logo.logo-1', { 
    y: 200, autoAlpha: 0,
},{
    y: 0, autoAlpha: 1, 
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'section#second',
        start: 'top top'
    }
});

gsap.fromTo('#second div.logo.logo-2', { 
    y: 200, autoAlpha: 0,
},{
    y: 0, autoAlpha: 1, delay: .5,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'section#second',
        start: 'top top'
    }
});

gsap.fromTo('#second div.logo.logo-3', { 
    y: 200, autoAlpha: 0,
},{
    y: 0, autoAlpha: 1, delay: .75,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'section#second',
        start: 'top top'
    }
});

gsap.fromTo('#second div.logo.logo-4', { 
    y: 200, autoAlpha: 0,
},{
    y: 0, autoAlpha: 1, delay: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'section#second h2:nth-child(1)',
        start: 'top'
    }
});

gsap.fromTo('#second div.logo.logo-5', { 
    y: 200, autoAlpha: 0,
},{
    y: 0, autoAlpha: 1, delay: 1.25,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'section#second h2:nth-child(1)',
        start: 'top'
    }
});

gsap.fromTo('.first-button', { 
    autoAlpha: 0, y: 50
}, {
    autoAlpha: 1, y:0,
    duration: .25, ease: "power2.out",
    scrollTrigger:{
        trigger: 'section#forth',
        start: 'center'
    }
});

gsap.fromTo('.second-button', { 
    autoAlpha: 0, y: 50
}, {
    autoAlpha: 1, y: 0,
    duration: .25, ease: "power2.out",
    scrollTrigger:{
        trigger: 'section#fifth',
        start: 'bottom'
    }
});

gsap.fromTo('#eighth img.right-image', { 
    x: 200, autoAlpha: 0,
},{
    x: 0, autoAlpha: 1, delay: .75,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'section#eighth img.right-image',
        start: 'top'
    }
});

gsap.fromTo('#eighth img.left-image', { 
    x: -200, autoAlpha: 0,
},{
    x: 0, autoAlpha: 1, delay: .75,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: '#eighth img.left-image',
        start: 'center'
    }
});


let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
      
      setTimeout(() => {
        entry.target.classList.add('animated')
      }, 4000)
      
      observer.unobserve(entry.target)
    }
  })
})

document.querySelectorAll('mark').forEach(mark => {
  observer.observe(mark)
})

//Video-Display
document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementsByClassName('video');
        if(video.playing) {
        } else {
            video.play();
        }
    }
});
