/* =====================================
   CORDADA CHILLÁN - JAVASCRIPT PRINCIPAL
   ===================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // =====================================
  // AÑO DINÁMICO EN FOOTER
  // =====================================
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // =====================================
  // CAROUSEL DEL BANNER PRINCIPAL
  // =====================================
  const bannerSlides = document.querySelectorAll('.banner-slide');
  let currentBannerSlide = 0;
  
  console.log('Banner slides encontrados:', bannerSlides.length); // Debug
  
  function nextBannerSlide() {
    if (bannerSlides.length > 0) {
      bannerSlides[currentBannerSlide].classList.remove('active');
      currentBannerSlide = (currentBannerSlide + 1) % bannerSlides.length;
      bannerSlides[currentBannerSlide].classList.add('active');
      console.log('Cambiando a slide:', currentBannerSlide); // Debug
    }
  }
  
  // Cambiar imagen del banner cada 4 segundos
  if (bannerSlides.length > 1) {
    setInterval(nextBannerSlide, 4000);
  }
  
  // =====================================
  // CAROUSELS DE ACTIVIDADES
  // =====================================
  
  // Carousel de Charlas
  const charlasSlides = document.querySelectorAll('.charlas-carousel .activity-slide');
  let currentCharlasSlide = 0;
  
  function nextCharlasSlide() {
    charlasSlides[currentCharlasSlide].classList.remove('active');
    currentCharlasSlide = (currentCharlasSlide + 1) % charlasSlides.length;
    charlasSlides[currentCharlasSlide].classList.add('active');
  }
  
  // Carousel de Talleres
  const talleresSlides = document.querySelectorAll('.talleres-carousel .activity-slide');
  let currentTalleresSlide = 0;
  
  function nextTalleresSlide() {
    talleresSlides[currentTalleresSlide].classList.remove('active');
    currentTalleresSlide = (currentTalleresSlide + 1) % talleresSlides.length;
    talleresSlides[currentTalleresSlide].classList.add('active');
  }
  
  // Carousel de Excursiones
  const excursionesSlides = document.querySelectorAll('.excursiones-carousel .activity-slide');
  let currentExcursionesSlide = 0;
  
  function nextExcursionesSlide() {
    excursionesSlides[currentExcursionesSlide].classList.remove('active');
    currentExcursionesSlide = (currentExcursionesSlide + 1) % excursionesSlides.length;
    excursionesSlides[currentExcursionesSlide].classList.add('active');
  }
  
  // Iniciar carousels de actividades con diferentes intervalos para variedad
  setInterval(nextCharlasSlide, 3000);     // Cada 3 segundos
  setInterval(nextTalleresSlide, 3500);    // Cada 3.5 segundos
  setInterval(nextExcursionesSlide, 4000); // Cada 4 segundos
  
  // =====================================
  // NAVEGACIÓN ACTIVA EN SCROLL
  // =====================================
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // =====================================
  // SMOOTH SCROLL PARA ENLACES
  // =====================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // =====================================
  // ANIMACIONES EN SCROLL
  // =====================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
  
  // =====================================
  // NAVBAR TRANSPARENCIA EN SCROLL
  // =====================================
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255,255,255,0.98)';
    } else {
      navbar.style.background = 'rgba(255,255,255,0.95)';
    }
  });
  
});

// =====================================
// FUNCIÓN PARA ABRIR MODALS
// =====================================
function openModal(modalId) {
  const modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
}

// =====================================
// INICIALIZACIÓN OWL CAROUSEL (jQuery)
// =====================================
$(document).ready(function() {
  
  // Configuración del primer carousel de comunidad (imágenes 1-10)
  $('.community-carousel-1').owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    nav: false,
    dots: true,
    smartSpeed: 600,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  
  // Configuración del segundo carousel de comunidad (imágenes 11-20)
  $('.community-carousel-2').owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3500, // Diferente velocidad para variedad
    autoplayHoverPause: false,
    nav: false,
    dots: true,
    smartSpeed: 600,
    rtl: true, // Dirección opuesta para efecto visual
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  
  // =====================================
  // EFECTOS ADICIONALES
  // =====================================
  
  // Efecto hover en cards de actividades
  $('.activity-card').hover(
    function() {
      $(this).addClass('shadow-lg');
    },
    function() {
      $(this).removeClass('shadow-lg');
    }
  );
  
  // Animación de números en estadísticas
  $('.stat-number').each(function() {
    const $this = $(this);
    const countTo = $this.text();
    
    if (!isNaN(countTo) && countTo !== 'Club') {
      $({ countNum: 0 }).animate(
        { countNum: countTo },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(countTo);
          }
        }
      );
    }
  });
  
});