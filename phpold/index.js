  function scrollGallery(direction) {
    const container = document.getElementById('galleryScroll');
    const scrollAmount = 300 * direction; // adjust for your card width
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  ScrollReveal().reveal('.sr-about-heading', {
    origin: 'left',
    distance: '50px',
    duration: 800,
    delay: 100,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.sr-about-text', {
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    delay: 200
  });

  ScrollReveal().reveal('.sr-goal-heading', {
    origin: 'top',
    distance: '20px',
    duration: 600,
    delay: 300
  });

  ScrollReveal().reveal('.sr-goal-item', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 400,
    interval: 150
  });

  ScrollReveal().reveal('.sr-about-image', {
    origin: 'right',
    distance: '60px',
    duration: 1000,
    delay: 300
  });

 AOS.init({
    once: true,           // Animate only once
    duration: 800,        // Animation duration in ms
    offset: 100,          // Trigger offset from viewport
    easing: 'ease-in-out' // Easing style
  });

  //WHAT WE DO SCROLL
  
  document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scrollableActivities");
  const scrollLeft = document.getElementById("scrollLeft");
  const scrollRight = document.getElementById("scrollRight");

  if (scrollContainer && scrollLeft && scrollRight) {
    scrollLeft.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    });

    scrollRight.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    });
  } else {
    console.error("Scroll elements not found. Check IDs and JS loading.");
  }
});

 window.addEventListener('scroll', function () {
    const bg = document.getElementById('volunteer-bg');
    const scrollY = window.scrollY;

    // Adjust 150 to any scroll offset for fade-in
    if (scrollY > 150) {
      bg.style.opacity = '1';
    } else {
      bg.style.opacity = '0';
    }
  });

  