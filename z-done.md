
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

- [x] Hero bölümünden yüzen teknoloji ikonlarını kaldır
- [x] Fareye duyarlı dağılma/itme mantığı ile `particles.js` oluştur
- [x] Yeni parçacık sistemini 18 HTML dosyasının tamamına enjekte et
- [x] Sayfa yüklenirken uçan imleç hatasını düzelt

- [x] Parallaks derinlik katmanlarını uygula (Ön Plan, Orta Plan, Arka Plan)
- [x] Dinamik parlayan bağlantı çizgileri ekle (Ağ Örgüsü)
- [x] `particles.js`'e gelişmiş Fare Girdabı/Yerçekimi fiziği ekle
- [x] Son Doğrulama

- [x] `style.css`'e `.subpage-glass-card` ve `.subpage-title` stillerini ekle
- [x] 9 spesifik detay HTML dosyasını yeni glassmorphic kapsayıcıyı kullanacak şekilde yeniden düzenle
- [x] Detay sayfalarına `vanilla-tilt.js` ve 3D hover efektleri enjekte et
- [x] Tüm alt sayfalarda tutarlılığı ve iç boşlukları (padding) gözden geçir

- [x] `assets/images`, `assets/css` ve `assets/js` dizinlerini oluştur
- [x] Resimleri, CSS dosyalarını ve `particles.js`'i ilgili `assets` alt klasörlerine taşı
- [x] Tüm HTML `<link>`, `<script>` ve `<img>` etiketlerini güncellemek için `refactor_paths.py` yaz ve çalıştır
- [x] `style.css` içindeki `url()` referanslarını güncelle
- [x] Son Doğrulama (Yerel Sunucu Kontrolü)

- [x] `style.css`'e `.gallery-list-view`, `.gallery-list-header` ve `.list-col-*` stillerini ekle
- [x] `galeri.html` dosyasını ızgara düzeni yerine liste ve başlık kullanacak şekilde yeniden düzenle
- [x] 5 `gallery-item` divini sahte tarihler ve dosya boyutları içeren liste satırlarına dönüştür
- [x] Lightbox entegrasyonunun hala doğru çalıştığını doğrula
- [x] İmleç etkileşimlerini doğrula

- [x] `globals.css` içindeki `.cursor-dot` ve `.cursor-outline` öğelerini `transform: translate3d()` kullanacak şekilde güncelle
- [x] `globals.css` içindeki imleç öğelerine `will-change: transform` ekle
- [x] Konum değişkenlerini korumak için `globals.css` içindeki `rotateCursor` keyframe'ini güncelle
- [x] Proje genelinde yüksek performanslı izleme sağlamak için `inject_cursor.py` dosyasını tekrar çalıştır
- [x] PC'de sıfır gecikme ve mobilde sorunsuz izleme deneyimini doğrula

- [x] Mobilde bulanıklığı/ağır filtreleri azaltmak için `style.css` içinde `@media` sorgularını uygula
- [x] Küçük ekranlarda (<768px) Vanilla-Tilt'i devre dışı bırak
- [x] Mobil cihazlar için Parçacık JS yoğunluğunu optimize et
- [x] Mobil tarayıcılarda 60fps navigasyonu doğrula

- [x] 18 HTML dosyasının tamamına markalama metni enjekte etmek için bir Python betiği oluştur
- [x] `style.css` içinde `.nav-brand-left` ve `.nav-brand-right` stillerini belirle
- [x] Küçük ekranları yönetmek için duyarlı (responsive) kurallar uygula
- [x] Tüm sayfalarda hizalamayı ve görsel tutarlılığı doğrula

- [x] `style.css` içinde Izgara (Grid) tabanlı merkezlemeyi uygula
- [x] 18 HTML dosyasının tamamında markalama için göreli yolları standartlaştır
- [x] Tarayıcıda alt sayfa görünümünü ve logo görünürlüğünü doğrula
- [x] Proje genelinde son denetim

- [x] `style.css` içinde `.active` bağlantı stillerini uygula
- [x] Tüm HTML dosyalarına evrensel JS vurgulama betiği enjekte et
- [x] Kök ve alt sayfalarda dinamik davranışı doğrula

- [x] `globals.css` dosyasından transform geçişlerini kaldır
- [x] Proje genelinde evrensel JS başlatma işlemini güncelle
- [x] Sorunsuz sayfa geçişlerini doğrula

- [x] `duyurular.html` içine `data-date` özniteliklerini enjekte et
- [x] Geri sayım JS mantığını uygula ve enjekte et
- [x] Geçmiş, bugünkü ve gelecek etkinlikler için dinamik etiketleri doğrula

- [x] Geri sayım betiğini Türkçe metin tarihlerini ayrıştıracak şekilde yeniden düzenle
- [x] Metin değişikliklerinden sonra otomatik güncellemeleri doğrula

- [x] Bozulmuş imleç motorunu temizlemek için global betiği dağıt
- [x] Proje genelinde imleç işlevselliğini doğrula

- [x] `etkinlikler.html` içine akıllı geri sayım motorunu enjekte et
- [x] Geçmiş ve gelecek etkinlikler için otomatik etiketleri doğrula

- [x] `globals.css` içinde genel font boyutunu azalt (%75 -> %70)
- [x] `style.css` içinde navbar kapsayıcısını, metin boyutlarını ve logo boyutlarını küçült
- [x] Dengeli ve profesyonel görsel hiyerarşiyi doğrula

- [x] Akışkan tipografi (fluid typography) ve mobil öncelikli boşluk düzenlerini uygula
- [x] Dokunmatik cihazlar için navbar ve hero alanını optimize et
- [x] Ağır görsel efektleri (bulanıklık, gölge) mobil GPU'lar için hafiflet
- [x] Ağır görsel efektleri (bulanıklık, gölge) mobil GPU'lar için hafiflet
- [x] Mobil simülatörlerde 60 FPS akıcılığını ve kusursuz yerleşimi doğrula

- [x] 18 HTML dosyasının tamamından gereksiz "Hızlı Menü" bloğunu kaldır
- [x] Sayfa altı yerleşiminin daha sade ve dengeli olduğunu doğrula

- [x] `style.css` içinde "Made By" alanı için premium stil ve animasyonlar hazırla
- [x] 18 HTML dosyasının tamamına geliştirici isimlerini (Emir Fetolmaz, Burak Arıkan, Mehmet Akif Akkoç) otomatik olarak enjekte et
- [x] Footer alanının görsel dengesini ve "Ocean Ember" temasını doğrula

- [x] `style.css` içinde buzlu cam efektli (glassmorphism) ve animasyonlu tooltip yapısını hazırla
- [x] 18 HTML dosyasının tamamında "Emir Fetolmaz" ismini resim destekli tooltip tetikleyicisiyle güncelle
- [x] Etkileşimin jilet gibi akıcı olduğunu ve resim alanının doğru konumlandığını doğrula

- [x] Baloncuk boyutlarını resim detaylarını daha iyi gösterecek şekilde büyüt (180x240)
- [x] Resim netliğini artırmak için yüksek kontrastlı render kurallarını (`image-rendering`) uygula
- [x] Resmin arka plandan daha net ayrılması için ince çerçeve ve derinlik ekle

- [x] Burak Arıkan ismini 18 HTML dosyasının tamamında `burak-arikan.jpg` destekli tooltip ile güncelle
- [x] Tüm ekip imzalarının aynı jilet netlik ve premium efektlerle çalıştığını doğrula

- [x] Mehmet Akif Akkoç ismini 18 HTML dosyasının tamamında `mehmet-akif-akkoc.jpg` destekli tooltip ile güncelle
- [x] Standart imleci tamamen iptal eden ve modern `mix-blend-mode: difference` (renk tersleme) efektli yeni motoru kur
- [x] Nokta tabanlı tasarımdan vazgeçip, esnek ve sıvımsı tek bir "Spot Işığı" parçasına geçiş yap
- [x] Hover anında %35 yuvarlatılmış kare formuna bükülme ve 45 derece dönme efektlerini uygula

- [x] Sayfa yüklendiğinde/yenilendiğinde imlecin merkezden "uçma" (snap) hatasını farenin ilk konumunu anlık yakalayarak düzelt
- [x] Sayfa yenilendikten sonra fare hareket etmese bile hover durumunun korunmasını sağlayan `elementFromPoint` kontrolünü ekle
- [x] Hybrid cihazlarda (Laptop + Touch) imlecin görünmemesine neden olan cihaz algılama mantığını `pointer: fine` ile revize et
- [x] Tüm sistemin 18 HTML dosyasında jilet gibi akıcı ve hatasız çalıştığını doğrula

