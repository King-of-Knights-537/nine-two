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

gsap.fromTo('#second div.logo', { 
    y: 200, autoAlpha: 0,
},{
    y: 0, autoAlpha: 1, 
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'section#second',
        start: 'top top'
    }
});

gsap.fromTo('.zero-button', { 
    autoAlpha: 0, y: 50
}, {
    autoAlpha: 1, y:0,
    duration: .25, ease: "power2.out",
    scrollTrigger:{
        trigger: 'section#third',
        start: 'center 50%'
    }
});

gsap.fromTo('.first-button', { 
    autoAlpha: 0, y: 50
}, {
    autoAlpha: 1, y:0,
    duration: .25, ease: "power2.out",
    scrollTrigger:{
        trigger: 'section#forth .content',
        start: 'top'
    }
});

gsap.fromTo('.second-button', { 
    autoAlpha: 0, y: 50
}, {
    autoAlpha: 1, y: 0,
    duration: .25, ease: "power2.out",
    scrollTrigger:{
        trigger: 'section#fifth .content',
        start: 'top'
    }
});

gsap.fromTo('.third-button', { 
    autoAlpha: 0, y: 50
}, {
    autoAlpha: 1, y:0, delay: 1,
    duration: .25, ease: "power2.out",
    scrollTrigger:{
        trigger: 'section.sixth-one .content',
        start: 'center'
    }
});

gsap.fromTo('.forth-button', { 
    autoAlpha: 0, y: 50
}, {
    autoAlpha: 1, y: 0, delay: .5,
    duration: .25, ease: "power2.out",
    scrollTrigger:{
        trigger: 'section#seventh',
        start: 'center'
    }
});

gsap.fromTo('button.to-top', { 
    y: 0
},{
    y: -12, duration: .725, repeat: -1, 
    yoyo: true, ease: Power2.easeInOut,
})

gsap.fromTo('#eighth img.right-image', { 
    x: 200, autoAlpha: 0,
},{
    x: 0, autoAlpha: 1, delay: .75,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'section#eighth .advantage article',
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
      }, 2000)
      
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
