/**
 * DURGA PRASAD KOYYA - PERSONAL PORTFOLIO INTERACTIVITY
 * Simple, robust, lightweight, and accessible vanilla JavaScript.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initScrollProgress();
  initBackToTop();
  initContactForm();
  initCopyToClipboard();
  initModals();
  initImageFallbacks();
});

/* --------------------------------------------------------------------------
   1. THEME TOGGLE (LIGHT / DARK)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('portfolio-theme');

  // Set initial theme
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
    updateThemeIcon(storedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  if (sunIcon && moonIcon) {
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
}

/* --------------------------------------------------------------------------
   2. NAVBAR & SCROLL BEHAVIOR
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. MOBILE NAVIGATION MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (!mobileToggle || !navLinks) return;

  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close when clicking any nav link
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  function openMobileMenu() {
    navLinks.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileToggle.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
  }

  function closeMobileMenu() {
    navLinks.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
  }
}

/* --------------------------------------------------------------------------
   4. SCROLL SPY FOR ACTIVE NAV LINKS
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   5. SCROLL PROGRESS BAR
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   6. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   7. CONTACT FORM VALIDATION & DIRECT EMAIL ACTION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const messageInput = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.form-error-msg').forEach(el => el.classList.remove('visible'));

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your name.');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please provide a valid email address.');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Please write a message (at least 10 characters).');
      isValid = false;
    }

    if (isValid) {
      const senderName = encodeURIComponent(nameInput.value.trim());
      const senderEmail = encodeURIComponent(emailInput.value.trim());
      const senderMsg = encodeURIComponent(messageInput.value.trim());
      
      const recipient = 'durgaprasadkoyya187@gmail.com';
      const subject = encodeURIComponent(`Portfolio Message from ${nameInput.value.trim()}`);
      const body = encodeURIComponent(`Hi Durga Prasad,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`);
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoUrl;

      showToast('Opening your email client to send message...');
      form.reset();
    }
  });

  function showError(inputEl, msg) {
    const errorEl = inputEl.parentElement.querySelector('.form-error-msg');
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add('visible');
    }
  }
}

/* --------------------------------------------------------------------------
   8. COPY TO CLIPBOARD UTILITY
   -------------------------------------------------------------------------- */
function initCopyToClipboard() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${textToCopy}`);
      });
    });
  });
}

/* --------------------------------------------------------------------------
   9. MODALS (PROJECT DETAILS & RESUME PREVIEW)
   -------------------------------------------------------------------------- */
function initModals() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const openModalBtns = document.querySelectorAll('[data-modal-target]');
  const closeModalBtns = document.querySelectorAll('.modal-close-btn');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-modal-target');
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  function closeAllModals() {
    modalOverlays.forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   10. IMAGE FALLBACKS
   -------------------------------------------------------------------------- */
function initImageFallbacks() {
  const profileImg = document.getElementById('profile-img');
  const avatarFallback = document.getElementById('avatar-fallback');

  if (profileImg) {
    profileImg.addEventListener('error', () => {
      profileImg.style.display = 'none';
      if (avatarFallback) {
        avatarFallback.style.display = 'flex';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   11. TOAST NOTIFICATION SYSTEM
   -------------------------------------------------------------------------- */
let toastTimeout;
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  let toast = container.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    container.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
