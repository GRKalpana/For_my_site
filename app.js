/**
 * GK FASHION WORLD & KALPANA MAKEUP ARTIST
 * Apple-Inspired Mobile-First Interactive Application Logic
 * Powered by Swiper.js & Modern Browser APIs
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSwiper();
  initReelsSwiper();
  initSegmentedControl();
  initSareePreview();
  initModelSwipers();
  initAccordion();
  initModals();
  initMobileDrawer();
});

/* ==========================================================================
   1. Hero Swiper (Apple-Style Fluid Card Slider)
   ========================================================================== */
function initHeroSwiper() {
  if (typeof Swiper === 'undefined') return;

  new Swiper('.heroSwiper', {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.hero-swiper-pagination',
      clickable: true,
    },
    effect: 'slide',
    touchRatio: 1.2,
    resistanceRatio: 0.85,
    grabCursor: true,
  });
}

/* ==========================================================================
   2. Reels Swiper (Mobile Touch Feed with Guaranteed Video Autoplay)
   ========================================================================== */
function initReelsSwiper() {
  if (typeof Swiper === 'undefined') return;

  new Swiper('.reelsSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: false,
    grabCursor: true,
    touchRatio: 1.2,
    resistanceRatio: 0.85,
    pagination: {
      el: '.reels-swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      }
    }
  });

  // Autoplay and sound management for all reel video players
  const videoCards = document.querySelectorAll('.reel-mobile-card');
  
  videoCards.forEach(card => {
    const video = card.querySelector('.reel-video-player');
    const soundBtn = card.querySelector('.reel-sound-toggle');
    const soundIcon = soundBtn ? soundBtn.querySelector('.sound-icon') : null;

    if (!video) return;

    // Ensure muted for strict mobile browser autoplay policy
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented by browser policy until interaction
        });
      }
    };

    // Attempt autoplay immediately
    tryPlay();

    // Toggle mute/unmute
    if (soundBtn) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        if (soundIcon) {
          soundIcon.textContent = video.muted ? '🔇' : '🔊';
        }
        if (video.paused) {
          tryPlay();
        }
      });
    }

    // Tap on card to toggle play/pause
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on links or sound button
      if (e.target.closest('a') || e.target.closest('.reel-sound-toggle')) return;

      if (video.paused) {
        tryPlay();
      } else {
        video.pause();
      }
    });
  });

  // IntersectionObserver to auto-play when scrolled into view
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target.querySelector('.reel-video-player');
        if (!vid) return;
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      });
    }, { threshold: 0.3 });

    videoCards.forEach(card => videoObserver.observe(card));
  }
}

/* ==========================================================================
   3. iOS Segmented Control (Smooth Service Switcher)
   ========================================================================== */
function initSegmentedControl() {
  const segButtons = document.querySelectorAll('.seg-btn');
  const sections = {
    saree: document.getElementById('saree-pleating'),
    makeup: document.getElementById('bridal-makeup'),
    aari: document.getElementById('aari-work'),
  };

  segButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      segButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');
      if (target === 'all') {
        window.scrollTo({ top: document.getElementById('hero').offsetTop - 60, behavior: 'smooth' });
      } else if (sections[target]) {
        sections[target].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ==========================================================================
   4. Saree Pre-Pleating Interactive Stage Switcher
   ========================================================================== */
function initSareePreview() {
  const mainImg = document.getElementById('saree-active-img');
  const label = document.getElementById('saree-fold-label');
  const thumbs = document.querySelectorAll('.saree-step-thumb');

  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const newSrc = thumb.getAttribute('data-src');
      const newLabel = thumb.getAttribute('data-label');

      mainImg.style.opacity = '0.5';
      mainImg.style.transform = 'scale(0.98)';
      setTimeout(() => {
        mainImg.src = newSrc;
        if (label) label.textContent = newLabel;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      }, 150);
    });
  });
}


/* ==========================================================================
   6. Dedicated Apple-Style Model Swipers (One for Every Model)
   ========================================================================== */
function initModelSwipers() {
  if (typeof Swiper === 'undefined') return;

  const modelConfigs = [
    { selector: '.modelSwiper-wine', pag: '.model-wine-pagination' },
    { selector: '.modelSwiper-yellow', pag: '.model-yellow-pagination' },
    { selector: '.modelSwiper-jada', pag: '.model-jada-pagination' }
  ];

  modelConfigs.forEach(cfg => {
    const el = document.querySelector(cfg.selector);
    if (!el) return;
    new Swiper(cfg.selector, {
      loop: true,
      speed: 600,
      touchRatio: 1.2,
      grabCursor: true,
      resistanceRatio: 0.85,
      pagination: {
        el: cfg.pag,
        clickable: true,
      },
    });
  });

  // Model Filter Tab Bar (All Models / Individual Model)
  const mtabBtns = document.querySelectorAll('.mtab-btn');
  const modelCards = document.querySelectorAll('.model-showcase-card');

  mtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mtabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-model');
      modelCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-model-card') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. Apple Clean FAQ Accordion
   ========================================================================== */
function initAccordion() {
  const accItems = document.querySelectorAll('.acc-item');

  accItems.forEach(item => {
    const header = item.querySelector('.acc-header');
    const body = item.querySelector('.acc-body');

    if (!header || !body) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      accItems.forEach(other => {
        other.classList.remove('open');
        const otherBody = other.querySelector('.acc-body');
        if (otherBody) otherBody.style.maxHeight = null;
        const otherHeader = other.querySelector('.acc-header');
        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   8. Modals & Lightbox (iOS Bottom Sheet Experience)
   ========================================================================== */
function initModals() {
  // Catalog Modal
  const catalogModal = document.getElementById('catalog-modal');
  const catalogScrim = document.getElementById('catalog-scrim');
  const closeCatalogBtn = document.getElementById('close-catalog-modal');
  const openCatalogBtns = [
    document.getElementById('open-catalog-btn'),
    document.getElementById('dock-catalog-btn'),
    document.getElementById('story-price-trigger'),
    document.getElementById('banner-catalog-zoom'),
  ];

  function openCatalog() {
    if (!catalogModal) return;
    catalogModal.classList.add('open');
    catalogModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCatalog() {
    if (!catalogModal) return;
    catalogModal.classList.remove('open');
    catalogModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openCatalogBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', openCatalog);
  });
  if (closeCatalogBtn) closeCatalogBtn.addEventListener('click', closeCatalog);
  if (catalogScrim) catalogScrim.addEventListener('click', closeCatalog);

  // Lightbox Modal
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxScrim = document.getElementById('lightbox-scrim');
  const closeLightboxBtn = document.getElementById('close-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  const zoomTiles = document.querySelectorAll('[data-zoom]');

  function openLightbox(src, title) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.innerHTML = title || '';
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  zoomTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const src = tile.getAttribute('data-zoom');
      const title = tile.getAttribute('data-title');
      openLightbox(src, title);
    });
  });

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (lightboxScrim) lightboxScrim.addEventListener('click', closeLightbox);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCatalog();
      closeLightbox();
    }
  });
}

/* ==========================================================================
   9. Mobile Slide Drawer Navigation
   ========================================================================== */
function initMobileDrawer() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('close-drawer-btn');
  const links = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  links.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}
