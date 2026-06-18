gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

const tlHero = gsap.timeline();

tlHero.fromTo(".navbar", 
    { y: -100, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
)
.fromTo(".hero-text-box > *", 
    { x: -50, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
    "-=0.5"
)
.fromTo(".hero-img-box", 
    { scale: 0.8, opacity: 0, rotation: -10 }, 
    { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "back.out(1.2)" },
    "-=0.8"
);

gsap.utils.toArray('.section-header').forEach(header => {
    gsap.fromTo(header, 
        { y: 40, opacity: 0 },
        {
            scrollTrigger: { trigger: header, start: "top 85%" },
            y: 0, opacity: 1, duration: 0.8, ease: "power2.out"
        }
    );
});

const animateCards = (selector) => {
    const cards = document.querySelectorAll(selector);
    if(cards.length > 0) {
        gsap.fromTo(cards, 
            { y: 50, opacity: 0 },
            {
                scrollTrigger: { trigger: cards[0], start: "top 85%" },
                y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out", clearProps: "all"
            }
        );
    }
};


animateCards('.feature-card');
animateCards('.track-card');
animateCards('.testimonial-card');

const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
    ScrollTrigger.create({
        trigger: "#estatisticas",
        start: "top 85%",
        onEnter: () => {
            counters.forEach(counter => {
                const targetValue = parseInt(counter.getAttribute('data-target'));
                
                let contagem = { val: 0 };
                gsap.to(contagem, {
                    val: targetValue,
                    duration: 2.5,
                    ease: "power2.out",
                    onUpdate: function() {
                        counter.innerHTML = Math.floor(this.targets()[0].val).toLocaleString('pt-BR');
                    }
                });
            });
        },
        once: true 
    });
}

if(document.querySelector('.cta-section')) {
    gsap.fromTo('.cta-section .bg-gradient-cyan',
        { scale: 0.95, opacity: 0 },
        {
            scrollTrigger: { trigger: '.cta-section', start: "top 85%" },
            scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)", clearProps: "all"
        }
    );
}
});
