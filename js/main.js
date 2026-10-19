/**
 * IFAM BÉNIN — LOGIQUE INTERACTIVE PRINCIPALE
 * Accordéons accessibles, Lightbox plein écran, Lecteur vidéo contrôlé au clic, Menu mobile
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. GESTION DES CARTES DE PROFILS DÉPLIABLES
  // --------------------------------------------------------------------------
  const profilHeaders = document.querySelectorAll('.card-profil-header');
  profilHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.card-profil');
      const isExpanded = card.classList.contains('open');

      // Basculer l'état
      card.classList.toggle('open');
      header.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // --------------------------------------------------------------------------
  // 2. ACCORDÉONS CAMPUS & FAQ
  // --------------------------------------------------------------------------
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('active');

      // Fermer les autres items du même groupe si désiré (ou laisser libre)
      const group = item.closest('.accordion-group');
      if (group) {
        group.querySelectorAll('.accordion-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.accordion-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      item.classList.toggle('active', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen);
    });
  });

  // --------------------------------------------------------------------------
  // 3. LIGHTBOX PLEIN ÉCRAN POUR LA GALERIE ÉDITORIALE
  // --------------------------------------------------------------------------
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    const openCardLightbox = (card) => {
      const img = card.querySelector('img');
      const title = card.querySelector('.gallery-item-title')?.textContent || img?.alt || 'Création d\'Atelier IFAM';
      const desc = card.querySelector('.gallery-item-sub')?.textContent || 'Réalisation présentée en soutenance officielle';

      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Création IFAM';
        if (lightboxCaption) {
          lightboxCaption.innerHTML = `<strong>${title}</strong> · ${desc}`;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    galleryCards.forEach(card => {
      card.addEventListener('click', () => openCardLightbox(card));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCardLightbox(card);
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. LECTEURS VIDÉO AUTHENTIQUES (LECTURE DÉCLENCHÉE STRICTEMENT AU CLIC)
  // --------------------------------------------------------------------------
  const videoWrappers = document.querySelectorAll('.video-player-wrapper');
  videoWrappers.forEach(wrapper => {
    const video = wrapper.querySelector('video');
    const overlay = wrapper.querySelector('.video-custom-overlay');
    if (!video || !overlay) return;

    const playVideo = () => {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      video.setAttribute('controls', 'true');
      video.play().catch(err => {
        console.warn('Lecture vidéo bloquée par le navigateur:', err);
      });
    };

    overlay.addEventListener('click', playVideo);
    overlay.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playVideo();
      }
    });

    video.addEventListener('pause', () => {
      if (video.currentTime === 0 || video.ended) {
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'auto';
      }
    });

    video.addEventListener('ended', () => {
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
    });
  });

  // --------------------------------------------------------------------------
  // 5. DÉPLIEMENT DE LA GALERIE COMPLÉMENTAIRE
  // --------------------------------------------------------------------------
  const galleryToggleBtn = document.getElementById('galleryToggleBtn');
  const galleryExtra = document.getElementById('galleryExtra');
  const galleryBtnLabel = document.getElementById('galleryBtnLabel');

  if (galleryToggleBtn && galleryExtra) {
    galleryToggleBtn.addEventListener('click', () => {
      const isHidden = galleryExtra.style.display === 'none' || getComputedStyle(galleryExtra).display === 'none';
      if (isHidden) {
        galleryExtra.style.display = 'grid';
        galleryExtra.setAttribute('aria-hidden', 'false');
        galleryToggleBtn.setAttribute('aria-expanded', 'true');
        if (galleryBtnLabel) galleryBtnLabel.textContent = 'Réduire la galerie ↑';
        if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          gsap.fromTo(
            '#galleryExtra .gallery-card',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out' }
          );
        }
      } else {
        galleryExtra.style.display = 'none';
        galleryExtra.setAttribute('aria-hidden', 'true');
        galleryToggleBtn.setAttribute('aria-expanded', 'false');
        if (galleryBtnLabel) galleryBtnLabel.textContent = 'Voir plus de réalisations ↓';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. NAVIGATION MOBILE COMPACTE
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Fermer le drawer lors d'un clic sur un lien
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
