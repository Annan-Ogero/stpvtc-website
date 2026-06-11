/* ============================================================
   ST. PAUL'S VICTORIOUS TRAINING COLLEGE
   Global JavaScript — nav, footer, shared utilities
   ============================================================ */

/* ── Nav HTML ── */
const NAV_HTML = `
<div class="highlight-strip">
  New intake open — <a href="pages/apply.html">Apply for the July 2025 cohort</a>
</div>
<nav class="navbar" id="mainNav" role="navigation" aria-label="Main navigation">
  <div class="navbar__inner">
    <a href="../index.html" class="navbar__brand" aria-label="St. Paul's Victorious Training College home">
      <img src="../images/badge.png" alt="ST. PVTC Badge" class="navbar__logo">
      <div class="navbar__brand-text">
        <span class="navbar__brand-name">St. Paul's Victorious TC</span>
        <span class="navbar__brand-tagline">Where Excellence is Nurtured</span>
      </div>
    </a>
    <ul class="navbar__links" role="list">
      <li><a href="../index.html">Home</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="student-work.html">Student Work</a></li>
      <li><a href="faculty.html">Faculty</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="navbar__cta">
      <a href="apply.html" class="btn btn-primary">Apply Now</a>
    </div>
    <button class="navbar__hamburger" id="menuToggle" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-nav" id="mobileNav" role="dialog" aria-label="Mobile navigation">
  <a href="../index.html">Home</a>
  <a href="courses.html">Courses</a>
  <a href="student-work.html">Student Work</a>
  <a href="faculty.html">Faculty</a>
  <a href="about.html">About</a>
  <a href="blog.html">Blog</a>
  <a href="contact.html">Contact</a>
  <a href="faq.html">FAQ</a>
  <a href="apply.html" class="btn btn-primary">Apply Now</a>
</div>`;

const NAV_HTML_ROOT = NAV_HTML
  .replace(/href="pages\//g, 'href="pages/')
  .replace(/href="\.\.\/index\.html"/g, 'href="index.html"')
  .replace(/src="\.\.\/images\//g, 'src="images/')
  .replace(/href="([a-z])/g, (m, p1) => m.includes('pages/') ? m : `href="pages/${p1}`);

/* ── Footer HTML ── */
const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="footer__logo-row">
          <img src="../images/badge.png" alt="ST. PVTC" class="footer__logo">
          <span class="footer__name">St. Paul's Victorious TC</span>
        </div>
        <p class="footer__tagline">A premier ICT and technology training centre in Kisumu, Kenya. Building the next generation of digital professionals — from computer basics to full-stack web development.</p>
        <div class="footer__social" aria-label="Social media links">
          <a href="https://www.facebook.com/profile.php?id=61589456675954" aria-label="Facebook" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://x.com/ogero9258" aria-label="Twitter / X" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.instagram.com/zygoatfans?igsh=d3U3ZDU4YzRhNmNx
" aria-label="Instagram" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://wa.me/message/4F25T6F3THPNM1

" aria-label="WhatsApp" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          </a>
          <a href="https://youtube.com/@annanogero?si=IOK8FFGETl2X4Be1
" aria-label="YouTube" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h3 class="footer__heading">Quick Links</h3>
        <ul class="footer__links">
          <li><a href="../index.html">Home</a></li>
          <li><a href="courses.html">All Courses</a></li>
          <li><a href="apply.html">Apply Now</a></li>
          <li><a href="student-work.html">Student Work</a></li>
          <li><a href="faculty.html">Faculty</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="faq.html">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__heading">Courses</h3>
        <ul class="footer__links">
          <li><a href="course-detail.html?course=ict-packages">ICT Packages</a></li>
          <li><a href="course-detail.html?course=frontend-dev">Frontend Web Dev</a></li>
          <li><a href="courses.html">Browse All</a></li>
        </ul>
        <h3 class="footer__heading" style="margin-top:28px">Resources</h3>
        <ul class="footer__links">
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="404.html">Sitemap</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__heading">Contact Us</h3>
        <div class="footer__contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>P.O Box 9516-40100, Kisumu, Kenya</span>
        </div>
        <div class="footer__contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.89-1.89a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>0708 599 134</span>
        </div>
        <div class="footer__contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span>st.paulvictoriousttc@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="container">
    <div class="footer__bottom">
      <span>© <span id="footerYear"></span> St. Paul's Victorious Training College. All rights reserved.</span>
      <span>Built with purpose in Kisumu, Kenya</span>
    </div>
  </div>
</footer>`;

/* ── Inject nav/footer ── */
function isRoot() {
  return !window.location.pathname.includes('/pages/');
}

function injectNav() {
  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;
  const html = isRoot() ? NAV_HTML_ROOT : NAV_HTML;
  placeholder.outerHTML = html;
  initNav();
}

function injectFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;
  let html = FOOTER_HTML;
  if (isRoot()) {
    html = html
      .replace(/href="\.\.\/index\.html"/g, 'href="index.html"')
      .replace(/src="\.\.\/images\//g, 'src="images/')
      .replace(/href="pages\//g, 'href="pages/');
  }
  placeholder.outerHTML = html;
  const yr = document.getElementById('footerYear');
  if (yr) yr.textContent = new Date().getFullYear();
}

/* ── Nav interactions ── */
function initNav() {
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Active link
  const links = document.querySelectorAll('.navbar__links a, .mobile-nav a');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });
}

/* ── Accordion ── */
function initAccordions() {
  document.querySelectorAll('.accordion__trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion__item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion__item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ── Toast ── */
function showToast(message, type = 'success') {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast${type === 'error' ? ' error' : ''}`;
  requestAnimationFrame(() => { toast.classList.add('show'); });
  setTimeout(() => { toast.classList.remove('show'); }, 4500);
}

/* ── Counter animation ── */
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ── Scroll reveal ── */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

/* ── Typewriter ── */
function initTypewriter(el, phrases, speed = 65, pause = 2200) {
  if (!el) return;
  let phraseIdx = 0, charIdx = 0, deleting = false;
  function tick() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = phrase.substring(0, ++charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, pause);
        return;
      }
    } else {
      el.textContent = phrase.substring(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? speed / 2 : speed);
  }
  tick();
}

/* ── EmailJS form helper ── */
function initEmailForm(formId, serviceId, templateId, successMsg) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    try {
      await emailjs.sendForm(serviceId, templateId, form);
      showToast(successMsg || 'Message sent successfully.');
      form.reset();
    } catch (err) {
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      btn.textContent = origText;
      btn.disabled = false;
    }
  });
}

/* ── DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
  initAccordions();
  animateCounters();
  initScrollReveal();
});
