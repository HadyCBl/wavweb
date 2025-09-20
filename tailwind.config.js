// Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'wave-blue': '#0ea5e9',
                'wave-blue-dark': '#0284c7',
                'wave-blue-light': '#38bdf8',
                'wave-purple': '#8b5cf6',
                'wave-green': '#10b981',
                'wave-orange': '#f59e0b',
                'wave-pink': '#ec4899',
                'gray-50': '#f9fafb',
                'gray-100': '#f3f4f6',
                'gray-900': '#111827'
            },
            animation: {
                'float-slow': 'floatSlow 8s ease-in-out infinite',
                'float-fast': 'floatFast 4s ease-in-out infinite',
                'rotate-slow': 'rotateSlow 20s linear infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                'slide-in-left': 'slideInLeft 1s ease-out',
                'slide-in-right': 'slideInRight 1s ease-out',
                'slide-in-up': 'slideInUp 1s ease-out',
                'fade-in-scale': 'fadeInScale 1s ease-out',
                'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
                'infiniteScroll': 'infiniteScroll 30s linear infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
                'hover-lift': 'hover-lift 0.3s ease'
            },
            keyframes: {
                floatSlow: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-30px) rotate(5deg)' }
                },
                floatFast: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-15px) rotate(-3deg)' }
                },
                rotateSlow: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.6)' }
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-100px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                },
                slideInRight: {
                    '0%': { transform: 'translateX(100px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                },
                slideInUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                fadeInScale: {
                    '0%': { transform: 'scale(0.8)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                bounceGentle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                infiniteScroll: {
                            '0%': { transform: 'translateX(0)' },
                            '100%': { transform: 'translateX(-50%)' }
                        },
                        'pulse-glow': {
                            '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
                            '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' }
                        },
                        'hover-lift': {
                            '0%': { transform: 'translateY(0)' },
                            '100%': { transform: 'translateY(-5px)' }
                        }
            }
        }
    }
}