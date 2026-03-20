(function() {
    // 1. Prefix Finding Logic
    const findPrefix = () => {
        const scripts = document.getElementsByTagName('script');
        for (let s of scripts) {
            if (s.src.includes('headerfooter.js')) {
                const parts = s.getAttribute('src').split('assets/');
                return parts[0] || "";
            }
        }
        return "";
    };

    const initCursor = (prefix) => {
        if(window.amazingCursorInitialized) return;
        window.amazingCursorInitialized = true;
        
        const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
        if (!hasFinePointer) return;

        document.body.classList.add('cursor-enabled');
        const cursorDot = document.createElement('div');
        cursorDot.id = 'cursor-dot';
        const cursorCircleOuter = document.createElement('div');
        cursorCircleOuter.id = 'cursor-circle-outer';
        const cursorCircleInner = document.createElement('div');
        cursorCircleInner.id = 'cursor-circle-inner';
        cursorCircleOuter.appendChild(cursorCircleInner);
        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorCircleOuter);

        const savedPos = (() => {
            try { return sessionStorage.getItem('amazingCursorPos'); } catch (e) { return null; }
        })();

        let mouseX = 0, mouseY = 0, circleX = 0, circleY = 0, isVisible = false, firstMove = false;

        if (savedPos) {
            try {
                const pos = JSON.parse(savedPos);
                if (Number.isFinite(pos.x) && Number.isFinite(pos.y)) {
                    mouseX = pos.x; mouseY = pos.y; circleX = pos.x; circleY = pos.y;
                    firstMove = true;
                    cursorCircleOuter.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
                    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
                    document.body.classList.add('cursor-visible');
                    isVisible = true;
                }
            } catch (e) {}
        }

        function evaluateHoverState(target) {
            if (!target) return;
            const interactiveElement = target.closest('a, button, [onclick], input, select, textarea, .gallery-list-item');
            if (interactiveElement || window.getComputedStyle(target).cursor === 'pointer') {
                document.body.classList.add('cursor-hover');
            } else {
                document.body.classList.remove('cursor-hover');
            }
        }

        window.addEventListener('mousemove', (e) => {
            if (!firstMove) {
                mouseX = e.clientX; mouseY = e.clientY; circleX = e.clientX; circleY = e.clientY;
                firstMove = true;
                cursorCircleOuter.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
                evaluateHoverState(document.elementFromPoint(mouseX, mouseY));
            }
            if (!isVisible) { document.body.classList.add('cursor-visible'); isVisible = true; }
            mouseX = e.clientX; mouseY = e.clientY;
            try { sessionStorage.setItem('amazingCursorPos', JSON.stringify({ x: mouseX, y: mouseY })); } catch (e) {}
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        });

        const updateCircle = () => {
            if (isVisible && firstMove) {
                // Modified tracking to be less "smooth" (0.35 instead of 0.15)
                circleX += (mouseX - circleX) * 0.35;
                circleY += (mouseY - circleY) * 0.35;
                cursorCircleOuter.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
            }
            requestAnimationFrame(updateCircle);
        };
        requestAnimationFrame(updateCircle);

        document.body.addEventListener('mouseover', (e) => evaluateHoverState(e.target));
        document.body.addEventListener('mouseout', (e) => evaluateHoverState(e.relatedTarget));
        window.addEventListener('mousedown', () => document.body.classList.add('cursor-active'));
        window.addEventListener('mouseup', (e) => { document.body.classList.remove('cursor-active'); evaluateHoverState(e.target); });
        document.addEventListener('mouseleave', () => { document.body.classList.remove('cursor-visible'); isVisible = false; });
        document.addEventListener('mouseenter', () => { document.body.classList.add('cursor-visible'); isVisible = true; });
    };

    const inject = () => {
        const prefix = findPrefix();
        const headerHTML = `
        <div class="navbar">
          <div class="navbar-brand">
            <span class="brand-text">Aksaray Üniversitesi</span>
            <a href="${prefix}index.html">
              <img src="${prefix}assets/images/asuymt-logo.png" alt="ASÜ YMT Logo" />
            </a>
            <span class="brand-text">Yazılım Mühendisliği Topluluğu</span>
          </div>
          <ul class="nav-menu">
            <li><a href="${prefix}duyurular/index.html">Duyurular</a></li>
            <li><a href="${prefix}etkinlikler/index.html">Etkinlikler</a></li>
            <li><a href="${prefix}egitimler/index.html">Eğitimler</a></li>
            <li><a href="${prefix}yonetim-kadrosu/index.html">Yönetim Kadrosu</a></li>
            <li><a href="${prefix}projeler/index.html">Projeler</a></li>
            <li><a href="${prefix}projeler/roadmap/index.html">Yol Haritası</a></li>
            <li><a href="${prefix}galeri/index.html">Foto Galeri</a></li>
            <li><a href="${prefix}iletisim/index.html" class="nav-cta">İletişim</a></li>
          </ul>
        </div>`;

        const footerHTML = `
        <div class="footer">
          <div class="footlar">
            <div class="foot">
              <a href="${prefix}index.html"><img src="${prefix}assets/images/asuymt-logo.png" alt="ASÜ YMT Logo" /></a>
            </div>
            <div class="foot made-by">
              <h1>Yapımcılar</h1>
              <ul class="made-by-list">
                <li class="has-tooltip">
                  Emir Fetolmaz (%90)
                  <div class="tooltip-bubble">
                    <img src="${prefix}assets/images/emir-fetolmaz.jpg" alt="Emir Fetolmaz" loading="lazy" decoding="async">
                  </div>
                </li>
                <li class="has-tooltip">
                  Burak Arıkan (%4)
                  <div class="tooltip-bubble">
                    <img src="${prefix}assets/images/burak-arikan.jpg" alt="Burak Arıkan" loading="lazy" decoding="async">
                  </div>
                </li>
                <li class="has-tooltip">
                  Mehmet Akif Akkoç (%6)
                  <div class="tooltip-bubble">
                    <img src="${prefix}assets/images/mehmet-akif-akkoc.jpg" alt="Mehmet Akif Akkoç" loading="lazy" decoding="async">
                  </div>
                </li>
              </ul>
            </div>
            <div class="foot" id="iletisim">
              <h1>İletişim</h1>
              <a href="https://github.com/asuymt" title="GitHub" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>
              <a href="https://www.instagram.com/asuymt/" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i> Instagram</a>
            </div>
          </div>
          <p>© 2026 Tüm Hakları Saklıdır.</p>
        </div>`;

        const container = document.querySelector('.container');
        if (container) {
            const placeholder = document.querySelector('.navbar-placeholder');
            if (placeholder) placeholder.outerHTML = headerHTML;
            else if (!document.querySelector('.navbar')) container.insertAdjacentHTML('afterbegin', headerHTML);

            const existingFooter = document.querySelector('.footer');
            if (existingFooter) existingFooter.outerHTML = footerHTML;
            else container.insertAdjacentHTML('beforeend', footerHTML);
        }

        // --- Active Link Logic ---
        const currentPath = window.location.pathname;
        document.querySelectorAll(".nav-menu a").forEach(link => {
            const href = link.getAttribute("href");
            if (href && href !== "#" && ((currentPath.includes(href.replace(prefix, '')) && href !== prefix + "index.html") || (currentPath.endsWith('/') && href === prefix + "index.html"))) {
                link.classList.add("active");
            }
        });

        // --- Global Scroll Reveal ---
        const revealSelector = [
            '.section-header', '.showcase-header',
            'h1', '.glass-card', '.box-2',
            '.gallery-list-item', '.duyuru-card',
            '.etkinlik-card', '.egitim-card',
            '.proje-card', '.contact-form',
            '.timeline-item', '.roadmap-item',
            '.card-duyuru', '.subpage-glass-card',
            '.card-tilt', '.cardlar > *',
            '.search-section', '.results-section'
        ].join(', ');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                } else {
                    entry.target.classList.remove('revealed');
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

        function applyScrollReveal(root) {
            const targets = (root || document).querySelectorAll(revealSelector);
            targets.forEach(el => {
                if (el.closest('.navbar') || el.closest('.footer')) return;
                if (el.classList.contains('scroll-reveal')) return; // zaten uygulanmış
                el.classList.add('scroll-reveal');
                revealObserver.observe(el);
            });
        }

        // Şu anki elementlere uygula
        applyScrollReveal();

        // Sonradan eklenen elementleri de yakala (duyuru-motoru, etkinlik-motoru vb.)
        // DEBOUNCED: Prevents DOM thrashing on rapid mutations
        let mutationTimer = null;
        const domWatcher = new MutationObserver(() => {
            if (mutationTimer) clearTimeout(mutationTimer);
            mutationTimer = setTimeout(() => applyScrollReveal(), 300);
        });
        domWatcher.observe(document.body, { childList: true, subtree: true });

        initCursor(prefix);
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
    else inject();
})();

