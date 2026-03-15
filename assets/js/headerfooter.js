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
                  Emir Fetolmaz
                  <div class="tooltip-bubble">
                    <img src="${prefix}assets/images/emir-fetolmaz.jpg" alt="Emir Fetolmaz">
                  </div>
                </li>
                <li class="has-tooltip">
                  Burak Arıkan
                  <div class="tooltip-bubble">
                    <img src="${prefix}assets/images/burak-arikan.jpg" alt="Burak Arıkan">
                  </div>
                </li>
                <li class="has-tooltip">
                  Mehmet Akif Akkoç
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

            if (!document.querySelector('.footer')) container.insertAdjacentHTML('beforeend', footerHTML);
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
                padding: 1.2rem 3rem;
                width: max-content;
                max-width: 95%;
                margin: 0 auto;
                border-radius: 40px;
                background: rgba(10, 15, 25, 0.7);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                transition: all 0.3s ease;
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
                width: 100px;
                height: auto;
                transition: transform 0.3s ease;
            }
            .navbar-brand img:hover {
                transform: scale(1.1);
            }
            .brand-text {
                font-family: 'Outfit', sans-serif;
                font-size: 1.5rem;
                font-weight: 800;
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 2px;
                pointer-events: none;
                white-space: nowrap;
                text-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
            }
            .nav-menu {
                display: flex;
                gap: 0.5rem;
                list-style: none;
                align-items: center;
                justify-content: center;
            }
            .nav-menu a {
                color: rgba(255,255,255,0.8);
                text-decoration: none;
                font-weight: 700;
                font-size: 1.2rem;
                padding: 0.6rem 1.4rem;
                border-radius: 100px;
                transition: all 0.2s ease;
            }
            .nav-menu a:hover, .nav-menu a.active {
                color: #fff;
                background: rgba(14, 165, 233, 0.2);
                box-shadow: 0 4px 15px rgba(14, 165, 233, 0.2);
            }
            .nav-menu a.active {
                color: var(--accent, #0ea5e9);
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
