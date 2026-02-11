// Fade In On Scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
// Scroll Progress Bar
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};

// Close Promo Banner
function closePromo() {
    document.getElementById("promoBanner").style.display = "none";
}

// Language Mode
function setLanguage(lang) {
    if(lang === 'id') {
        document.getElementById("heroTitle").innerText = "Wangi yang Mendefinisikan Dirimu";
        document.getElementById("heroDesc").innerText = "Aroma fresh woody untuk kepercayaan diri modern.";
    } else {
        document.getElementById("heroTitle").innerText = "Scent That Defines You";
        document.getElementById("heroDesc").innerText = "Fresh woody fragrance crafted for modern confidence.";
    }
}
// Burger Menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
});
