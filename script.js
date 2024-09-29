document.getElementById('hugButton').addEventListener('click', () => {
    const hugMessage = document.getElementById('hugMessage');
    
    // Animate the button when clicked
    gsap.to('#hugButton', {
      duration: 0.5,
      scale: 1.2,
      ease: "bounce.out",
      onComplete: () => {
        gsap.to('#hugButton', { scale: 1, duration: 0.3 });
        
        // Animate the messages with fading effects
        const messages = [
          "You're the best!",
          "Sending virtual hugs!",
          "You're loved and appreciated!",
          "Everything will be okay 💖",
          "Smile, you deserve it!"
        ];
  
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Display the message
        hugMessage.textContent = randomMessage;
        hugMessage.classList.remove('hidden');
        gsap.fromTo(hugMessage, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  
        // Additional animation effects like floating hearts
        gsap.fromTo(
          '#hugMessage',
          { scale: 0.8 },
          { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.75)" }
        );
      }
    });
  });
  