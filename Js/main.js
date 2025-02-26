// Ativando o Menu Móvel
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

// Alternando o menu clicando nos links do menu móvel
const navLinks = document.querySelectorAll('.nav-link');

const linkAction = (event) => {
    navLinks.forEach(link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
};

navLinks.forEach(link => link.addEventListener('click', linkAction));

// Alterando a seção do menu ativo durante a rolagem
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            correspondingLink?.classList.add('active');
        } else {
            correspondingLink?.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', scrollActive);

// Configurações de revelação de rolagem
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home-title', {});
sr.reveal('.home-scroll', { delay: 200 });
sr.reveal('.home-img', { origin: 'right', delay: 400 });

sr.reveal('.about-img', { delay: 500 });
sr.reveal('.about-subtitle', { delay: 300 });
sr.reveal('.about-profession', { delay: 400 });
sr.reveal('.about-text', { delay: 500 });
sr.reveal('.about-social-icon', { delay: 600, interval: 200 });

sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-name', { distance: '20px', delay: 50, interval: 100 });
sr.reveal('.skills-img', { delay: 400 });

sr.reveal('.portfolio-img', { interval: 200 });

sr.reveal('.contact-subtitle', {});
sr.reveal('.contact-text', { interval: 200 });
sr.reveal('.contact-input', { delay: 400 });
sr.reveal('.contact-button', { delay: 600 });

// Lightbox
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");

    if (lightbox && lightboxImg && close) {
        // Abrir lightbox ao clicar em .img-wrapper
        document.querySelectorAll(".img-wrapper").forEach(wrapper => {
            wrapper.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = wrapper.querySelector("img").src;
            });
        });

        // Fechar lightbox ao clicar no botão de fechar
        close.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        // Fechar lightbox ao clicar fora da imagem
        lightbox.addEventListener("click", (e) => {
            if (e.target !== lightboxImg) {
                lightbox.style.display = "none";
            }
        });
    }
});

