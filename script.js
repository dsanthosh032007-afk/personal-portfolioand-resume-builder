/**
 * Santhosh D. - Developer Portfolio Client Logic
 * Modern Vanilla JavaScript &bull; Interactive Canvas Particles, Scroll Spy & Modal Management
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Project Architecture Database (for Modal Overviews)
  // ==========================================================================
  const PROJECT_DETAILS = {
    omnix: {
      title: 'OMNIX — Personal AI Assistant',
      icon: '🤖',
      category: 'Artificial Intelligence &amp; Desktop Automation',
      description: 'An intelligent conversational assistant designed to bridge natural language processing with operating system task execution. OMNIX listens for spoken or typed commands, processes user intent, and performs actions including web inquiries, media control, application launches, and contextual knowledge queries.',
      features: [
        'Voice & Text Bidirectional Interface: Uses speech recognition APIs for speech-to-text and lightweight synthesized vocal feedback.',
        'Modular Action Architecture: Skill dispatch engine allows adding new routines (weather, calculations, system diagnostics) with minimal code.',
        'Knowledge & Web Queries: Automates Wikipedia, Google search, and WolframAlpha knowledge lookups with concise summarized answers.',
        'System Task Automation: Native controls to launch applications, adjust volume, lock the workstation, or check hardware metrics.'
      ],
      techStack: ['Python', 'SpeechRecognition', 'Pyttsx3 / TTS', 'NLP Regex Intent Parser', 'Automation APIs'],
      githubUrl: 'https://github.com/dsanthosh032007-afk'
    },
    expense: {
      title: 'Smart Expense Tracker',
      icon: '📊',
      category: 'Web Utility &amp; Visual Analytics',
      description: 'A responsive, client-side personal finance manager built to provide students and professionals with clear visibility into their daily spending habits, category breakdowns, and monthly savings goals.',
      features: [
        'Dynamic Budget Health Gauge: Computes real-time percentage consumption against custom target budgets with color-coded warning alerts.',
        'Category Breakdown: Categorizes spending into Food, Academics, Travel, Utilities, and Entertainment with visual summaries.',
        'Persistent Local Storage: Auto-syncs transactions to browser HTML5 LocalStorage, ensuring zero latency and 100% offline privacy.',
        'Interactive Transaction Log: Search, filter by date or category, and delete transactions with instant balance recalculation.'
      ],
      techStack: ['JavaScript (ES6)', 'HTML5 Semantic Layout', 'Vanilla CSS3 Flex/Grid', 'HTML5 Web Storage'],
      githubUrl: 'https://github.com/dsanthosh032007-afk'
    },
    portfolio: {
      title: 'Personal Portfolio &amp; Resume Builder',
      icon: '💻',
      category: 'Frontend Engineering &amp; Design System',
      description: 'A bespoke personal portfolio showcasing engineering credentials, interactive project architectures, and a dedicated print-optimized PDF resume generation engine built without heavy third-party framework overhead.',
      features: [
        'Tailored Print Stylesheet (@media print): Converts the interactive dark-mode portfolio into a clean, executive monochrome 1-page PDF resume.',
        'Dynamic Canvas Particle Physics: High-performance HTML5 Canvas simulation of neural network nodes that connect and interact smoothly.',
        'Scroll-Spy & Reveal Engine: IntersectionObserver-based transitions highlighting active sections as the user scrolls.',
        'Zero-Dependency Lightweight Build: Pure HTML5, CSS3, and ES6 JavaScript loading in under 1 second with maximum lighthouse scores.'
      ],
      techStack: ['HTML5', 'Vanilla CSS3 Custom Properties', 'ES6 JavaScript Modules', 'HTML5 Canvas API'],
      githubUrl: 'https://github.com/dsanthosh032007-afk'
    }
  };

  // ==========================================================================
  // 2. Interactive Canvas Particle Background
  // ==========================================================================
  function initParticleCanvas() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];
    const particleCount = Math.min(width > 768 ? 60 : 30, 70);
    const maxDistance = 140;

    let mouse = {
      x: null,
      y: null,
      radius: 120
    };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Particle Object
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1;
        // Subtle purple / cyan color shades
        this.color = Math.random() > 0.5 ? 'rgba(139, 92, 246,' : 'rgba(6, 182, 212,';
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundary
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Gentle mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.fill();
      }
    }

    // Spawn Particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ==========================================================================
  // 3. Typewriter / Text Rotator Effect
  // ==========================================================================
  function initTextRotator() {
    const rotatorEl = document.getElementById('rotatorText');
    if (!rotatorEl) return;

    const phrases = [
      'AI Enthusiast',
      'Aspiring Software Developer',
      'Creative Problem Solver',
      'Tech & Innovation Explorer'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        rotatorEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        rotatorEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 110;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at full word
        isDeleting = true;
        typingSpeed = 1800;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }

  // ==========================================================================
  // 4. Navbar Scroll & Active Scroll Spy
  // ==========================================================================
  function initNavbarAndScrollSpy() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinksMenu = document.getElementById('navLinks');

    // Scrolled class on navbar
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Active Section Highlighter
      let currentSectionId = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    });

    // Mobile Hamburger Toggle
    if (hamburgerBtn && navLinksMenu) {
      hamburgerBtn.addEventListener('click', () => {
        const isOpen = navLinksMenu.classList.toggle('mobile-open');
        hamburgerBtn.classList.toggle('active', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
      });

      // Close menu when clicking link
      navLinksMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
          navLinksMenu.classList.remove('mobile-open');
          hamburgerBtn.classList.remove('active');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // ==========================================================================
  // 5. Scroll Reveal Effect (IntersectionObserver)
  // ==========================================================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  // ==========================================================================
  // 6. Resume Modal & Print PDF Workflow
  // ==========================================================================
  function initResumeModal() {
    const resumeModal = document.getElementById('resumeModal');
    const btnOpenResumeNav = document.getElementById('btnOpenResumeNav');
    const btnOpenResumeHero = document.getElementById('btnOpenResumeHero');
    const btnOpenResumeModal = document.getElementById('btnOpenResumeModal');
    const btnCloseResumeModal = document.getElementById('btnCloseResumeModal');
    const btnCloseResumeFooter = document.getElementById('btnCloseResumeFooter');
    const btnPrintResume = document.getElementById('btnPrintResume');
    const btnPrintResumeFooter = document.getElementById('btnPrintResumeFooter');

    function openResume() {
      if (!resumeModal) return;
      resumeModal.classList.add('is-open');
      resumeModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeResume() {
      if (!resumeModal) return;
      resumeModal.classList.remove('is-open');
      resumeModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function printResume() {
      // Triggers browser print dialog tailored by @media print for a clean 1-page PDF
      window.print();
    }

    if (btnOpenResumeNav) btnOpenResumeNav.addEventListener('click', openResume);
    if (btnOpenResumeHero) btnOpenResumeHero.addEventListener('click', openResume);
    if (btnOpenResumeModal) btnOpenResumeModal.addEventListener('click', openResume);

    if (btnCloseResumeModal) btnCloseResumeModal.addEventListener('click', closeResume);
    if (btnCloseResumeFooter) btnCloseResumeFooter.addEventListener('click', closeResume);

    if (btnPrintResume) btnPrintResume.addEventListener('click', printResume);
    if (btnPrintResumeFooter) btnPrintResumeFooter.addEventListener('click', printResume);

    if (resumeModal) {
      resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) closeResume();
      });
    }
  }

  // ==========================================================================
  // 7. Project Architecture Detail Modal
  // ==========================================================================
  function initProjectModal() {
    const projectModal = document.getElementById('projectModal');
    const projectModalTitle = document.getElementById('projectModalTitle');
    const projectModalIcon = document.getElementById('projectModalIcon');
    const projectModalBody = document.getElementById('projectModalBody');
    const projectModalGithubLink = document.getElementById('projectModalGithubLink');
    const btnCloseProjectModal = document.getElementById('btnCloseProjectModal');
    const btnCloseProjectFooter = document.getElementById('btnCloseProjectFooter');

    function openProjectModal(projectKey) {
      const data = PROJECT_DETAILS[projectKey];
      if (!data || !projectModal) return;

      projectModalIcon.innerHTML = data.icon;
      projectModalTitle.innerHTML = data.title;
      projectModalGithubLink.href = data.githubUrl;

      projectModalBody.innerHTML = `
        <div style="margin-bottom: 16px;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.775rem; color: #06b6d4; font-weight: 700; text-transform: uppercase;">
            ${data.category}
          </span>
          <p style="font-size: 0.95rem; color: #cbd5e1; margin-top: 8px; line-height: 1.65;">
            ${data.description}
          </p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 18px; margin-bottom: 18px;">
          <h4 style="font-size: 0.875rem; font-weight: 700; color: #ffffff; margin-bottom: 10px; font-family: 'Space Grotesk', sans-serif;">
            ⚡ Key Architecture &amp; Capabilities:
          </h4>
          <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem; color: #94a3b8; line-height: 1.5;">
            ${data.features.map((f) => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div>
          <h4 style="font-size: 0.8rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; font-family: 'JetBrains Mono', monospace;">
            Technologies Applied:
          </h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${data.techStack.map((tech) => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>
        </div>
      `;

      projectModal.classList.add('is-open');
      projectModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
      if (!projectModal) return;
      projectModal.classList.remove('is-open');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-project-detail');
      if (btn) {
        const projectKey = btn.getAttribute('data-project');
        openProjectModal(projectKey);
      }
    });

    if (btnCloseProjectModal) btnCloseProjectModal.addEventListener('click', closeProjectModal);
    if (btnCloseProjectFooter) btnCloseProjectFooter.addEventListener('click', closeProjectModal);

    if (projectModal) {
      projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeProjectModal();
      });
    }
  }

  // ==========================================================================
  // 8. Contact Form Handling
  // ==========================================================================
  function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const messageInput = document.getElementById('senderMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      // Name validation
      if (!name || name.length < 2) {
        nameError.style.display = 'block';
        nameInput.classList.add('has-error');
        isValid = false;
      } else {
        nameError.style.display = 'none';
        nameInput.classList.remove('has-error');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        emailError.style.display = 'block';
        emailInput.classList.add('has-error');
        isValid = false;
      } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('has-error');
      }

      // Message validation
      if (!message || message.length < 10) {
        messageError.style.display = 'block';
        messageInput.classList.add('has-error');
        isValid = false;
      } else {
        messageError.style.display = 'none';
        messageInput.classList.remove('has-error');
      }

      if (!isValid) return;

      // Realistic frontend feedback
      showToast(`Thank you, ${name}! Your message has been received.`, 'success');
      contactForm.reset();
    });
  }

  // ==========================================================================
  // 9. Toast Notification Helper
  // ==========================================================================
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(16px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // ==========================================================================
  // 10. Initialization
  // ==========================================================================
  function init() {
    // Current year in footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    // Setup features
    initParticleCanvas();
    initTextRotator();
    initNavbarAndScrollSpy();
    initScrollReveal();
    initResumeModal();
    initProjectModal();
    initContactForm();

    // Escape key to close any active modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const resumeModal = document.getElementById('resumeModal');
        const projectModal = document.getElementById('projectModal');

        if (resumeModal && resumeModal.classList.contains('is-open')) {
          resumeModal.classList.remove('is-open');
          document.body.style.overflow = '';
        }
        if (projectModal && projectModal.classList.contains('is-open')) {
          projectModal.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
