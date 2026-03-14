# Üst Düzey Yeniden Tasarım Kontrol Listesi

- [x] Gelişmiş "3x" görsel özellikleri planla
- [x] Yeni uygulama planı için kullanıcı onayını al
- [x] Gelişmiş Animasyonları Uygula
  - [x] Akıcı kaydırma animasyonları için ScrollReveal veya IntersectionObserver ekle
  - [x] Arka plan ve ön plan öğelerine Parallaks efektleri uygula
  - [x] Kartlara ve resimlere 3D Tilt efektleri ekle
- [x] Görsel Derinliği Artır
  - [x] Arka plana animasyonlu ağ gradyanları veya parçacık sistemleri ekle
  - [x] Katmanlı, dinamik aydınlatma ile glassmorphism'i (cam morfolojisi) yükselt
  - [x] Manyetik hover efektli özel imleç ekle
- [x] Spesifik Bileşenleri Yenile
  - [x] `index.html`: Hero bölümünü büyüleyici bir 3D deneyimine dönüştür
  - [x] `galeri.html`: Masonry düzeni ve gelişmiş lightbox animasyonları ekle
- [x] Evrensel Bileşen İyileştirmeleri
  - [x] Tüm HTML dosyalarında özel manyetik imleci standartlaştır ve yükselt
  - [x] İmleç hover efektini daha yaratıcı ve teknoloji odaklı olarak yeniden tasarla
  - [x] Son güncellemeden sonra imlecin kaybolması hatasını düzelt
- [x] Son Doğrulama

## Aşama 2: Etkileşimli Antigravity Arka Planı
- [x] Hero bölümünden yüzen teknoloji ikonlarını kaldır
- [x] Fareye duyarlı dağılma/itme mantığı ile `particles.js` oluştur
- [x] Yeni parçacık sistemini 18 HTML dosyasının tamamına enjekte et
- [x] Sayfa yüklenirken uçan imleç hatasını düzelt

## Aşama 3: Üst Düzey Parçacık Yükseltmeleri
- [x] Parallaks derinlik katmanlarını uygula (Ön Plan, Orta Plan, Arka Plan)
- [x] Dinamik parlayan bağlantı çizgileri ekle (Ağ Örgüsü)
- [x] `particles.js`'e gelişmiş Fare Girdabı/Yerçekimi fiziği ekle
- [x] Son Doğrulama

## Aşama 4: Üst Düzey Alt Sayfa Yenilemesi
- [x] `style.css`'e `.subpage-glass-card` ve `.subpage-title` stillerini ekle
- [x] 9 spesifik detay HTML dosyasını yeni glassmorphic kapsayıcıyı kullanacak şekilde yeniden düzenle
- [x] Detay sayfalarına `vanilla-tilt.js` ve 3D hover efektleri enjekte et
- [x] Tüm alt sayfalarda tutarlılığı ve iç boşlukları (padding) gözden geçir

## Aşama 5: Proje Yapısı Yeniden Düzenleme
- [x] `assets/images`, `assets/css` ve `assets/js` dizinlerini oluştur
- [x] Resimleri, CSS dosyalarını ve `particles.js`'i ilgili `assets` alt klasörlerine taşı
- [x] Tüm HTML `<link>`, `<script>` ve `<img>` etiketlerini güncellemek için `refactor_paths.py` yaz ve çalıştır
- [x] `style.css` içindeki `url()` referanslarını güncelle
- [x] Son Doğrulama (Yerel Sunucu Kontrolü)

## Aşama 6: Windows Gezgini Galeri Liste Görünümü
- [x] `style.css`'e `.gallery-list-view`, `.gallery-list-header` ve `.list-col-*` stillerini ekle
- [x] `galeri.html` dosyasını ızgara düzeni yerine liste ve başlık kullanacak şekilde yeniden düzenle
- [x] 5 `gallery-item` divini sahte tarihler ve dosya boyutları içeren liste satırlarına dönüştür
- [x] Lightbox entegrasyonunun hala doğru çalıştığını doğrula
- [x] İmleç etkileşimlerini doğrula

## Aşama 7: İmleç Performans Optimizasyonu
- [x] `globals.css` içindeki `.cursor-dot` ve `.cursor-outline` öğelerini `transform: translate3d()` kullanacak şekilde güncelle
- [x] `globals.css` içindeki imleç öğelerine `will-change: transform` ekle
- [x] Konum değişkenlerini korumak için `globals.css` içindeki `rotateCursor` keyframe'ini güncelle
- [x] Proje genelinde yüksek performanslı izleme sağlamak için `inject_cursor.py` dosyasını tekrar çalıştır
- [x] PC'de sıfır gecikme ve mobilde sorunsuz izleme deneyimini doğrula

## Aşama 8: Mobil Site Hızı ve Performans Optimizasyonu
- [x] Mobilde bulanıklığı/ağır filtreleri azaltmak için `style.css` içinde `@media` sorgularını uygula
- [x] Küçük ekranlarda (<768px) Vanilla-Tilt'i devre dışı bırak
- [x] Mobil cihazlar için Parçacık JS yoğunluğunu optimize et
- [x] Mobil tarayıcılarda 60fps navigasyonu doğrula

## Aşama 9: Navbar Markalama Güncellemesi
- [x] 18 HTML dosyasının tamamına markalama metni enjekte etmek için bir Python betiği oluştur
- [x] `style.css` içinde `.nav-brand-left` ve `.nav-brand-right` stillerini belirle
- [x] Küçük ekranları yönetmek için duyarlı (responsive) kurallar uygula
- [x] Tüm sayfalarda hizalamayı ve görsel tutarlılığı doğrula

## Aşama 10: Acil Navbar Düzeltmesi (Düzen ve Yollar)
- [x] `style.css` içinde Izgara (Grid) tabanlı merkezlemeyi uygula
- [x] 18 HTML dosyasının tamamında markalama için göreli yolları standartlaştır
- [x] Tarayıcıda alt sayfa görünümünü ve logo görünürlüğünü doğrula
- [x] Proje genelinde son denetim

## Aşama 11: Navigasyon Rengi Kurtarma
- [x] `style.css` içinde `.active` bağlantı stillerini uygula
- [x] Tüm HTML dosyalarına evrensel JS vurgulama betiği enjekte et
- [x] Kök ve alt sayfalarda dinamik davranışı doğrula

## Aşama 13: İmleç Fırlama ve Başlatma Düzeltmesi
- [x] `globals.css` dosyasından transform geçişlerini kaldır
- [x] Proje genelinde evrensel JS başlatma işlemini güncelle
- [x] Sorunsuz sayfa geçişlerini doğrula

## Aşama 14: Dinamik Duyuru Geri Sayımı
- [x] `duyurular.html` içine `data-date` özniteliklerini enjekte et
- [x] Geri sayım JS mantığını uygula ve enjekte et
- [x] Geçmiş, bugünkü ve gelecek etkinlikler için dinamik etiketleri doğrula

## Aşama 15: Geri Sayım Otomatik Senkronizasyon Düzeltmesi
- [x] Geri sayım betiğini Türkçe metin tarihlerini ayrıştıracak şekilde yeniden düzenle
- [x] Metin değişikliklerinden sonra otomatik güncellemeleri doğrula

## Aşama 16: Global İmleç Kurtarma
- [x] Bozulmuş imleç motorunu temizlemek için global betiği dağıt
- [x] Proje genelinde imleç işlevselliğini doğrula

## Aşama 17: Dinamik Etkinlik Geri Sayımı
- [x] `etkinlikler.html` içine akıllı geri sayım motorunu enjekte et
- [x] Geçmiş ve gelecek etkinlikler için otomatik etiketleri doğrula

## Aşama 18: Global Ölçeklendirme ve Navbar İnceltme
- [x] `globals.css` içinde genel font boyutunu azalt (%75 -> %70)
- [x] `style.css` içinde navbar kapsayıcısını, metin boyutlarını ve logo boyutlarını küçült
- [x] Dengeli ve profesyonel görsel hiyerarşiyi doğrula

## Aşama 19: Kapsamlı Mobil Optimizasyon Revizyonu
- [x] Akışkan tipografi (fluid typography) ve mobil öncelikli boşluk düzenlerini uygula
- [x] Dokunmatik cihazlar için navbar ve hero alanını optimize et
- [x] Ağır görsel efektleri (bulanıklık, gölge) mobil GPU'lar için hafiflet
- [x] Mobil simülatörlerde 60 FPS akıcılığını ve kusursuz yerleşimi doğrula
