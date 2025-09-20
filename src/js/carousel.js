document.addEventListener('DOMContentLoaded', function() {
    // Usar getElementById es más específico y rápido
    const track = document.getElementById('carousel-track');
    
    if (track) {
        // Guardar las cartas originales
        const originalCards = Array.from(track.querySelectorAll('.carousel-card'));
        
        if (originalCards.length === 0) {
            console.error('No se encontraron cartas con la clase .carousel-card');
            return;
        }

        // Calcular cuántas veces necesitamos duplicar para llenar el viewport
        const containerWidth = track.parentElement.offsetWidth;
        const cardWidth = originalCards[0].offsetWidth;
        const cardsNeeded = Math.ceil((containerWidth * 3) / cardWidth);
        const duplicatesNeeded = Math.ceil(cardsNeeded / originalCards.length);

        // Duplicar las cartas el número necesario de veces
        for (let i = 0; i < duplicatesNeeded; i++) {
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                // Eliminar IDs duplicados si existen
                clone.removeAttribute('id');
                track.appendChild(clone);
            });
        }
        
        // Iniciar animación después de duplicar
        requestAnimationFrame(() => {
            track.classList.add('ready');
        });
        
        // Pausar en hover
        const container = track.closest('.carousel-container');
        if (container) {
            container.addEventListener('mouseenter', () => {
                track.style.animationPlayState = 'paused';
            });
            
            container.addEventListener('mouseleave', () => {
                track.style.animationPlayState = 'running';
            });
        }
    }
});