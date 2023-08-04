import React, { useEffect } from 'react';

let mouseX = 0;
let mouseY = 0;

const CanvasBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const symbols = ['{', '}', '<', '>', '/', '//', '*', '()', '[]', ';;', '++', '--', '=='];

    class Particle {
      constructor(x, y, size, speed, color, text) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
        this.text = text;
      }

      draw() {
        context.font = `${this.size}px Arial`;
        context.fillStyle = this.color;
        context.fillText(this.text, this.x, this.y);
      }

      update() {
        this.x += this.speed.x;
        this.y += this.speed.y;

        if (this.size > 0.2) this.size -= 0.1;

        if (
          this.x < 0 || this.x > canvas.width ||
          this.y < 0 || this.y > canvas.height
        ) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 20 + 10;
        }

        this.checkMouseCollision();
        this.draw();
      }

      checkMouseCollision() {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 100;

        if (distance < maxDistance) {
          this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
        } else {
          this.color = '#FFFFFF';
        }
      }
    }

    const createParticle = () => {
      const xPos = Math.random() * canvas.width;
      const yPos = Math.random() * canvas.height;
      const size = Math.random() * 20 + 10;
      const speed = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      };
      const color = '#FFFFFF';
      const text = symbols[Math.floor(Math.random() * symbols.length)];

      particlesArray.push(new Particle(xPos, yPos, size, speed, color, text));
    };

    const animateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => particle.update());
      requestAnimationFrame(animateParticles);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    for (let i = 0; i < 200; i++) {
      createParticle();
    }

    animateParticles();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="particles-canvas" />;
};

export default CanvasBackground;
