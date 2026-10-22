/**
 * IFAM BÉNIN — ANIMATIONS AU SCROLL & EXPÉRIENCE DE VENTE DYNAMIQUE
 * Moteur d'animations fluide, réactif et haute performance
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. BARRE DE PROGRESSION AU SCROLL (READING PROGRESS)
  // --------------------------------------------------------------------------
  let progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.prepend(progressBar);
  }

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 2. COMPTEURS DE STATISTIQUES AU SCROLL
  // --------------------------------------------------------------------------
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (counterElements.length > 0) {
    const animateCounter = (el) => {
      if (el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';
      const target = parseFloat(el.getAttribute('data-counter-target'));
      const duration = 1600; // ms
      const startTime = performance.now();
      const prefix = el.getAttribute('data-counter-prefix') || '';
      const suffix = el.getAttribute('data-counter-suffix') || '';

      const updateCounter = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(ease * target);
        el.textContent = `${prefix}${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = `${prefix}${target}${suffix}`;
        }
      };
      requestAnimationFrame(updateCounter);
    };

    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.35 });

      counterElements.forEach(el => counterObserver.observe(el));
    } else {
      counterElements.forEach(el => animateCounter(el));
    }
  }

  // --------------------------------------------------------------------------
  // 3. ANIMATIONS GSAP & SCROLLTRIGGER
  // --------------------------------------------------------------------------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.hero-anim-item, .gsap-fade-up, .card-offre, .portal-card, .gallery-card, .pilier-card').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Dégradation gracieuse avec IntersectionObserver si GSAP n'est pas chargé
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.gsap-fade-up, .card-offre, .portal-card, .gallery-card, .pilier-card, .miniature-etudiant-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      revealObserver.observe(el);
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Animation Hero au chargement
  const heroElements = document.querySelectorAll('.hero-anim-item, .portal-grand-title, .portal-grand-desc, .portal-hero-actions, .portal-credentials-strip');
  if (heroElements.length > 0) {
    gsap.fromTo(
      heroElements,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.09,
        delay: 0.1
      }
    );
  }

  // Animation de la Navbar flottante au scroll
  const navPill = document.querySelector('.navbar-pill');
  if (navPill) {
    ScrollTrigger.create({
      start: 'top -40',
      onUpdate: (self) => {
        if (self.progress > 0) {
          navPill.classList.add('scrolled');
        } else {
          navPill.classList.remove('scrolled');
        }
      }
    });
  }

  // Animation des Cartes des Cursus (Portail d'accueil)
  const portalCards = document.querySelectorAll('.portal-card');
  if (portalCards.length > 0) {
    gsap.fromTo(
      portalCards,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.portal-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // Animation des Piliers d'excellence
  const pilierCards = document.querySelectorAll('.pilier-card');
  if (pilierCards.length > 0) {
    gsap.fromTo(
      pilierCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.piliers-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // Animation des Miniatures d'Ateliers
  const miniatures = document.querySelectorAll('.miniature-etudiant-item');
  if (miniatures.length > 0) {
    gsap.fromTo(
      miniatures,
      { opacity: 0, scale: 0.94 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.55,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.miniatures-etudiants-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // Animation des Cartes Profils
  const profilCards = document.querySelectorAll('.card-profil');
  if (profilCards.length > 0) {
    gsap.fromTo(
      profilCards,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.profils-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // Animation des Cartes de Compétences
  const competenceCards = document.querySelectorAll('.card-competence');
  if (competenceCards.length > 0) {
    gsap.fromTo(
      competenceCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.competences-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // Animation des Cartes d'Offres de prix
  const offreCards = document.querySelectorAll('.card-offre');
  if (offreCards.length > 0) {
    gsap.fromTo(
      offreCards,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.offres-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // Animation de la Galerie de Réalisations
  const galleryCards = document.querySelectorAll('.gallery-card');
  if (galleryCards.length > 0) {
    gsap.fromTo(
      galleryCards,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.gallery-editorial-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // Animation du Parcours d'Inscription en 3 étapes
  const stepCards = document.querySelectorAll('.step-card');
  if (stepCards.length > 0) {
    gsap.fromTo(
      stepCards,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.steps-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // Animation des En-têtes de section (.section-header)
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(header => {
    gsap.fromTo(
      header,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 88%'
        }
      }
    );
  });
});
