document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".cardlar");
    if (!cardContainer) return;

    cardContainer.innerHTML = "";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    etkinlikVerileri.forEach((etkinlik, index) => {
        let etiketMetni = etkinlik.etiket;
        let etiketStili = "";

        if (etkinlik.hedefTarih) {
            const target = new Date(etkinlik.hedefTarih);
            target.setHours(0, 0, 0, 0);
            const diffTime = target - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 0) {
                etiketMetni = `${diffDays} GÜN KALDI`;
                etiketStili = "border-color: var(--accent); color: var(--accent);";
            } else if (diffDays === 0) {
                etiketMetni = "BUGÜN!";
                etiketStili = "border-color: #22c55e; color: #22c55e;";
            } else {
                etiketMetni = "GEÇMİŞ ETKİNLİK";
                etiketStili = "border-color: rgba(255, 255, 255, 0.2); color: var(--text-muted);";
            }
        }

        const cardHTML = `
            <div class="card-duyuru tilt-ready animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s">
                <div class="card-header">
                    <span class="date">${etkinlik.tarih}</span>
                    <span class="tag" style="${etiketStili}">${etiketMetni}</span>
                </div>
                <h2>${etkinlik.baslik}</h2>
                <p>${etkinlik.aciklama}</p>
                <a href="${etkinlik.link}" class="read-more">Devamını Oku <i class="fas fa-arrow-right"></i></a>
            </div>
        `;

        cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
});