// ============================
// MAIN JAVASCRIPT FILE
// ============================

// ============================
// DOM Content Loaded Event
// ============================
document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
    initMobileMenu();
    initContactForm();
    initTestimonials();
    initFloatingIcons();
    initOrbitingIcons();
    loadServices();
    loadTechnologies();
    loadProjects();
    fetchNews();
    
    // Inicializar sistema de traducción automática
    if (typeof initI18n === 'function') {
        initI18n();
    }
});

// ============================
// SCROLL REVEAL FUNCTIONALITY
// ============================
function initScrollReveal() {
    const scrollReveals = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    scrollReveals.forEach(el => observer.observe(el));
}

// ============================
// MOBILE MENU FUNCTIONALITY
// ============================
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// ============================
// CONTACT FORM FUNCTIONALITY MAIL
// ============================
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    let isSubmitting = false; // Prevent multiple submissions

    if (!form || !formMessage) {
        console.error('Form or message element not found');
        return;
    }

    // Create a loading overlay container
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
    document.body.appendChild(loadingOverlay);

    // Load the loading.html content
    fetch('public/loading.html')
        .then(response => response.text())
        .then(html => {
            loadingOverlay.innerHTML = html;
        })
        .catch(err => {
            console.error('Failed to load loading.html:', err);
            loadingOverlay.innerHTML = '<div class="text-white">Cargando...</div>';
        });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Prevent multiple submissions
        if (isSubmitting) {
            console.log('Submission already in progress');
            return;
        }
        isSubmitting = true;

        console.log('Form submission triggered');

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = 'Todos los campos son obligatorios';
            formMessage.className = 'mt-4 text-center text-red-600 show';
            isSubmitting = false;
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMessage.textContent = 'Formato de correo inválido';
            formMessage.className = 'mt-4 text-center text-red-600 show';
            isSubmitting = false;
            return;
        }

        // Check submission limit
        const submissionData = JSON.parse(localStorage.getItem('submissionData')) || { count: 0, timestamps: [] };
        const now = Date.now();
        const twoHours = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
        const recentSubmissions = submissionData.timestamps.filter(ts => now - ts < twoHours);

        if (recentSubmissions.length >= 3) {
            formMessage.textContent = 'Has alcanzado el límite de 3 envíos. Tienes que esperar unas horas antes de seguir solicitando información.';
            formMessage.className = 'mt-4 text-center text-red-600 show';
            isSubmitting = false;
            return;
        }

        const formData = { name, email, message };
        console.log('Form data:', formData);

        const button = form.querySelector('button[type="submit"]');
        button.disabled = true;
        button.textContent = 'Enviando...';

        // Show loading overlay
        loadingOverlay.classList.remove('hidden');

        try {
            const response = await fetch('src/php/submit.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            console.log('Response status:', response.status);
            const result = await response.json();
            console.log('Response data:', result);

            formMessage.textContent = result.message || result.error;
            formMessage.className = `mt-4 text-center ${result.message ? 'text-green-600' : 'text-red-600'} show`;

            if (result.message) {
                form.reset();
                // Update submission data
                submissionData.count++;
                submissionData.timestamps.push(now);
                submissionData.timestamps = submissionData.timestamps.filter(ts => now - ts < twoHours); // Clean up old timestamps
                localStorage.setItem('submissionData', JSON.stringify(submissionData));
                console.log('Updated submission data:', submissionData);
            }
        } catch (error) {
            formMessage.textContent = 'Error al enviar. Intenta de nuevo o contacta a soporte@wavdevelop.com';
            formMessage.className = 'mt-4 text-center text-red-600 show';
            console.error('Error:', error);
        } finally {
            // Hide loading overlay
            loadingOverlay.classList.add('hidden');
            button.disabled = false;
            button.textContent = 'Enviar Mensaje';
            isSubmitting = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', initContactForm);
// ============================
// END CONTACT FORM FUNCTIONALITY   
// ============================



// ============================
// TESTIMONIALS FUNCTIONALITY
// ============================
function initTestimonials() {
    const contenedor = document.getElementById("testimonial-carousel");
    if (!contenedor) return;

    let indice = 0;
    let intervalId;

    function mostrarTestimonio() {
        // Obtener traducciones según el idioma actual
        let testimonials;
        const currentLang = localStorage.getItem('selectedLanguage') || 'es';
        
        if (currentLang === 'es') {
            testimonials = [
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
            ];
        } else if (currentLang === 'en') {
            testimonials = [
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
            ];
        } else if (currentLang === 'fr') {
            testimonials = [
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
            ];
        } else if (currentLang === 'pt') {
            testimonials = [
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
            ];
        } else {
            // Fallback español
            testimonials = [
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
            ];
        }
        
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

    // Función para reiniciar testimonios cuando cambie el idioma
    window.restartTestimonials = function() {
        indice = 0;
        mostrarTestimonio();
    };

    mostrarTestimonio();
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(mostrarTestimonio, 5000);
}

// ============================
// FLOATING ICONS FUNCTIONALITY
// ============================
function initFloatingIcons() {
    const floatingContainer = document.querySelector('.floating-icons');
    if (!floatingContainer) return;

    const icons = [
        {
            svg: `<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>`,
            position: 'absolute top-20 left-10',
            color: 'bg-blue-500',
            size: 'w-16 h-16',
            animation: 'animate-float-slow',
            delay: '0s'
        },
        {
            svg: `<path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>`,
            position: 'absolute top-32 right-20',
            color: 'bg-yellow-500',
            size: 'w-14 h-14',
            animation: 'animate-float-fast',
            delay: '1s'
        },
        {
            svg: `<path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>`,
            position: 'absolute bottom-32 left-1/4',
            color: 'bg-green-500',
            size: 'w-12 h-12',
            animation: 'animate-float-slow',
            delay: '2s'
        },
        {
            svg: `<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>`,
            position: 'absolute top-1/2 right-10',
            color: 'bg-purple-500',
            size: 'w-16 h-16',
            animation: 'animate-float-fast',
            delay: '3s'
        }
    ];

    icons.forEach(icon => {
        const iconElement = document.createElement('div');
        iconElement.className = `${icon.position} ${icon.size} ${icon.color} rounded-lg flex items-center justify-center ${icon.animation} tech-logo`;
        iconElement.style.animationDelay = icon.delay;
        iconElement.innerHTML = `<svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">${icon.svg}</svg>`;
        floatingContainer.appendChild(iconElement);
    });
}

// ============================
// ORBITING ICONS FUNCTIONALITY
// ============================
function initOrbitingIcons() {
    const orbitContainer = document.querySelector('.orbiting-icons');
    if (!orbitContainer) return;

    const orbitIcons = [
        { text: 'R', color: 'bg-blue-500', position: 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-8' },
        { text: 'N', color: 'bg-green-500', position: 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8', delay: '1s' },
        { text: 'JS', color: 'bg-yellow-500', position: 'top-1/2 left-0 transform -translate-y-1/2 -translate-x-8', delay: '2s' },
        { text: 'TS', color: 'bg-purple-500', position: 'top-1/2 right-0 transform -translate-y-1/2 translate-x-8', delay: '3s' }
    ];

    orbitIcons.forEach(icon => {
        const iconElement = document.createElement('div');
        iconElement.className = `absolute ${icon.position} w-12 h-12 ${icon.color} rounded-lg flex items-center justify-center animate-bounce-gentle`;
        if (icon.delay) iconElement.style.animationDelay = icon.delay;
        iconElement.innerHTML = `<span class="text-white font-bold">${icon.text}</span>`;
        orbitContainer.appendChild(iconElement);
    });
}

// ============================
// LOAD SERVICES DATA
// ============================
function loadServices() {
    const services = [
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`,
            title: 'Desarrollo Web Corporativo',
            description: 'Sitios web profesionales que reflejan la identidad de tu empresa con diseño moderno y funcionalidad excepcional.',
            features: ['Diseño responsive', 'Optimización SEO', 'CMS personalizado'],
            gradient: 'from-wave-blue to-wave-blue-light',
            color: 'wave-blue',
            delay: '0s'
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>`,
            title: 'E-commerce Avanzado',
            description: 'Tiendas online completas con sistemas de pago seguros, gestión de inventario y experiencia de compra optimizada.',
            features: ['Pagos seguros', 'Gestión de productos', 'Analytics integrado'],
            gradient: 'from-wave-purple to-wave-pink',
            color: 'wave-purple',
            delay: '0.2s'
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
            title: 'Aplicaciones Web',
            description: 'Aplicaciones web personalizadas con tecnologías modernas para automatizar procesos y mejorar la productividad.',
            features: ['React & Next.js', 'APIs REST', 'Base de datos'],
            gradient: 'from-wave-green to-wave-blue',
            color: 'wave-green',
            delay: '0.4s'
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>`,
            title: 'Seguridad & Hosting',
            description: 'Servicios de hosting seguro, certificados SSL, backups automáticos y monitoreo 24/7 para máxima confiabilidad.',
            features: ['SSL gratuito', 'Backups diarios', 'Soporte 24/7'],
            gradient: 'from-wave-orange to-wave-pink',
            color: 'wave-orange',
            delay: '0.6s'
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>`,
            title: 'Consultoría Digital',
            description: 'Asesoramiento estratégico para optimizar tu presencia digital, mejorar conversiones y maximizar el ROI de tu inversión.',
            features: ['Auditoría web', 'Estrategia digital', 'Optimización UX'],
            gradient: 'from-wave-blue to-wave-green',
            color: 'wave-blue',
            delay: '0.8s'
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>`,
            title: 'Desarrollo Móvil',
            description: 'Aplicaciones móviles nativas y PWAs que ofrecen experiencias excepcionales en dispositivos iOS y Android.',
            features: ['React Native', 'PWA', 'App Store'],
            gradient: 'from-wave-purple to-wave-blue',
            color: 'wave-purple',
            delay: '1s'
        }
    ];

    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'glass-card p-10 rounded-2xl hover-lift scroll-reveal group';
        serviceElement.style.animationDelay = service.delay;
        
        serviceElement.innerHTML = `
            <div class="w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:animate-pulse-glow">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${service.icon}
                </svg>
            </div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900">${service.title}</h3>
            <p class="text-gray-600 leading-relaxed mb-6">${service.description}</p>
            <ul class="space-y-2 text-gray-600">
                ${service.features.map(feature => 
                    `<li class="flex items-center">
                        <span class="w-2 h-2 bg-${service.color} rounded-full mr-3"></span>${feature}
                    </li>`
                ).join('')}
            </ul>
        `;
        
        servicesGrid.appendChild(serviceElement);
    });
}

// ============================
// LOAD TECHNOLOGIES DATA
// ============================
function loadTechnologies() {
    const technologies = [
        { name: 'React', color: 'bg-blue-500', svg: `<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>`, delay: '0s' },
        { name: 'Next.js', color: 'bg-gray-900', svg: `<path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.146 4.318 16.956 1.669 13.94.394 13.114.134 12.3.025 11.572 0z"/>`, delay: '0.1s' },
        { name: 'TypeScript', color: 'bg-blue-600', svg: `<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>`, delay: '0.2s' },
        { name: 'Node.js', color: 'bg-green-600', svg: `<path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>`, delay: '0.3s' },
        { name: 'JavaScript', color: 'bg-yellow-500', svg: `<path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>`, delay: '0.4s' },
        { name: 'Tailwind', color: 'bg-cyan-500', svg: `<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>`, delay: '0.5s' }
    ];

    const techGrid = document.getElementById('tech-grid');
    if (!techGrid) return;

    technologies.forEach(tech => {
        const techElement = document.createElement('div');
        techElement.className = 'glass-card p-6 rounded-2xl hover-lift text-center scroll-reveal tech-logo group';
        techElement.style.animationDelay = tech.delay;
        
        techElement.innerHTML = `
            <div class="w-16 h-16 ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    ${tech.svg}
                </svg>
            </div>
            <h4 class="font-bold text-gray-900">${tech.name}</h4>
        `;
        
        techGrid.appendChild(techElement);
    });
}

// ============================
// LOAD PROJECTS DATA
// ============================
function loadProjects() {
    const projects = [
        {
            title: 'E-commerce Moderno',
            subtitle: 'Tienda online completa',
            description: 'Plataforma de e-commerce con diseño moderno, sistema de pagos integrado y panel de administración completo.',
            technologies: ['React', 'Node.js', 'Stripe'],
            colors: ['blue', 'green', 'purple'],
            gradient: 'from-wave-blue to-wave-purple',
            delay: '0s'
        },
        {
            title: 'Dashboard Corporativo',
            subtitle: 'Panel de control avanzado',
            description: 'Dashboard interactivo para gestión empresarial con analytics en tiempo real y reportes automatizados.',
            technologies: ['Next.js', 'Chart.js', 'PostgreSQL'],
            colors: ['blue', 'yellow', 'gray'],
            gradient: 'from-wave-purple to-wave-pink',
            delay: '0.2s'
        },
        {
            title: 'App Móvil Innovadora',
            subtitle: 'Aplicación multiplataforma',
            description: 'Aplicación móvil con funcionalidades avanzadas, sincronización en la nube y experiencia de usuario excepcional.',
            technologies: ['React Native', 'Firebase', 'TypeScript'],
            colors: ['blue', 'orange', 'green'],
            gradient: 'from-wave-green to-wave-blue',
            delay: '0.4s'
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'glass-card rounded-2xl overflow-hidden hover-lift scroll-reveal group';
        projectElement.style.animationDelay = project.delay;
        
        projectElement.innerHTML = `
            <div class="h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden">
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute bottom-4 left-4 text-white">
                    <h4 class="text-xl font-bold">${project.title}</h4>
                    <p class="text-sm opacity-90">${project.subtitle}</p>
                </div>
            </div>
            <div class="p-8">
                <p class="text-gray-600 mb-6">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.technologies.map((tech, index) => 
                        `<span class="bg-${project.colors[index]}-100 text-${project.colors[index]}-800 px-3 py-1 rounded-full text-sm">${tech}</span>`
                    ).join('')}
                </div>
                <button class="text-wave-blue font-semibold hover:text-wave-purple transition-colors">
                    Ver proyecto →
                </button>
            </div>
        `;
        
        projectsGrid.appendChild(projectElement);
    });
}

// ============================
// FETCH NEWS FUNCTIONALITY
// ============================
function fetchNews() {
    fetch('../API/api_noticias.php')
      .then(response => response.json())
      .then(news => {
        const newsSection = document.getElementById("noticias");
        const container = document.createElement("div");
        container.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8");

        if (!Array.isArray(news)) {
          newsSection.innerHTML = `
            <p class="text-red-600">
              Error: ${news.error || 'No se pudieron cargar las noticias.'}
            </p>`;
          return;
        }

        if (news.length === 0) {
          newsSection.innerHTML = "<p>No se encontraron noticias.</p>";
        } else {
          news.forEach(n => {
            const item = document.createElement("div");
            item.classList.add(
              "bg-white", "rounded-xl", "shadow-lg", "overflow-hidden",
              "hover:shadow-xl", "transition-all"
            );

            item.innerHTML = `
              <img src="${n.image_url || 'https://via.placeholder.com/600x300?text=Sin+imagen'}"
                   alt="${n.title}"
                   class="w-full h-48 object-cover" />

              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${n.title}</h3>
                <p class="text-sm text-gray-500 mb-2">
                  ${n.source} | ${new Date(n.published_at).toLocaleDateString()}
                </p>
                <p class="text-gray-700 mb-4">
                  ${n.description || n.snippet}
                </p>
                <a href="${n.url}" target="_blank"
                   class="text-wave-blue font-semibold hover:text-wave-purple transition">
                  Leer más →
                </a>
              </div>
            `;

            container.appendChild(item);
          });
        }

        newsSection.appendChild(container);
      })
      .catch(error => {
        console.error("Error al obtener noticias:", error);
        document.getElementById("noticias").innerHTML = `
          <p class='text-red-600'>No se pudo cargar las noticias.</p>`;
      });
  }