const SUPPORTED_LANGUAGES = {
    'es': { name: 'Español', flag: '🇪🇸' },
    'en': { name: 'English', flag: '🇺🇸' },
    'fr': { name: 'Français', flag: '🇫🇷' },
    'pt': { name: 'Português', flag: '🇧🇷' }
};

const TRANSLATIONS = {
    es: {
        nav: {
            home: "Inicio",
            services: "Servicios",
            technologies: "Tecnologías",
            projects: "Proyectos",
            contact: "Contacto",
            quote: "Cotizar Proyecto"
        },
        hero: {
            title: "Desarrollo Web",
            subtitle: "Innovador",
            description: "En **WavDevelop** creamos experiencias digitales extraordinarias con las tecnologías más avanzadas. Transformamos ideas en soluciones web profesionales que impulsan tu negocio hacia el futuro.",
            startProject: "Iniciar Proyecto",
            viewPortfolio: "Ver Portfolio",
            stats: {
                projects: "Proyectos",
                satisfaction: "Satisfacción",
                support: "Soporte"
            }
        },
        services: {
            title: "Nuestros",
            titleHighlight: "Servicios",
            subtitle: "Ofrecemos soluciones web completas y personalizadas que se adaptan perfectamente a las necesidades de tu negocio",
            webDev: {
                title: "Desarrollo Web Corporativo",
                description: "Sitios web profesionales que reflejan la identidad de tu empresa con diseño moderno y funcionalidad excepcional.",
                feature1: "Diseño responsive",
                feature2: "Optimización SEO",
                feature3: "CMS personalizado"
            },
            ecommerce: {
                title: "E-commerce Avanzado",
                description: "Tiendas online completas con sistemas de pago seguros, gestión de inventario y experiencia de compra optimizada.",
                feature1: "Pagos seguros",
                feature2: "Gestión de productos",
                feature3: "Analytics integrado"
            },
            webApp: {
                title: "Aplicaciones Web",
                description: "Aplicaciones web personalizadas con tecnologías modernas para automatizar procesos y mejorar la productividad.",
                feature1: "React & Next.js",
                feature2: "APIs REST",
                feature3: "Base de datos"
            },
            security: {
                title: "Seguridad & Hosting",
                description: "Servicios de hosting seguro, certificados SSL, backups automáticos y monitoreo 24/7 para máxima confiabilidad.",
                feature1: "SSL gratuito",
                feature2: "Backups diarios",
                feature3: "Soporte 24/7"
            },
            consulting: {
                title: "Consultoría Digital",
                description: "Asesoramiento estratégico para optimizar tu presencia digital, mejorar conversiones y maximizar el ROI de tu inversión.",
                feature1: "Auditoría web",
                feature2: "Estrategia digital",
                feature3: "Optimización UX"
            },
            mobile: {
                title: "Desarrollo Móvil",
                description: "Aplicaciones móviles nativas y PWAs que ofrecen experiencias excepcionales en dispositivos iOS y Android.",
                feature1: "React Native",
                feature2: "PWA",
                feature3: "App Store"
            }
        },
        technologies: {
            title: "Tecnologías de Vanguardia",
            subtitle: "Utilizamos las herramientas más modernas y eficientes del mercado para crear soluciones web robustas y escalables",
            more: "Y muchas tecnologías más..."
        },
        techCard: {
            title: "Tecnología Avanzada",
            description: "Utilizamos las últimas tecnologías y frameworks para crear soluciones web robustas y escalables."
        },
        projects: {
            title: "Nuestros",
            titleHighlight: "Proyectos",
            subtitle: "Explora algunos de nuestros trabajos más destacados que demuestran nuestra experiencia en desarrollo web",
            viewProject: "Ver Proyecto",
            liveDemo: "Demo en Vivo",
            ecommerce: {
                title: "E-commerce Moderno",
                subtitle: "Tienda online completa",
                description: "Plataforma de e-commerce con diseño moderno, sistema de pagos integrado y panel de administración completo."
            },
            dashboard: {
                title: "Dashboard Corporativo",
                subtitle: "Panel de control avanzado",
                description: "Dashboard interactivo para gestión empresarial con analytics en tiempo real y reportes automatizados."
            },
            mobileApp: {
                title: "App Móvil Innovadora",
                subtitle: "Aplicación multiplataforma",
                description: "Aplicación móvil con funcionalidades avanzadas, sincronización en la nube y experiencia de usuario excepcional."
            }
        },
        testimonials: {
            title: "Testimonios de",
            titleHighlight: "Clientes",
            subtitle: "Lo que dicen nuestros clientes sobre trabajar con WavDevelop",
            reviews: [
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
            ]
        },
        news: {
            title: "Últimas Noticias de",
            titleHighlight: "Tecnología",
            subtitle: "Mantente al día con las últimas tendencias y novedades del mundo del desarrollo web",
            readMore: "Leer Más",
            author: "Por",
            minutes: "min de lectura"
        },
        contact: {
            title: "Contáctanos",
            subtitle: "¿Tienes un proyecto en mente? Nos encantaría escuchar sobre tu idea y ayudarte a hacerla realidad",
            formTitle: "Envíanos un mensaje",
            name: "Nombre",
            email: "Email", 
            subject: "Asunto",
            message: "Mensaje",
            send: "Enviar Mensaje",
            placeholders: {
                name: "Tu nombre",
                email: "tu@correo.com",
                message: "Cuéntanos sobre tu proyecto"
            },
            info: {
                title: "Información de Contacto",
                email: "Email",
                phone: "Teléfono",
                address: "Dirección",
                hours: "Horario de Atención"
            }
        },
        footer: {
            description: "Creamos experiencias digitales extraordinarias que impulsan el crecimiento de tu negocio.",
            quickLinks: "Enlaces Rápidos",
            services: "Servicios",
            contact: "Contacto",
            followUs: "Síguenos",
            rights: "Todos los derechos reservados.",
            privacy: "Política de Privacidad",
            terms: "Términos de Servicio",
            subscribe: "Suscríbete",
            subscribeText: "Recibe las últimas novedades y actualizaciones de WavDevelop.",
            subscribeButton: "Suscribirse",
            emailPlaceholder: "Tu correo electrónico"
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            technologies: "Technologies",
            projects: "Projects",
            contact: "Contact",
            quote: "Get Quote"
        },
        hero: {
            title: "Web Development",
            subtitle: "Innovation",
            description: "At **WavDevelop** we create extraordinary digital experiences with the most advanced technologies. We transform ideas into professional web solutions that drive your business into the future.",
            startProject: "Start Project",
            viewPortfolio: "View Portfolio",
            stats: {
                projects: "Projects",
                satisfaction: "Satisfaction",
                support: "Support"
            }
        },
        services: {
            title: "Our",
            titleHighlight: "Services",
            subtitle: "We offer complete and personalized web solutions that perfectly adapt to your business needs",
            webDev: {
                title: "Corporate Web Development",
                description: "Professional websites that reflect your company's identity with modern design and exceptional functionality.",
                feature1: "Responsive design",
                feature2: "SEO optimization",
                feature3: "Custom CMS"
            },
            ecommerce: {
                title: "Advanced E-commerce",
                description: "Complete online stores with secure payment systems, inventory management and optimized shopping experience.",
                feature1: "Secure payments",
                feature2: "Product management",
                feature3: "Integrated analytics"
            },
            webApp: {
                title: "Web Applications",
                description: "Personalized web applications with modern technologies to automate processes and improve productivity.",
                feature1: "React & Next.js",
                feature2: "REST APIs",
                feature3: "Database"
            },
            security: {
                title: "Security & Hosting",
                description: "Secure hosting services, SSL certificates, automatic backups and 24/7 monitoring for maximum reliability.",
                feature1: "Free SSL",
                feature2: "Daily backups",
                feature3: "24/7 support"
            },
            consulting: {
                title: "Digital Consulting",
                description: "Strategic advice to optimize your digital presence, improve conversions and maximize ROI on your investment.",
                feature1: "Web audit",
                feature2: "Digital strategy",
                feature3: "UX optimization"
            },
            mobile: {
                title: "Mobile Development",
                description: "Native mobile applications and PWAs that offer exceptional experiences on iOS and Android devices.",
                feature1: "React Native",
                feature2: "PWA",
                feature3: "App Store"
            }
        },
        technologies: {
            title: "Cutting-edge Technologies",
            subtitle: "We use the most modern and efficient tools on the market to create robust and scalable web solutions",
            more: "And many more technologies..."
        },
        techCard: {
            title: "Advanced Technology",
            description: "We use the latest technologies and frameworks to create robust and scalable web solutions."
        },
        projects: {
            title: "Our",
            titleHighlight: "Projects",
            subtitle: "Explore some of our most outstanding work that demonstrates our expertise in web development",
            viewProject: "View Project",
            liveDemo: "Live Demo",
            ecommerce: {
                title: "Modern E-commerce",
                subtitle: "Complete online store",
                description: "E-commerce platform with modern design, integrated payment system and complete administration panel."
            },
            dashboard: {
                title: "Corporate Dashboard",
                subtitle: "Advanced control panel",
                description: "Interactive dashboard for business management with real-time analytics and automated reports."
            },
            mobileApp: {
                title: "Innovative Mobile App",
                subtitle: "Multiplatform application",
                description: "Mobile application with advanced functionalities, cloud synchronization and exceptional user experience."
            }
        },
        testimonials: {
            title: "Client",
            titleHighlight: "Testimonials",
            subtitle: "What our clients say about working with WavDevelop",
            reviews: [
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
            ]
        },
        news: {
            title: "Latest Technology",
            titleHighlight: "News",
            subtitle: "Stay up to date with the latest trends and news from the web development world",
            readMore: "Read More",
            author: "By",
            minutes: "min read"
        },
        contact: {
            title: "Contact Us",
            subtitle: "Have a project in mind? We'd love to hear about your idea and help you make it a reality",
            formTitle: "Send us a message",
            name: "Name",
            email: "Email",
            subject: "Subject", 
            message: "Message",
            send: "Send Message",
            placeholders: {
                name: "Your name",
                email: "your@email.com",
                message: "Tell us about your project"
            },
            info: {
                title: "Contact Information",
                email: "Email",
                phone: "Phone",
                address: "Address",
                hours: "Business Hours"
            }
        },
        footer: {
            description: "We create extraordinary digital experiences that drive your business growth.",
            quickLinks: "Quick Links",
            services: "Services",
            contact: "Contact",
            followUs: "Follow Us",
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            subscribe: "Subscribe",
            subscribeText: "Get the latest news and updates from WavDevelop.",
            subscribeButton: "Subscribe",
            emailPlaceholder: "Your email address"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            services: "Services",
            technologies: "Technologies",
            projects: "Projets",
            contact: "Contact",
            quote: "Obtenir un Devis"
        },
        hero: {
            title: "Développement Web",
            subtitle: "Innovant",
            description: "Chez **WavDevelop**, nous créons des expériences numériques extraordinaires avec les technologies les plus avancées. Nous transformons les idées en solutions web professionnelles qui propulsent votre entreprise vers l'avenir.",
            startProject: "Démarrer le Projet",
            viewPortfolio: "Voir le Portfolio",
            stats: {
                projects: "Projets",
                satisfaction: "Satisfaction",
                support: "Support"
            }
        },
        services: {
            title: "Nos",
            titleHighlight: "Services",
            subtitle: "Nous offrons des solutions web complètes et personnalisées qui s'adaptent parfaitement aux besoins de votre entreprise",
            webDev: {
                title: "Développement Web d'Entreprise",
                description: "Sites web professionnels qui reflètent l'identité de votre entreprise avec un design moderne et une fonctionnalité exceptionnelle.",
                feature1: "Design réactif",
                feature2: "Optimisation SEO",
                feature3: "CMS personnalisé"
            },
            ecommerce: {
                title: "E-commerce Avancé",
                description: "Boutiques en ligne complètes avec systèmes de paiement sécurisés, gestion d'inventaire et expérience d'achat optimisée.",
                feature1: "Paiements sécurisés",
                feature2: "Gestion des produits",
                feature3: "Analytiques intégrées"
            },
            webApp: {
                title: "Applications Web",
                description: "Applications web personnalisées avec des technologies modernes pour automatiser les processus et améliorer la productivité.",
                feature1: "React & Next.js",
                feature2: "APIs REST",
                feature3: "Base de données"
            },
            security: {
                title: "Sécurité & Hébergement",
                description: "Services d'hébergement sécurisé, certificats SSL, sauvegardes automatiques et surveillance 24/7 pour une fiabilité maximale.",
                feature1: "SSL gratuit",
                feature2: "Sauvegardes quotidiennes",
                feature3: "Support 24/7"
            },
            consulting: {
                title: "Conseil Numérique",
                description: "Conseils stratégiques pour optimiser votre présence numérique, améliorer les conversions et maximiser le ROI de votre investissement.",
                feature1: "Audit web",
                feature2: "Stratégie numérique",
                feature3: "Optimisation UX"
            },
            mobile: {
                title: "Développement Mobile",
                description: "Applications mobiles natives et PWA qui offrent des expériences exceptionnelles sur les appareils iOS et Android.",
                feature1: "React Native",
                feature2: "PWA",
                feature3: "App Store"
            }
        },
        technologies: {
            title: "Technologies de Pointe",
            subtitle: "Nous utilisons les outils les plus modernes et efficaces du marché pour créer des solutions web robustes et évolutives",
            more: "Et bien d'autres technologies..."
        },
        techCard: {
            title: "Technologie Avancée",
            description: "Nous utilisons les dernières technologies et frameworks pour créer des solutions web robustes et évolutives."
        },
        projects: {
            title: "Nos",
            titleHighlight: "Projets",
            subtitle: "Explorez certains de nos travaux les plus remarquables qui démontrent notre expertise en développement web",
            viewProject: "Voir le Projet",
            liveDemo: "Démo en Direct",
            ecommerce: {
                title: "E-commerce Moderne",
                subtitle: "Boutique en ligne complète",
                description: "Plateforme e-commerce avec design moderne, système de paiement intégré et panneau d'administration complet."
            },
            dashboard: {
                title: "Tableau de Bord d'Entreprise",
                subtitle: "Panneau de contrôle avancé",
                description: "Tableau de bord interactif pour la gestion d'entreprise avec analytics en temps réel et rapports automatisés."
            },
            mobileApp: {
                title: "Application Mobile Innovante",
                subtitle: "Application multiplateforme",
                description: "Application mobile avec fonctionnalités avancées, synchronisation cloud et expérience utilisateur exceptionnelle."
            }
        },
        testimonials: {
            title: "Témoignages",
            titleHighlight: "Clients",
            subtitle: "Ce que nos clients disent de travailler avec WavDevelop",
            reviews: [
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
            ]
        },
        news: {
            title: "Dernières Nouvelles",
            titleHighlight: "Technologiques",
            subtitle: "Restez à jour avec les dernières tendances et nouvelles du monde du développement web",
            readMore: "Lire Plus",
            author: "Par",
            minutes: "min de lecture"
        },
        contact: {
            title: "Contactez-nous",
            subtitle: "Vous avez un projet en tête? Nous aimerions entendre parler de votre idée et vous aider à la concrétiser",
            formTitle: "Envoyez-nous un message",
            name: "Nom",
            email: "Email",
            subject: "Sujet",
            message: "Message",
            send: "Envoyer le Message",
            placeholders: {
                name: "Votre nom",
                email: "votre@email.com",
                message: "Parlez-nous de votre projet"
            },
            info: {
                title: "Informations de Contact",
                email: "Email",
                phone: "Téléphone",
                address: "Adresse",
                hours: "Heures d'Ouverture"
            }
        },
        footer: {
            description: "Nous créons des expériences numériques extraordinaires qui stimulent la croissance de votre entreprise.",
            quickLinks: "Liens Rapides",
            services: "Services",
            contact: "Contact",
            followUs: "Suivez-nous",
            rights: "Tous droits réservés.",
            privacy: "Politique de Confidentialité",
            terms: "Conditions de Service",
            subscribe: "S'abonner",
            subscribeText: "Recevez les dernières nouvelles et mises à jour de WavDevelop.",
            subscribeButton: "S'abonner",
            emailPlaceholder: "Votre adresse email"
        }
    },
    pt: {
        nav: {
            home: "Início",
            services: "Serviços",
            technologies: "Tecnologias",
            projects: "Projetos",
            contact: "Contato",
            quote: "Solicitar Orçamento"
        },
        hero: {
            title: "Desenvolvimento Web",
            subtitle: "Inovador",
            description: "Na **WavDevelop** criamos experiências digitais extraordinárias com as tecnologias mais avançadas. Transformamos ideias em soluções web profissionais que impulsionam seu negócio para o futuro.",
            startProject: "Iniciar Projeto",
            viewPortfolio: "Ver Portfólio",
            stats: {
                projects: "Projetos",
                satisfaction: "Satisfação",
                support: "Suporte"
            }
        },
        services: {
            title: "Nossos",
            titleHighlight: "Serviços",
            subtitle: "Oferecemos soluções web completas e personalizadas que se adaptam perfeitamente às necessidades do seu negócio",
            webDev: {
                title: "Desenvolvimento Web Corporativo",
                description: "Sites profissionais que refletem a identidade da sua empresa com design moderno e funcionalidade excepcional.",
                feature1: "Design responsivo",
                feature2: "Otimização SEO",
                feature3: "CMS personalizado"
            },
            ecommerce: {
                title: "E-commerce Avançado",
                description: "Lojas online completas com sistemas de pagamento seguros, gestão de inventário e experiência de compra otimizada.",
                feature1: "Pagamentos seguros",
                feature2: "Gestão de produtos",
                feature3: "Analytics integrado"
            },
            webApp: {
                title: "Aplicações Web",
                description: "Aplicações web personalizadas com tecnologias modernas para automatizar processos e melhorar a produtividade.",
                feature1: "React & Next.js",
                feature2: "APIs REST",
                feature3: "Base de dados"
            },
            security: {
                title: "Segurança & Hospedagem",
                description: "Serviços de hospedagem segura, certificados SSL, backups automáticos e monitoramento 24/7 para máxima confiabilidade.",
                feature1: "SSL gratuito",
                feature2: "Backups diários",
                feature3: "Suporte 24/7"
            },
            consulting: {
                title: "Consultoria Digital",
                description: "Assessoria estratégica para otimizar sua presença digital, melhorar conversões e maximizar o ROI do seu investimento.",
                feature1: "Auditoria web",
                feature2: "Estratégia digital",
                feature3: "Otimização UX"
            },
            mobile: {
                title: "Desenvolvimento Móvel",
                description: "Aplicações móveis nativas e PWAs que oferecem experiências excepcionais em dispositivos iOS e Android.",
                feature1: "React Native",
                feature2: "PWA",
                feature3: "App Store"
            }
        },
        technologies: {
            title: "Tecnologias de Vanguarda",
            subtitle: "Utilizamos as ferramentas mais modernas e eficientes do mercado para criar soluções web robustas e escaláveis",
            more: "E muitas outras tecnologias..."
        },
        techCard: {
            title: "Tecnologia Avançada",
            description: "Utilizamos as mais recentes tecnologias e frameworks para criar soluções web robustas e escaláveis."
        },
        projects: {
            title: "Nossos",
            titleHighlight: "Projetos",
            subtitle: "Explore alguns dos nossos trabalhos mais destacados que demonstram nossa experiência em desenvolvimento web",
            viewProject: "Ver Projeto",
            liveDemo: "Demo ao Vivo",
            ecommerce: {
                title: "E-commerce Moderno",
                subtitle: "Loja online completa",
                description: "Plataforma de e-commerce com design moderno, sistema de pagamentos integrado e painel de administração completo."
            },
            dashboard: {
                title: "Dashboard Corporativo",
                subtitle: "Painel de controle avançado",
                description: "Dashboard interativo para gestão empresarial com analytics em tempo real e relatórios automatizados."
            },
            mobileApp: {
                title: "App Móvel Inovador",
                subtitle: "Aplicação multiplataforma",
                description: "Aplicação móvel com funcionalidades avançadas, sincronização na nuvem e experiência de usuário excepcional."
            }
        },
        testimonials: {
            title: "Depoimentos de",
            titleHighlight: "Clientes",
            subtitle: "O que nossos clientes dizem sobre trabalhar com a WavDevelop",
            reviews: [
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
        },
        news: {
            title: "Últimas Notícias de",
            titleHighlight: "Tecnologia",
            subtitle: "Mantenha-se atualizado com as últimas tendências e novidades do mundo do desenvolvimento web",
            readMore: "Ler Mais",
            author: "Por",
            minutes: "min de leitura"
        },
        contact: {
            title: "Entre em Contato",
            subtitle: "Tem um projeto em mente? Adoraríamos ouvir sobre sua ideia e ajudá-lo a torná-la realidade",
            formTitle: "Envie-nos uma mensagem",
            name: "Nome",
            email: "Email",
            subject: "Assunto",
            message: "Mensagem",
            send: "Enviar Mensagem",
            placeholders: {
                name: "Seu nome",
                email: "seu@email.com",
                message: "Conte-nos sobre seu projeto"
            },
            info: {
                title: "Informações de Contato",
                email: "Email",
                phone: "Telefone",
                address: "Endereço",
                hours: "Horário de Atendimento"
            }
        },
        footer: {
            description: "Criamos experiências digitais extraordinárias que impulsionam o crescimento do seu negócio.",
            quickLinks: "Links Rápidos",
            services: "Serviços",
            contact: "Contato",
            followUs: "Siga-nos",
            rights: "Todos os direitos reservados.",
            privacy: "Política de Privacidade",
            terms: "Termos de Serviço",
            subscribe: "Inscrever-se",
            subscribeText: "Receba as últimas notícias e atualizações da WavDevelop.",
            subscribeButton: "Inscrever-se",
            emailPlaceholder: "Seu endereço de email"
        }
    }
};

let currentLanguage = 'es';

function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.languages[0];
    const shortLang = browserLang.substring(0, 2);
    
    if (TRANSLATIONS[shortLang]) {
        return shortLang;
    }
    
    return 'es';
}

function getTranslation(key, lang = currentLanguage) {
    const keys = key.split('.');
    let translation = TRANSLATIONS[lang];
    
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            return key; 
        }
    }
    
    return translation;
}

function updateContent(language = currentLanguage) {
    console.log('🔄 Updating content to:', language);
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('📍 Found elements with data-i18n:', elements.length);
    
    elements.forEach((element, index) => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, language);
        console.log(`Element ${index}: ${key} = ${translation}`);
        
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            }
            else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            }
            else {
                element.textContent = translation;
            }
        }
    });

    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    console.log('📍 Found placeholder elements:', placeholderElements.length);
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key, language);
        
        if (translation) {
            element.placeholder = translation;
        }
    });

    const selector = document.getElementById('language-selector');
    const mobileSelector = document.getElementById('language-selector-mobile');
    if (selector) {
        selector.value = language;
        console.log('✅ Desktop selector updated');
    }
    if (mobileSelector) {
        mobileSelector.value = language;
        console.log('✅ Mobile selector updated');
    }

    if (window.updateTestimonials) {
        window.updateTestimonials();
    }

    if (window.restartTestimonials) {
        window.restartTestimonials();
    }

    updateMetaTags(language);
    console.log('✅ Content update complete');
}

function updateMetaTags(language) {
    const titles = {
        es: 'WavDevelop - Desarrollo Web Innovador',
        en: 'WavDevelop - Innovative Web Development',
        fr: 'WavDevelop - Développement Web Innovant',
        pt: 'WavDevelop - Desenvolvimento Web Inovador'
    };
    
    document.title = titles[language] || titles.es;
    document.documentElement.lang = language;
}

function changeLanguage(newLanguage) {
    if (!TRANSLATIONS[newLanguage]) {
        return;
    }
    
    currentLanguage = newLanguage;
    localStorage.setItem('selectedLanguage', newLanguage);
    
    updateContent(newLanguage);
    showNotification(newLanguage);
}

function showNotification(language) {
    const messages = {
        es: `${SUPPORTED_LANGUAGES[language].flag} Idioma cambiado a ${SUPPORTED_LANGUAGES[language].name}`,
        en: `${SUPPORTED_LANGUAGES[language].flag} Language changed to ${SUPPORTED_LANGUAGES[language].name}`,
        fr: `${SUPPORTED_LANGUAGES[language].flag} Langue changée en ${SUPPORTED_LANGUAGES[language].name}`,
        pt: `${SUPPORTED_LANGUAGES[language].flag} Idioma alterado para ${SUPPORTED_LANGUAGES[language].name}`
    };
    
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-wave-blue text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full';
    notification.textContent = messages[language] || messages.es;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.remove('translate-x-full'), 100);
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Initialize language selector
const selector = document.getElementById('language-selector');
const mobileSelector = document.getElementById('language-selector-mobile');

function updateLanguageSelectors(lang) {
    if (selector) selector.value = lang;
    if (mobileSelector) mobileSelector.value = lang;
}

function initializeLanguageSelectors() {
    if (selector) {
        selector.addEventListener('change', (e) => {
            const lang = e.target.value;
            changeLanguage(lang);
            updateLanguageSelectors(lang);
        });
    }
    
    if (mobileSelector) {
        mobileSelector.addEventListener('change', (e) => {
            const lang = e.target.value;
            changeLanguage(lang);
            updateLanguageSelectors(lang);
        });
    }
}

function initI18n() {
    console.log('🚀 Initializing i18n system...');
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const detectedLanguage = detectBrowserLanguage();
    
    currentLanguage = savedLanguage || detectedLanguage;
    console.log('🌐 Current language:', currentLanguage);
    
    updateContent(currentLanguage);
    initializeLanguageSelectors();
    updateLanguageSelectors(currentLanguage);
    console.log('✅ i18n system initialized');
}

function testTranslation() {
    console.log('🧪 Testing translation system...');
    console.log('Available languages:', Object.keys(TRANSLATIONS));
    console.log('Current language:', currentLanguage);
    console.log('Test translation (nav.home):', getTranslation('nav.home', 'en'));
    updateContent('en');
}

// Initialize the translation system when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, initializing...');
    initI18n();
});

// Also try immediate initialization if DOM is already loaded
if (document.readyState === 'loading') {
    console.log('📄 DOM is loading...');
} else {
    console.log('📄 DOM already loaded, initializing immediately...');
    initI18n();
}

window.initI18n = initI18n;
window.changeLanguage = changeLanguage;
window.updateContent = updateContent;
window.getTranslation = getTranslation;
window.testTranslation = testTranslation;