// Testimonios con traducción automática
function initTestimonialsI18n() {
    const contenedor = document.getElementById("testimonial-carousel");
    if (!contenedor) return;

    let indice = 0;
    let intervalId;

    const testimonialsData = {
        es: [
            {
                name: "Ana López",
                position: "CEO en Innovatech",
                text: "¡Una experiencia increíble! Nos ayudaron a transformar nuestro sitio web completamente."
            },
            {
                name: "Carlos Méndez",
                position: "CTO en SoftSolutions", 
                text: "Profesionales, creativos y comprometidos. ¡Altamente recomendados!"
            },
            {
                name: "Laura Ramírez",
                position: "Gerente de Marketing en RedNova",
                text: "Desde el primer contacto supimos que estábamos en buenas manos. Resultado impecable."
            },
            {
                name: "Javier Morales",
                position: "Fundador de EcoTienda",
                text: "Nos ofrecieron soluciones innovadoras que superaron nuestras expectativas."
            }
        ],
        en: [
            {
                name: "Ana López",
                position: "CEO at Innovatech",
                text: "An incredible experience! They helped us completely transform our website."
            },
            {
                name: "Carlos Méndez",
                position: "CTO at SoftSolutions",
                text: "Professional, creative and committed. Highly recommended!"
            },
            {
                name: "Laura Ramírez", 
                position: "Marketing Manager at RedNova",
                text: "From the first contact we knew we were in good hands. Impeccable result."
            },
            {
                name: "Javier Morales",
                position: "Founder of EcoTienda", 
                text: "They offered us innovative solutions that exceeded our expectations."
            }
        ],
        fr: [
            {
                name: "Ana López",
                position: "PDG chez Innovatech",
                text: "Une expérience incroyable ! Ils nous ont aidés à transformer complètement notre site web."
            },
            {
                name: "Carlos Méndez",
                position: "CTO chez SoftSolutions",
                text: "Professionnels, créatifs et engagés. Hautement recommandés !"
            },
            {
                name: "Laura Ramírez", 
                position: "Directrice Marketing chez RedNova",
                text: "Dès le premier contact, nous savions que nous étions entre de bonnes mains. Résultat impeccable."
            },
            {
                name: "Javier Morales",
                position: "Fondateur d'EcoTienda", 
                text: "Ils nous ont offert des solutions innovantes qui ont dépassé nos attentes."
            }
        ],
        pt: [
            {
                name: "Ana López",
                position: "CEO na Innovatech",
                text: "Uma experiência incrível! Eles nos ajudaram a transformar completamente nosso site."
            },
            {
                name: "Carlos Méndez",
                position: "CTO na SoftSolutions",
                text: "Profissionais, criativos e comprometidos. Altamente recomendados!"
            },
            {
                name: "Laura Ramírez", 
                position: "Gerente de Marketing na RedNova",
                text: "Desde o primeiro contato soubemos que estávamos em boas mãos. Resultado impecável."
            },
            {
                name: "Javier Morales",
                position: "Fundador da EcoTienda", 
                text: "Nos ofereceram soluções inovadoras que superaram nossas expectativas."
            }
        ]
    };

    function mostrarTestimonio() {
        const currentLang = localStorage.getItem('selectedLanguage') || window.currentLanguage || 'es';
        const testimonials = testimonialsData[currentLang] || testimonialsData.es;
        
        const { name, position, text } = testimonials[indice];
        contenedor.innerHTML = `
            <div class="bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105">
                <p class="text-xl text-gray-700 italic mb-6">"${text}"</p>
                <h4 class="text-xl font-semibold text-gray-900">${name}</h4>
                <p class="text-gray-500">${position}</p>
            </div>
        `;
        indice = (indice + 1) % testimonials.length;
    }

    window.restartTestimonials = function() {
        indice = 0;
        mostrarTestimonio();
    };

    window.updateTestimonials = mostrarTestimonio;

    mostrarTestimonio();
    
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(mostrarTestimonio, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initTestimonialsI18n, 500);
});

console.log('📝 Testimonials i18n loaded'); 