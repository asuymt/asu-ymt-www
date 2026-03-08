/**
 * PALETTE SWITCHER — Temporary color palette preview tool
 * Injects a floating panel on the right side of the page
 * to switch between 5 color palettes in real-time.
 * 
 * Remove this script + theme.css link when done testing.
 */
(function () {
    const palettes = [
        {
            id: 'royal-purple',
            name: 'Royal Purple',
            colors: ['#36279B', '#0973BA', '#776BC7', '#0F0E15']
        },
        {
            id: 'indigo-neon',
            name: 'Indigo Neon',
            colors: ['#6366f1', '#0973BA', '#a8ff00', '#0f172a']
        },
        {
            id: 'ocean-ember',
            name: 'Ocean Ember',
            colors: ['#0973BA', '#021b2b', '#f97316', '#f1f5f9']
        },
        {
            id: 'mystic-teal',
            name: 'Mystic Teal',
            colors: ['#2C1A5C', '#0973BA', '#0D8A7D', '#0E0B1E']
        },
        {
            id: 'midnight-amber',
            name: 'Midnight Amber',
            colors: ['#291249', '#0973BA', '#9B5A2A', '#0D0A17']
        }
    ];

    // Build the panel HTML
    const container = document.createElement('div');
    container.className = 'palette-switcher';
    container.innerHTML = `
        <button class="palette-switcher-toggle" title="Renk Paleti">🎨</button>
        <div class="palette-switcher-panel">
            <div class="palette-switcher-title">🎨 Renk Paleti</div>
            ${palettes.map(p => `
                <div class="palette-option" data-theme="${p.id}">
                    <div class="palette-colors">
                        ${p.colors.map(c => `<div class="palette-dot" style="background:${c}"></div>`).join('')}
                    </div>
                    <span class="palette-label">${p.name}</span>
                </div>
            `).join('')}
            <button class="palette-reset">↩ Varsayılan</button>
        </div>
    `;

    document.body.appendChild(container);

    // Toggle panel open/close
    const toggle = container.querySelector('.palette-switcher-toggle');
    toggle.addEventListener('click', () => {
        container.classList.toggle('open');
    });

    // Handle palette selection
    const options = container.querySelectorAll('.palette-option');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const themeId = opt.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', themeId);

            // Update active state
            options.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');

            // Save preference
            localStorage.setItem('asu-ymt-theme', themeId);
        });
    });

    // Handle reset
    const resetBtn = container.querySelector('.palette-reset');
    resetBtn.addEventListener('click', () => {
        document.documentElement.removeAttribute('data-theme');
        options.forEach(o => o.classList.remove('active'));
        localStorage.removeItem('asu-ymt-theme');
    });

    // Restore saved theme on load
    const savedTheme = localStorage.getItem('asu-ymt-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        const activeOption = container.querySelector(`[data-theme="${savedTheme}"]`);
        if (activeOption) activeOption.classList.add('active');
    }
})();
