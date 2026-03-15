const roadmapData = {
    "frontend": {
        title: "Frontend Developer",
        icon: "fas fa-code",
        color: "#0ea5e9",
        gradient: "linear-gradient(135deg, #0ea5e9 0%, #2dd4bf 100%)",
        steps: [
            { 
                id: 1, 
                title: "HTML & CSS Basics", 
                desc: "Web dünyasının temel taşları. Semantik HTML, CSS box model ve temel seçiciler.",
                resources: ["MDN Web Docs - HTML", "CSS-Tricks - Flexbox Guide", "W3Schools - HTML/CSS"]
            },
            { 
                id: 2, 
                title: "Advanced CSS & Layouts", 
                desc: "Flexbox, Grid, Responsive Design ve CSS değişkenleri ile modern arayüzler.",
                resources: ["Grid Garden", "Flexbox Froggy", "Responsive Design Best Practices"]
            },
            { 
                id: 3, 
                title: "Modern JavaScript", 
                desc: "ES6+ özellikleri, Arrow Functions, Destructuring, Promises ve Async/Await.",
                resources: ["JavaScript.info", "Eloquent JavaScript Book", "You Don't Know JS"]
            },
            { 
                id: 4, 
                title: "DOM & Web APIs", 
                desc: "Sayfa elementlerini yönetme, Event Listeners ve Fetch API ile veri çekme.",
                resources: ["Manipulating the DOM - MDN", "Fetch API Guide"]
            },
            { 
                id: 5, 
                title: "Git & GitHub", 
                desc: "Versiyon kontrol sistemleri, Branching stratejileri ve takım çalışması.",
                resources: ["Git Documentation", "GitHub Flow Guide", "Learning Git Branching"]
            },
            { 
                id: 6, 
                title: "Frontend Frameworks", 
                desc: "React, Vue veya Angular. Component yapısı ve State yönetimi.",
                resources: ["React Official Docs", "Vue Guide", "Angular Journey"]
            },
            { 
                id: 7, 
                title: "State Management", 
                desc: "Redux, Context API, Zustand veya Pinia ile global veri yönetimi.",
                resources: ["Redux Toolkit", "Zustand GitHub", "Context API Patterns"]
            }
        ]
    },
    "backend": {
        title: "Backend Developer",
        icon: "fas fa-server",
        color: "#f43f5e",
        gradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
        steps: [
            { 
                id: 1, 
                title: "Internet & OS Basics", 
                desc: "HTTP/HTTPS nasıl çalışır? Terminal kullanımı ve SSH temelleri.",
                resources: ["How DNS works", "Linux Command Line Basics", "HTTP/2 Explained"]
            },
            { 
                id: 2, 
                title: "Programming Language", 
                desc: "Node.js (JS), Python (Django/FastAPI), Go veya Java (Spring).",
                resources: ["Node.js Docs", "Python for Backend", "Go Language Tour"]
            },
            { 
                id: 3, 
                title: "Relational Databases", 
                desc: "PostgreSQL veya MySQL. SQL sorguları, Normalizasyon ve Indeksleme.",
                resources: ["SQL Bolt", "Postgres Tutorial", "DB Fiddle"]
            },
            { 
                id: 4, 
                title: "REST & GraphQL APIs", 
                desc: "API tasarımı, Endpoint yönetimi ve Dokümantasyon (Swagger).",
                resources: ["RESTful API Guide", "Apollo GraphQL", "Swagger Docs"]
            },
            { 
                id: 5, 
                title: "Authentication & Security", 
                desc: "JWT, Sessionlar, OAuth2 ve Temel Güvenlik (OWASP).",
                resources: ["Auth0 Blog", "Passport.js", "OWASP Top 10"]
            },
            { 
                id: 6, 
                title: "Docker & Containers", 
                desc: "Uygulamaları paketleme, Docker Compose ve bağımlılık izolasyonu.",
                resources: ["Docker Curriculum", "Play with Docker", "Docker Hub"]
            }
        ]
    },
    "ai": {
        title: "AI & Data Science",
        icon: "fas fa-brain",
        color: "#8b5cf6",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
        steps: [
            { 
                id: 1, 
                title: "Python for Data Science", 
                desc: "NumPy ve Pandas ile veri manipülasyonu ve analizi.",
                resources: ["Pandas Documentation", "NumPy Quickstart", "Kaggle Python Course"]
            },
            { 
                id: 2, 
                title: "Mathematics & Statistics", 
                desc: "Lineer Cebir, Olasılık ve İstatistik temelleri.",
                resources: ["Khan Academy - Linear Algebra", "StatQuest YouTube", "Essence of Calculus"]
            },
            { 
                id: 3, 
                title: "Machine Learning Concepts", 
                desc: "Süpervizeli ve Süpervizesiz öğrenme, Regresyon ve Sınıflandırma.",
                resources: ["Andrew Ng's ML Course", "Scikit-Learn Tutorials", "Machine Learning Mastery"]
            },
            { 
                id: 4, 
                title: "Deep Learning", 
                desc: "Yapay Sinir Ağları, CNN, RNN ve Transformer mimarileri.",
                resources: ["DeepLearning.ai", "Fast.ai", "PyTorch Tutorials"]
            },
            { 
                id: 5, 
                title: "Natural Language Processing", 
                desc: "Metin işleme, Word Embeddings ve Büyük Dil Modelleri (LLM).",
                resources: ["Hugging Face Course", "NLTK Book", "Attention Is All You Need Paper"]
            },
            { 
                id: 6, 
                title: "Model Deployment", 
                desc: "Modelleri Flask, FastAPI veya TorchServe ile yayına alma.",
                resources: ["Streamlit Guide", "FastAPI for ML", "Heroku/AWS Deployment"]
            }
        ]
    }
};
