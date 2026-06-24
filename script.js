// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Função para abrir abas
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const tabElement = document.getElementById(tabName);
    if (tabElement) {
        tabElement.classList.add('active');
    }
    
    evt.currentTarget.classList.add('active');
}

// Animação ao scroll (fade in elements)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const cards = document.querySelectorAll('.card, .culture-item, .bio-card, .agro-box');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (nome && email && mensagem) {
            alert(`Obrigado, ${nome}! Sua mensagem foi recebida com sucesso.\nEntraremos em contato em breve em ${email}`);
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}

// Efeito de glow ao hover em elementos principais
document.querySelectorAll('.card, .bio-card, .agro-box').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.5)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
    });
});