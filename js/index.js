const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});


// header hiding on scroll effect
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (Math.abs(window.scrollY - lastScrollY) > 4.4) {
        if (window.scrollY > lastScrollY) {
            // Scrolling down, hide the header
            header.style.top = '-36.44px'; // Adjust the value to match your header height
        } else {
            // Scrolling up, show the header
            header.style.top = '0';
        }
        
        lastScrollY = window.scrollY;
    }
});

// Scroll to Top Button Visibility
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollUp.classList.add('visible');
    } else {
        scrollUp.classList.remove('visible');
    }
});

// Initial check for scroll position
if (window.pageYOffset > 300) {
    scrollUp.classList.add('visible');
}

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});