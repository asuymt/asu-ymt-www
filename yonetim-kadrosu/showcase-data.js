const showcaseData = [
    
    {
        id: 1,
        name: "Burak Arıkan",
        role: "Web Sitesi Lideri",
        image: "../assets/images/burak-arikan.jpg",
        projects: [
            { title: "Kendine Özgü Websitesi", tech: ["HTML/ ", "CSS/ ", "JS"], link: "#" },
        ],
        github: "https://github.com/burakarikan17",
        instagram: "https://www.instagram.com/burakarikan17/",
        linkedin: "https://www.linkedin.com/in/burak-ar%C4%B1kan-13a362211/s",
        highlight: "Backend mimarisi ve sistem optimizasyonu.",
        bio: "Valorant'ta aimi direkt kafaya kayan bir arkadaşımız. Nam-ı diğer yok edici. Onu gördüğünüz an öldünüz demektir. Yazılım Mühendisliği öğrencisi. İyi bir insan, alkolü sigarası yok."
    },
    {
        id: 2,
        name: "Emir Fetolmaz",
        role: "Sosyal Medya Direktörü",
        role2: "PR Komitesi Direktörü",
        image: "../assets/images/emir-fetolmaz.jpg",
        projects: [
            { title: "Online Zikirmatik Projesi", tech: ["HTML / CSS / ", "JavaScript -","MongoDB -" ,"Node.js"], link: "https://global-zhikr.onrender.com/" },
            { title: "Kişisel Websitesi", tech: ["HTML -", "CSS -", "JavaScript -","MongoDB -","Node.js"], link: "https://fetolmaz.com.tr" },
            { title: "YMT Sudoku", tech: ["HTML / CSS / ", "JavaScript -","MongoDB -" ,"Node.js"], link: "" }
        ],
        github: "https://github.com/fierpell",
        instagram: "https://www.instagram.com/emir.fetolmaz/",
        linkedin: "https://www.linkedin.com/in/emir-fetolmaz-6439a5220/",
        highlight: "Interactive UI uzmanı ve Sosyal Medya Direktörü.",
        bio: "UX ve UI profesyoneli bir uzman. Dindar. Kimseye zararı olmayan, iyi kalpli bir Mümin."
    },
    {
        id: 3,
        name: "Mehmet Akif Akkoç",
        role: "Topluluk Başkanı",
        image: "../assets/images/mehmet-akif-akkoc.jpg",
        projects: [
        ],
        github: "https://github.com/Mefamex",
        instagram: "https://www.instagram.com/mefamex/",
        linkedin: "https://www.linkedin.com/in/mefamex/",
        highlight: "Topluluk Başkanı ve algoritma tutkunu.",
        bio: "Bu da topluluğun başkanı. Onu yurtta genelde sırtında logosuyla görürsünüz. Çiğköfteyi çok sever. Geçenlerde Recep'in 1000₺'sını çalmış. Olayın detaylarını bilmiyoruz ama Recep'in çok sinirlendiği söyleniyor. Yazılım Mühendisliği öğrencisi."
    },
    {
        id: 4,
        name: "Hakan Uluçar",
        role: "Başkan Yardımcısı",
        image: "../assets/images/asuymt-logo.png",
        projects: [
            { title: "YMT Sudoku", tech: ["JS", "Logic"], link: "/games/sudoku/index.html" },
            { title: "Sözlük & Roadmap", tech: ["UI", "UX"], link: "../projeler/sozluk/index.html" }
        ],
        github: "https://github.com/asuymt",
        instagram: "https://www.instagram.com/haforyx/",
        linkedin: "https://www.linkedin.com/in/hakan-ulucar/",
        highlight: "Birlikte geliştiriyor, birlikte öğreniyoruz.",
        bio: "Topluluğun Başkan Yardımcısı. Yazılım Mühendisliği alanında kendini geliştiren, topluluk vizyonuna katkıda bulunan bir isim."
    },
    {
        id: 5,
        name: "Recep Beydüz",
        role: "Saha Operasyoncusu", 
        image: "../assets/images/recep-beyduz.jpg",
        projects: [
            { title: "Mentorluk & Rehberlik", tech: ["Akademi", "Koordinasyon"], link: "#" }
        ],
        github: "https://github.com/asuymt",
        instagram: "https://www.instagram.com/rcp.bydz.65/",
        linkedin: "https://www.linkedin.com/in/recep-beyd%C3%BCz-a036993b2/",
        highlight: "Topluluğun akademik vizyonunu ve rehberliğini destekler.",
        bio: "Saha operasyonlarından sorumlu, topluluğun saha etkinliklerinde ve koordinasyonunda kilit rol oynayan bir üyemiz."
    },
    {
        id: 6,
        name: "Ömür Faruk Duru",
        role: "Denetleme Kurulu Başkanı",
        image: "../assets/images/asuymt-logo.png",
        projects: [
            { title: "Topluluk Arşivi", tech: ["Notion", "Docs"], link: "#" }
        ],
        github: "",
        instagram: "https://www.instagram.com/omurfarukduru/",
        linkedin: "https://www.linkedin.com/company/asuymt/",
        highlight: "Kurumsal iletişim ve üye kayıt yönetimi.",
        bio: "Denetleme Kurulu Başkanı olarak topluluğun idari süreçlerini ve kurumsal işleyişini denetlemektedir."
    },
    {
        id: 7,
        name: "Buse Yağmur Özdil",
        role: "Etkinlik Komitesi Denetçisi",
        image: "../assets/images/asuymt-logo.png",
        projects: [
            { title: "Sponsorluk Dosyası", tech: ["Tasarım", "Sunum"], link: "#" }
        ],
        github: "",
        instagram: "https://www.instagram.com/buse.__.yagmur/",
        linkedin: "https://www.linkedin.com/in/buse-ya%C4%9Fmur-%C3%B6zdil-75969b31b/",
        highlight: "Marka işbirlikleri ve sektör bağlantıları.",
        bio: "Topluluğun dış dünyaya açılan kapısı olan dış ilişkiler departmanını koordine etmektedir."
    },
    {
        id: 8,
        name: "Elif Yağız",
        role: "Eğitim Komitesi Denetçisi",
        image: "../assets/images/asuymt-logo.png",
        projects: [
            { title: "YMT Workshop Serisi", tech: ["Python", "C++"], link: "#" }
        ],
        github: "https://github.com/asuymt",
        instagram: "https://www.instagram.com/yagiz_elf/",
        linkedin: "https://www.linkedin.com/in/elifyagiz/",
        highlight: "Yazılım eğitimleri ve teknik proje mentörlüğü.",
        bio: "Topluluğun teknik vizyonunu belirleyen ve eğitim serilerini yöneten teknik liderimiz."
    },
    {
        id: 9,
        name: "Mert Çelik",
        role: "Etkinlikler Ekibi Denetçisi",
        image: "../assets/images/asuymt-logo.png",
        projects: [
            { title: "YMT Newsletter", tech: ["Canva", "Mailchimp"], link: "#" }
        ],
        github: "",
        instagram: "https://www.instagram.com/mert_cel1k9/",
        linkedin: "https://www.linkedin.com/in/mert-%C3%A7elik-8a7049330/",
        highlight: "Sosyal medya stratejileri ve görsel tasarım.",
        bio: "Topluluğun sosyal medya mecralarındaki görünürlüğünü ve tasarım süreçlerini yönetmektedir."
    },
    {
        id: 10,
        name: "Kerim Efe Pehlivan",
        role: "QR Kayıt Projesi Lideri",
        image: "../assets/images/asuymt-logo.png",
        projects: [
            { title: "Bütçe Takip Sistemi", tech: ["Excel", "Finans"], link: "#" }
        ],
        github: "",
        instagram: "",
        linkedin: "",
        highlight: "Topluluk bütçesi ve kaynak yönetimi.",
        bio: "Topluluğun mali işlerini, bütçe yönetimini ve kaynak planlamasını yürüten saymanımız."
    }
];


