document.addEventListener("DOMContentLoaded", () => {
    // 1. Calculate Depth to Root
    const path = window.location.pathname;
    const isRoot = path.endsWith('/') || path.endsWith('index.html');
    
    // Reliable Depth Detection: Count how many steps we are from the root directory relative to assets/
    const findPrefix = () => {
        const scripts = document.getElementsByTagName('script');
        for (let s of scripts) {
            if (s.src.includes('headerfooter.js')) {
                // If src is "http://site.com/assets/js/headerfooter.js"
                // or "../../assets/js/headerfooter.js"
                const parts = s.getAttribute('src').split('assets/');
                return parts[0]; // This will be "", "../", or "../../"
            }
        }
        return "";
    };
    
    const prefix = findPrefix();

    // 2. Header HTML
    const headerHTML = `
    <div class="navbar">
      <div class="navbar-brand">
        <span class="brand-text">Aksaray Üniversitesi</span>
        <a href="${prefix}index.html"><img src="${prefix}assets/images/asuymt-logo.png" alt="Yazılım Mühendisliği Topluluğu" /></a>
        <span class="brand-text">Yazılım Mühendisliği Topluluğu</span>
      </div>
      <ul>
        <li><a href="${prefix}index.html#hakkimizda">Hakkımızda</a></li>
        <li><a href="${prefix}duyurular/">Duyurular</a></li>
        <li><a href="${prefix}etkinlikler/">Etkinlikler</a></li>
        <li><a href="${prefix}egitimler/">Eğitimler</a></li>
        <li><a href="${prefix}projeler/">Projeler</a></li>
        <li><a href="${prefix}iletisim/">İletişim</a></li>
        <li><a href="${prefix}galeri/">Foto Galeri</a></li>
        <li><a href="${prefix}asu-topluluklar/">ASÜ Toplulukları</a></li>
      </ul>
    </div>`;

    // 3. Footer HTML
    const footerHTML = `
    <div class="footer">
      <div class="footlar">
        <div class="foot">
          <a href="${prefix}index.html"><img src="${prefix}assets/images/asuymt-logo.png" alt="ASÜ YMT Logo" /></a>
        </div>
        <div class="foot made-by">
          <h1>Made By</h1>
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

    // 4. Injection Logic
    // Inject Header
    const container = document.querySelector('.container');
    if (container) {
        // If Navbar already exists, remove it or don't inject
        const existingNav = document.querySelector('.navbar');
        if (existingNav) existingNav.remove();
        
        container.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Inject Footer
    const existingFooter = document.querySelector('.footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else if (container) {
        container.insertAdjacentHTML('beforeend', footerHTML);
    }

    // 5. Active Link Highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll(".navbar ul li a").forEach(link => {
        const href = link.getAttribute("href");
        // Simple match: if href is not root and contained in path, or exact match for index
        if (href !== prefix && href !== prefix + "index.html" && currentPath.includes(href.replace(prefix, ''))) {
            link.classList.add("active");
        } else if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && (href === prefix || href === prefix + "index.html")) {
            // Root match
            if (!currentPath.includes('/duyurular/') && !currentPath.includes('/etkinlikler/')) { 
                 // avoid false positive for root on sub-indexes
            }
        }
    });
});
