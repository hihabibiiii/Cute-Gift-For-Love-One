        // Generate floating hearts and sparkles
        function generateFloatingElements() {
            const container = document.getElementById('hearts-container');
            const hearts = ['💕', '💗', '💖', '💝', '💓'];
            const sparkles = ['✨', '⭐', '🌟'];

            // Generate hearts
            for (let i = 0; i < 10; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 2 + 's';
                heart.style.animationDuration = (4 + Math.random() * 4) + 's';
                container.appendChild(heart);
            }

            // Generate sparkles
            for (let i = 0; i < 8; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 3 + 's';
                sparkle.style.animationDuration = (3 + Math.random() * 3) + 's';
                container.appendChild(sparkle);
            }
        }

        // Typewriter effect with loop
        function typewriterEffect() {
            const typewriterText = document.querySelector('.typewriter-text');
            const text = "Jab tum smile karti ho na, mera dil boom boom ho jata hai 💓\n\nTum meri favorite notification ho 📱\n\nTum ho to sab kuch perfect lagta hai 🤍";
            const span = document.querySelector('.typewriter-text span');
            
            let index = 0;

            function type() {
                if (index < text.length) {
                    const char = text[index];
                    if (char === '\n') {
                        span.textContent += '\n';
                    } else {
                        span.textContent += char;
                    }
                    index++;
                    // Slower typing speed: 70ms per character
                    setTimeout(type, 70);
                } else {
                    // Typed complete, wait then clear and restart
                    setTimeout(() => {
                        span.textContent = '';
                        index = 0;
                        setTimeout(type, 1000);
                    }, 2500);
                }
            }

            type();
        }

        // Smooth scroll to next section and start typewriter
        function scrollToNext() {
            document.getElementById('love-note').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                typewriterEffect();
            }, 800);
        }

        // Surprise animation
        function showSurprise() {
            const popup = document.getElementById('surprise-popup');
            const overlay = document.getElementById('overlay');

            popup.classList.remove('hidden');
            overlay.classList.add('show');

            // Heart rain effect
            createHeartRain();
        }

        function hideSurprise() {
            const popup = document.getElementById('surprise-popup');
            const overlay = document.getElementById('overlay');

            popup.classList.add('hidden');
            overlay.classList.remove('show');
        }

        function createHeartRain() {
            const hearts = ['💕', '💗', '💖', '💝', '💓', '❤️'];

            for (let i = 0; i < 30; i++) {
                const heart = document.createElement('div');
                heart.className = 'falling-heart';
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '-50px';
                heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
                heart.style.animationDuration = (2 + Math.random() * 2) + 's';
                heart.style.opacity = '1';

                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }
        }

        // Initialize on page load
        window.addEventListener('DOMContentLoaded', () => {
            generateFloatingElements();
            // Typewriter will only start when "Enter my heart" button is clicked
        });

        // Close popup on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                hideSurprise();
            }
        });

        // Play soft background music (optional - uncomment to use)
        // window.addEventListener('load', () => {
        //     const audio = new Audio('soft-lofi-music.mp3');
        //     audio.loop = true;
        //     audio.volume = 0.3;
        //     audio.play().catch(() => console.log('Audio autoplay blocked'));
        // });
