setTimeout(() => {
  // tiltie-cardsie.juhsee soooooooooooooooooooooooo eeeppppppppyyyyyyy
  document.querySelectorAll('.tilt-card').forEach(card => {
    let lastX = 0, lastY = 0;
  
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      if (lastX !== x || lastY !== y) {
        lastX = x;
        lastY = y;
  
        const xRotation = 20 * ((x - rect.width / 2) / rect.width);
        const yRotation = -20 * ((y - rect.height / 2) / rect.height);
        const rotation = `perspective(1000px) rotateX(${yRotation}deg) rotateY(${xRotation}deg)`;
        card.style.transform = rotation;
      }
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
  });
  
  }, 100);  

  const cardContainer = document.querySelector('.card-container');
  const cards = document.querySelectorAll('.card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentIndex = 0;
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });
  
  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove('active');
      if (index === currentIndex) {
        card.classList.add('active');
      }
    });
  
    const containerWidth = cardContainer.offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    const offset = -(currentIndex * (cardWidth + 300)) + (containerWidth - cardWidth) / 2;
    cardContainer.style.transform = `translateX(${offset}px)`;
  }
  
  updateCarousel();