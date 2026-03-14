

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particlesArray = [];

    const baseColor1 = 'rgba(14, 165, 233, 0.7)'; // Cyan
    const baseColor2 = 'rgba(244, 63, 94, 0.6)';  // Neon Pink
    const repulseRadius = 200; // Radius of mouse interaction

    let mouse = {
        x: undefined,
        y: undefined,
        vx: 0, // Velocity X
        vy: 0  // Velocity Y
    };

    let lastMouse = { x: undefined, y: undefined };

    window.addEventListener("mousemove", (event) => {
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        
        if(lastMouse.x !== undefined) {
             mouse.vx = mouse.x - lastMouse.x;
             mouse.vy = mouse.y - lastMouse.y;
        }
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = undefined;
        mouse.y = undefined;
        mouse.vx = 0;
        mouse.vy = 0;
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor(x, y, dx, dy, size, color, layer) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
            this.baseSize = size;
            this.color = color;
            this.layer = layer;
            
            this.speedMultiplier = layer === 0 ? 0.2 : (layer === 1 ? 0.6 : 1.2);
            this.reactivity = layer === 0 ? 0 : (layer === 1 ? 0.5 : 1);
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
            if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

            let targetX = this.x + (this.dx * this.speedMultiplier);
            let targetY = this.y + (this.dy * this.speedMultiplier);

            if (mouse.x !== undefined && mouse.y !== undefined && this.reactivity > 0) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < repulseRadius) {
                    let force = (repulseRadius - distance) / repulseRadius;
                    
                    let dirX = dx / distance;
                    let dirY = dy / distance;
                    
                    let dragX = mouse.vx * 0.1 * force;
                    let dragY = mouse.vy * 0.1 * force;

                    targetX -= (dirX * force * 5 * this.reactivity) - dragX;
                    targetY -= (dirY * force * 5 * this.reactivity) - dragY;
                    
                    this.size = this.baseSize + (force * 2);
                } else {
                    this.size = this.baseSize; // Reset size
                }
            } else {
                 this.size = this.baseSize;
            }

            this.x = targetX;
            this.y = targetY;
            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        const isMobile = window.innerWidth < 768;
        let numberOfParticles = (canvas.height * canvas.width) / (isMobile ? 18000 : 6000);
        
        for (let i = 0; i < numberOfParticles; i++) {
            let rand = Math.random();
            let layer = rand > 0.8 ? 2 : (rand > 0.4 ? 1 : 0);
            
            let size = layer === 0 ? 1 : (layer === 1 ? 1.5 : 2.5);
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let dx = (Math.random() * 0.5) - 0.25;
            let dy = (Math.random() * 0.5) - 0.25;
            
            let color;
            if(layer === 0) color = 'rgba(255,255,255,0.1)';
            else if(layer === 2) color = Math.random() > 0.5 ? baseColor1 : baseColor2;
            else color = Math.random() > 0.5 ? 'rgba(14, 165, 233, 0.3)' : 'rgba(244, 63, 94, 0.2)';

            particlesArray.push(new Particle(x, y, dx, dy, size, color, layer));
        }
    }

    function connect() {
        let maxDistance = 120; // Maximum line length
        for (let a = 0; a < particlesArray.length; a++) {
            if (particlesArray[a].layer === 0) continue; 

            for (let b = a; b < particlesArray.length; b++) {
                if (particlesArray[b].layer === 0) continue;

                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    let opacity = 1 - (distance / maxDistance);
                    
                    let mdx = mouse.x - particlesArray[a].x;
                    let mdy = mouse.y - particlesArray[a].y;
                    let mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mDist < repulseRadius && mouse.x !== undefined) {
                        opacity += 0.3; // Boost brightness
                    }

                    opacity = Math.min(opacity * 0.4, 0.8); // Cap opacity so it doesn't get completely solid
                    
                    ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
                    ctx.lineWidth = particlesArray[a].layer === 2 ? 1 : 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        
        mouse.vx *= 0.9;
        mouse.vy *= 0.9;

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        
        connect(); // Draw the network mesh lines
    }

    initParticles();
    animateParticles();
});

