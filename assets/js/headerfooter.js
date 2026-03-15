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
                    <img src="${prefix}assets/images/emir-fetolmaz.jpg" alt="Emir Fetolmaz">
                  </div>
                </li>
                <li class="has-tooltip">
                  Burak Arıkan (%4)
                  <div class="tooltip-bubble">
                    <img src="${prefix}assets/images/burak-arikan.jpg" alt="Burak Arıkan">
                  </div>
                </li>
                <li class="has-tooltip">
                  Mehmet Akif Akkoç (%6)
                  <div class="tooltip-bubble">
                    <img src="${prefix}assets/images/mehmet-akif-akkoc.jpg" alt="Mehmet Akif Akkoç">
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

        // --- Original Centered Styles ---
        const navStyle = document.createElement('style');
        navStyle.textContent = `
            .navbar {
                position: sticky;
                top: 1.5rem;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.8rem;
                padding: 1.2rem 3.2rem;
                width: max-content;
                max-width: 95%;
                margin: 0 auto;
                border-radius: 999px;
                background: linear-gradient(135deg, rgba(12, 16, 28, 0.75), rgba(10, 15, 25, 0.5));
                backdrop-filter: blur(18px) saturate(140%);
                -webkit-backdrop-filter: blur(18px) saturate(140%);
                border: 1px solid rgba(255, 255, 255, 0.12);
                box-shadow:
                    0 18px 40px rgba(0, 0, 0, 0.45),
                    0 0 0 1px rgba(255, 255, 255, 0.06) inset;
                transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
            }
            .navbar::before {
                content: "";
                position: absolute;
                inset: 1px;
                border-radius: inherit;
                background: linear-gradient(120deg, rgba(14, 165, 233, 0.12), rgba(255, 255, 255, 0.04), rgba(14, 165, 233, 0.12));
                opacity: 0.7;
                pointer-events: none;
                z-index: -1;
            }
            .navbar:hover {
                transform: translateY(-2px);
                box-shadow:
                    0 24px 60px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(14, 165, 233, 0.2) inset;
            }
            .navbar-brand {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                align-items: center;
                gap: 2.5rem;
                width: 100%;
            }
            .navbar-brand a {
                justify-self: center;
            }
            .navbar-brand .brand-text:first-child {
                justify-self: end;
                text-align: right;
            }
            .navbar-brand .brand-text:last-child {
                justify-self: start;
                text-align: left;
            }
            .navbar-brand img {
                width: 96px;
                height: auto;
                transition: transform 0.35s ease, filter 0.35s ease;
                filter: drop-shadow(0 8px 18px rgba(14, 165, 233, 0.35));
            }
            .navbar-brand img:hover {
                transform: translateY(-2px) scale(1.08);
                filter: drop-shadow(0 12px 24px rgba(14, 165, 233, 0.45));
            }
            .brand-text {
                font-family: 'Outfit', sans-serif;
                font-size: 1.45rem;
                font-weight: 800;
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 1.6px;
                pointer-events: none;
                white-space: nowrap;
                text-shadow: 0 0 24px rgba(14, 165, 233, 0.35);
            }
            .nav-menu {
                display: flex;
                gap: 0.35rem;
                list-style: none;
                align-items: center;
                justify-content: center;
            }
            .nav-menu a {
                color: rgba(255,255,255,0.8);
                text-decoration: none;
                font-weight: 700;
                font-size: 1.15rem;
                padding: 0.65rem 1.4rem;
                border-radius: 999px;
                position: relative;
                transition: color 0.2s ease, background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
            }
            .nav-menu a::after {
                content: "";
                position: absolute;
                left: 16%;
                right: 16%;
                bottom: 6px;
                height: 2px;
                border-radius: 999px;
                background: linear-gradient(90deg, rgba(14, 165, 233, 0), rgba(14, 165, 233, 0.8), rgba(14, 165, 233, 0));
                transform: scaleX(0);
                transform-origin: center;
                transition: transform 0.25s ease;
            }
            .nav-menu a:hover {
                color: #fff;
                background: rgba(14, 165, 233, 0.18);
                box-shadow: 0 8px 24px rgba(14, 165, 233, 0.18);
                transform: translateY(-1px);
            }
            .nav-menu a:hover::after {
                transform: scaleX(1);
            }
            .nav-menu a.active {
                color: #ffffff;
                background: rgba(14, 165, 233, 0.28);
                box-shadow: 0 10px 26px rgba(14, 165, 233, 0.25);
            }
            .nav-menu a.active::after {
                transform: scaleX(1);
            }
            @media (max-width: 1200px) {
                .brand-text { font-size: 1.1rem; gap: 1.5rem; }
                .navbar img { width: 80px; }
            }
            @media (max-width: 820px) {
                .brand-text { display: none; }
            }
        `;
        document.head.appendChild(navStyle);

        // --- Active Link Logic ---
        const currentPath = window.location.pathname;
        document.querySelectorAll(".nav-menu a").forEach(link => {
            const href = link.getAttribute("href");
            if (href && href !== "#" && ((currentPath.includes(href.replace(prefix, '')) && href !== prefix + "index.html") || (currentPath.endsWith('/') && href === prefix + "index.html"))) {
                link.classList.add("active");
            }
        });
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
    else inject();
})();
