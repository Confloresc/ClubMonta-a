/* =====================================
   CORDADA CHILLÁN - JAVASCRIPT PRINCIPAL
   ===================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // =====================================
  // AÑO DINÁMICO EN FOOTER
  // =====================================
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
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
  
  // Configuración del carousel de comunidad
  $('.community-carousel').owlCarousel({
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
    
    if (!isNaN(countTo)) {
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