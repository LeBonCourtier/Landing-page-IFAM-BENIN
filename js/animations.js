/**
 * IFAM BÉNIN — ANIMATIONS CINÉMATOGRAPHIQUES GSAP 3 & SCROLLTRIGGER
 * Révélations élégantes, micro-interactions couture et accessibilité stricte
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. VÉRIFICATION ACCESSIBILITÉ PREFERS-REDUCED-MOTION
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.animate-on-scroll, .hero-anim-item').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // 2. VÉRIFICATION DISPONIBILITÉ GSAP
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Dégradation gracieuse : tout reste visible et accessible
    document.querySelectorAll('.animate-on-scroll, .hero-anim-item').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 3. ANIMATION DU PREMIER ÉCRAN (HERO PLAN D'OUVERTURE)
  const heroItems = document.querySelectorAll('.hero-anim-item');
  if (heroItems.length > 0) {
    gsap.fromTo(
      heroItems,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.15
      }
    );
  }

  // Photographie principale du Hero (Révélation douce avec très légère variation d'échelle)
  const heroImage = document.querySelector('.hero-image-frame img');
  if (heroImage) {
    gsap.fromTo(
      heroImage,
      { opacity: 0, scale: 1.04 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.25
      }
    );
  }

  // 4. NAVBAR ÎLE FLOTTANTE : TRANSITION AU SCROLL
  const navPill = document.querySelector('.navbar-pill');
  if (navPill) {
    ScrollTrigger.create({
      start: 'top -50',
      onUpdate: (self) => {
        if (self.progress > 0) {
          navPill.classList.add('scrolled');
        } else {
          navPill.classList.remove('scrolled');
        }
      }
    });
  }

  // 5. CARTES DE PROFILS (ENTRÉE DÉCALÉE)
  const profilCards = document.querySelectorAll('.card-profil');
  if (profilCards.length > 0) {
    gsap.fromTo(
      profilCards,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.profils-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // 6. CARTES DE COMPÉTENCES & TRACÉS SVG DÉCORATIFS
  const competenceCards = document.querySelectorAll('.card-competence');
  if (competenceCards.length > 0) {
    gsap.fromTo(
      competenceCards,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.competences-grid',
          start: 'top 82%'
        }
      }
    );
  }

  // 7. SECTION MANIFESTE (RÉVÉLATION ACCESSIBLE LIGNE PAR LIGNE)
  const manifesteSection = document.querySelector('.manifeste-section');
  if (manifesteSection) {
    gsap.fromTo(
      '.manifeste-hook',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: manifesteSection,
          start: 'top 80%'
        }
      }
    );
    gsap.fromTo(
      '.manifeste-text',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: manifesteSection,
          start: 'top 80%'
        }
      }
    );
  }

  // 8. GALERIE ÉDITORIALE (RÉVÉLATION PROGRESSIVE)
  const galleryCards = document.querySelectorAll('.gallery-card');
  if (galleryCards.length > 0) {
    gsap.fromTo(
      galleryCards,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.gallery-editorial-grid',
          start: 'top 85%'
        }
      }
    );
  }

  // 9. CARTES DES 3 OFFRES (ENTRÉE DÉCALÉE ÉLÉGANTE)
  const offreCards = document.querySelectorAll('.card-offre');
  if (offreCards.length > 0) {
    gsap.fromTo(
      offreCards,
      { opacity: 0, y: 30 },
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

  // 10. PARCOURS EN 3 ÉTAPES (PROGRESSION AU SCROLL)
  const stepCards = document.querySelectorAll('.step-card');
  if (stepCards.length > 0) {
    gsap.fromTo(
      stepCards,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.steps-grid',
          start: 'top 85%'
        }
      }
    );
  }
});
