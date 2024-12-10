// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
gsap.from('.hero h1', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power3.out'
});
gsap.from('.hero p', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
});
gsap.from('.btn', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 1,
    ease: 'elastic.out(1, 0.75)'
});

// Skills Section Animations
gsap.from('.skills-grid .skill-card', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%', // Animation starts when the section is 80% into the viewport
        toggleActions: 'play none none none' // Play animation only once
    }
});

// Projects Section Animations
gsap.from('.projects-grid .project-card', {
    opacity: 0,
    x: -50,
    stagger: 0.3,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Timeline Section Animations
gsap.from('.timeline-item', {
    opacity: 0,
    x: -50,
    stagger: 0.3,
    duration: 1,
    ease: 'expo.out',
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Contact Section Animations
gsap.from('.contact-item img', {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
    ease: 'bounce.out',
    scale: 0.8,
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});
gsap.from('.contact p', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'circ.out',
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Footer Animation
gsap.from('footer', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%',
        toggleActions: 'play none none none'
    }
});

// Adding Hover Effects
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.1, duration: 0.2, ease: 'power1.inOut' });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power1.inOut' });
    });
});

document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, duration: 0.3, ease: 'power1.inOut' });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power1.inOut' });
    });
});
