
> **Oluşturulma Tarihi:** 29 Ekim 2025  
> **Durum:** Planlama Aşaması  
> **Teknoloji Yığını:** HTML, CSS, JavaScript (Vanilla)

---


1. [Genel Bakış](#1-genel-bakış)
2. [Hedef Kitle](#2-hedef-kitle)
3. [Site Haritası ve Sayfa Yapısı](#3-site-haritası-ve-sayfa-yapısı)
4. [Teknik Gereksinimler](#4-teknik-gereksinimler)
5. [Özellikler ve Fonksiyonlar](#5-özellikler-ve-fonksiyonlar)
6. [SEO ve Performans](#6-seo-ve-performans)
7. [Erişilebilirlik](#7-erişilebilirlik)
8. [Hosting](#8-hosting)

---

<br><br>




ASÜ Yazılım Mühendisliği Topluluğu'nun resmi web sitesi, topluluğun dijital kimliğini yansıtan, üyelere ve ziyaretçilere kapsamlı bilgi sunan, modern ve profesyonel bir platform olacaktır. Site, herhangi bir framework kullanmadan, **sade HTML, CSS ve JavaScript** ile geliştirilecektir.

> "Aksaray Üniversitesi'nde yazılım ve teknoloji ile ilgilenen herkesin ilk durak noktası olan, ilham veren ve kullanıcı dostu bir dijital merkez."

<br><br>

---




- **Öğrenciler:** Aksaray Üniversitesi öğrencileri (özellikle Yazılım Mühendisliği, Bilgisayar Mühendisliği ve ilgili bölümler)
- **Freelancer'lar:** Yazılım ve teknoloji alanında çalışan serbest geliştiriciler

- Topluluk hakkında hızlıca bilgi edinmek
- Etkinlik takvimini görmek
- Üyelik başvurusu yapmak
- Projeler hakkında bilgi almak
- Ekip üyelerine ulaşmak
- Sosyal medya hesaplarına erişmek

<br><br>

---






- Hero Section (Etkileyici slogan, CTA butonları)
- Topluluk Tanıtım Özeti
- Öne Çıkan Etkinlikler (Son 3 etkinlik kartları)
- İstatistikler (Üye sayısı, proje sayısı, etkinlik sayısı)
- Hızlı Erişim Kartları (Üyelik, Projeler, İletişim)
- Stream (Instagram benzeri içerik akışı)
- Newsletter Kayıt Formu

- Topluluk Hikayesi (Kuruluş süreci)
- Misyon, Vizyon, Değerler
- Felsefemiz ("Etrafındakilerin ortalaması kadarsın")
- Amaçlar
- Faaliyet Alanları
- Başarılarımız / Kilometre Taşları
- Zaman Çizelgesi (Timeline)

- Organizasyon Şeması (Görsel)
- Yönetim Kurulu Tanıtımı
  - Çekirdek YK (Başkan, Başkan Yardımcısı, Sekreter, Sayman)
  - Operasyonel YK (Direktörler)
- Komiteler ve Görevleri
- Bağımsız Gruplar (Web, AI, Robotik, Oyun, Mobil, Masaüstü)
- "Ekibe Katıl" CTA

- Proje Felsefemiz
- Proje Kategorileri
  - Başlangıç Projeleri
  - Orta Ölçekli Projeler
  - Büyük Ölçekli Projeler
  - Ticari Potansiyelli Projeler
- Aktif Projeler (Kartlar halinde)
- Tamamlanmış Projeler (Portföy)
- "Proje Ekibine Katıl" Formu
- Proje Geliştirme Süreci

- Yaklaşan Etkinlikler (Takvim Görünümü)
- Geçmiş Etkinlikler (Galeri ve açıklamalar)
- Etkinlik Kategorileri
  - Eğitim (Atölye, Seminer)
  - Sosyal (Piknik, Buluşma)
  - Yarışma (Hackathon, Teknofest)
  - Teknik Gezi
- Etkinlik Detay Sayfaları (Modal veya ayrı sayfalar)

- Eğitim Programları
- Workshop ve Atölye Çalışmaları
- Kaynak Kütüphanesi
  - Yazılım Dilleri
  - Teknolojiler
  - Kariyer Rehberleri
- Öğrenci Başarı Hikayeleri
- Eğitim Takvimi

- Etkinlik Fotoğrafları
- Proje Görselleri
- Topluluk Anları
- Kategorilere göre filtreleme
- Lightbox özelliği

- Instagram benzeri içerik akışı
- Topluluk güncellemeleri
- Kısa videolar ve görseller
- Etkileşimli içerikler
- Hashtag sistemi
- Kronolojik akış

- İletişim Formu
- Sosyal Medya Linkleri
- Konum Haritası (ASÜ Mühendislik Fakültesi)
- SSS (Sıkça Sorulan Sorular)
- Hızlı Linkler




- Üyelik Şartları
- Üyelik Başvuru Formu (Google Forms entegrasyonu)
- Üyelik Süreci Adımları
- Üyelik Avantajları
- Üyelik Türleri (Aktif / Pasif)

- Kazanılan Ödüller
- Katılım Belgesi Sayıları
- Yarışma Sonuçları
- Medya Çıkışları

- Mevcut Sponsorlar
- İşbirliği Yaptığımız Kurumlar
- "Sponsor Ol" CTA




- Topluluk Tüzüğü
- Üyelik Kuralları
- Disiplin Hükümleri


<br><br>

---







- **HTML5:** Semantik HTML kullanımı
- **CSS3:** Modern CSS özellikleri, Flexbox, Grid, Custom Properties (CSS Variables)
- **Normalize.css:** Tarayıcı tutarlılığı için
- **JavaScript (Vanilla):** ES6+ syntax, modüler yapı



```
asuymt-website/
│
├── index.html                  # Ana sayfa
│
├── hakkimizda/
├── organizasyon/
├── projeler/
├── etkinlikler/
├── egitimler/
├── galeri/
├── stream/
├── iletisim/
├── uyelik/
├── basarilar/
├── ortaklar/
├── gizlilik/
├── kullanim-sartlari/
│
├── src/
│   ├── css/
│   │   ├── normalize.css       # Tarayıcı reset
│   │   ├── variables.css       # CSS değişkenleri
│   │   ├── style.css           # Ana stil dosyası
│   │   ├── responsive.css      # Responsive kurallar
│   │   └── animations.css      # Animasyonlar
│   │
│   ├── js/
│   │   ├── main.js             # Ana JavaScript
│   │   ├── navigation.js       # Menü ve navigasyon
│   │   ├── animations.js       # Animasyon kontrolleri
│   │   └── stream.js           # Stream fonksiyonları
│   │
│   └── assets/
│       ├── images/
│       │   ├── logo/
│       │   ├── team/
│       │   ├── events/
│       │   ├── projects/
│       │   └── icons/
│       ├── videos/             # Tanıtım videoları
│       ├── documents/          # PDF dosyalar (tüzük vb.)
│       └── fonts/              # Custom fontlar
│
├── favicon.ico
└── README.md
```



- **Mobile-First Yaklaşım:** Önce mobil tasarlanacak, sonra desktop'a uyarlanacak
- **Breakpoint'ler:**
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
  - Large Desktop: 1440px+

<br><br>

---





✅ Responsive (mobil, tablet, desktop)  
✅ Hızlı yükleme süresi  
✅ SEO optimize  
✅ Erişilebilir (WCAG standartları)  
✅ Tarayıcı uyumluluğu (Chrome, Firefox, Safari, Edge)  
✅ Social media entegrasyonu  
✅ Google Analytics  
✅ Newsletter kayıt  
✅ İletişim formu  
✅ Stream özelliği (Instagram benzeri içerik akışı)

<br><br>

---





**On-Page SEO:**
- [ ] Her sayfada benzersiz `<title>` tag
- [ ] Meta description (150-160 karakter)
- [ ] H1, H2, H3 hiyerarşisi
- [ ] Alt text tüm görsellerde
- [ ] URL yapısı SEO-friendly
- [ ] Internal linking (iç bağlantılar)
- [ ] XML sitemap
- [ ] Robots.txt

**Off-Page SEO:**
- [ ] Sosyal medya paylaşımları
- [ ] Backlink stratejisi
- [ ] Google My Business kaydı (varsa fiziki adres)

**Anahtar Kelimeler:**
- Aksaray Üniversitesi Yazılım Topluluğu
- ASÜ YMT
- Aksaray Üniversitesi öğrenci toplulukları
- Yazılım mühendisliği etkinlikleri
- Teknoloji topluluğu Aksaray


- [ ] Görsel sıkıştırma (WebP formatı)
- [ ] Lazy loading (görseller için)
- [ ] CSS/JS minification
- [ ] Gereksiz kod temizliği
- [ ] CDN kullanımı (ikonlar, fontlar için)
- [ ] Caching stratejisi
- [ ] Gzip compression

**Hedef Metrikler:**
- PageSpeed Score: 90+
- İlk içerik boyama (FCP): <1.8s
- En büyük içerik boyama (LCP): <2.5s
- Kümülatif düzen kayması (CLS): <0.1

