import type { TranslatedCourse, Theme, Category } from "@/lib/data/types";

/* ══════════════════════════════════════════════════════════
   THEMES — Top-level classification
   ══════════════════════════════════════════════════════════ */
export const themes: Theme[] = [
  {
    id: "tech",
    fr: { name: "Technologie", description: "Développement, infrastructure et outils tech" },
    en: { name: "Technology", description: "Development, infrastructure and tech tools" },
  },
  {
    id: "data-ai",
    fr: { name: "IA & Data", description: "Intelligence artificielle, data science et analytics" },
    en: { name: "AI & Data", description: "Artificial intelligence, data science and analytics" },
  },
  {
    id: "security",
    fr: { name: "Cybersécurité", description: "Sécurité informatique et protection des données" },
    en: { name: "Cybersecurity", description: "IT security and data protection" },
  },
  {
    id: "design",
    fr: { name: "Design", description: "UX/UI design, stratégie et prototypage" },
    en: { name: "Design", description: "UX/UI design, strategy and prototyping" },
  },
];

/* ══════════════════════════════════════════════════════════
   CATEGORIES — Belong to a Theme
   ══════════════════════════════════════════════════════════ */
export const categories: Category[] = [
  // Tech
  { id: "dev-web", themeId: "tech", fr: { name: "Développement Web" }, en: { name: "Web Development" } },
  { id: "frontend", themeId: "tech", fr: { name: "Frontend" }, en: { name: "Frontend" } },
  { id: "backend", themeId: "tech", fr: { name: "Backend" }, en: { name: "Backend" } },
  { id: "devops", themeId: "tech", fr: { name: "DevOps & CI/CD" }, en: { name: "DevOps & CI/CD" } },
  { id: "cloud", themeId: "tech", fr: { name: "Cloud Computing" }, en: { name: "Cloud Computing" } },
  // Data & AI
  { id: "data-science", themeId: "data-ai", fr: { name: "Data Science" }, en: { name: "Data Science" } },
  { id: "ml", themeId: "data-ai", fr: { name: "Machine Learning" }, en: { name: "Machine Learning" } },
  { id: "data-viz", themeId: "data-ai", fr: { name: "Data Visualization" }, en: { name: "Data Visualization" } },
  // Security
  { id: "cybersec", themeId: "security", fr: { name: "Cybersécurité" }, en: { name: "Cybersecurity" } },
  // Design
  { id: "ux-design", themeId: "design", fr: { name: "UX Design" }, en: { name: "UX Design" } },
];

/* ══════════════════════════════════════════════════════════
   UI DICTIONARIES (FR / EN)
   ══════════════════════════════════════════════════════════ */
export const dictionaries = {
  fr: {
    hero: {
      badge: "Plateforme d'excellence",
      titleStart: "Formations IT certifiantes en ",
      titleHighlight: "IA, Cloud & Cybersécurité",
      titleEnd: "",
      subtitle: "Préparez vos certifications ISTQB, AWS, Microsoft Azure et plus encore. Plus de 290 formations animées par des experts certifiés.",
      searchPlaceholder: "Que souhaitez-vous apprendre aujourd'hui ? (ex: Cloud, Python...)",
      searchButton: "Rechercher",
      scroll: "Découvrir"
    },
    featured: {
      subtitle: "Formations phares",
      title: "Nos formations à la une",
      description: "Découvrez nos formations les plus demandées, sélectionnées par nos experts pour accélérer votre carrière.",
      viewAll: "Voir tout le catalogue",
      view: "Découvrir",
    },
    courses: {
      catalog: "Catalogue",
      title: "Explorez nos cours",
      description: "Des formations créées par des experts marocains et internationaux, mises à jour régulièrement.",
      badges: {
        bestseller: "Best Seller",
        new: "Nouveau",
        ai: "IA incluse"
      },
      progress: "Progression",
      view: "Voir",
      filters: {
        searchPlaceholder: "Rechercher un cours...",
        allCategories: "Toutes les catégories",
        allPrices: "Tous les prix",
        free: "Gratuit",
        paid: "Payant",
        noResults: "Aucun cours ne correspond à vos critères de recherche.",
        loading: "Chargement du catalogue...",
        clearAll: "Effacer tout",
        filtersTitle: "Filtres",
        category: "Catégorie",
        level: "Niveau",
        format: "Format",
        duration: "Durée",
        levels: {
          beginner: "Débutant",
          intermediate: "Intermédiaire",
          advanced: "Avancé",
          all: "Tous niveaux",
        },
        formats: {
          presentiel: "Présentiel",
          hybride: "Hybride",
          "en-ligne": "En ligne",
        },
        durations: {
          "1": "1 jour",
          "2-3": "2-3 jours",
          "4-5": "4-5 jours",
          "5+": "Plus de 5 jours",
        },
      }
    },
    features: {
      subtitle: "Fonctionnalités",
      title: "L'écosystème d'apprentissage ultime.",
      description: "Tout ce dont vous avez besoin pour exceller dans la tech, réuni sur une seule plateforme.",
      cards: {
        ai: {
          title: "Tuteur IA 24/7",
          desc: "Obtenez des réponses instantanées, des revues de code et un accompagnement personnalisé par notre IA."
        },
        adaptive: {
          title: "Parcours Adaptatifs",
          desc: "Des curriculums qui s'adaptent en temps réel à votre vitesse et à vos objectifs."
        },
        projects: {
          title: "Projets Réels",
          desc: "Construisez un portfolio avec des cas d'usage directement tirés de l'industrie."
        },
        certifs: {
          title: "Certificats Blockchain",
          desc: "Des diplômes infalsifiables et vérifiables en un clic par les recruteurs."
        }
      }
    },
    stats: {
      title: "L'impact ZiryabTec en chiffres",
      items: {
        learners: "Apprenants actifs",
        courses: "Cours disponibles",
        rating: "Note moyenne",
        hired: "Taux d'embauche"
      }
    },
    testimonials: {
      subtitle: "Témoignages",
      title: "Ce qu'ils disent de nous"
    },
    portfolio: {
      subtitle: "Portfolio",
      title: "Nos réalisations",
      titleHighlight: "professionnelles",
      description: "Découvrez les projets innovants conçus et développés par notre équipe d'experts.",
      learnMore: "En savoir plus",
      backToPortfolio: "Retour au portfolio",
      technologies: "Technologies utilisées",
      objectives: "Objectifs du projet",
      visitSite: "Visiter le site",
      detailSubtitle: "Projet Portfolio",
    },
    pricing: {
      subtitle: "Tarifs",
      title: "Investissez dans votre avenir.",
      description: "Des plans adaptés à chaque étape de votre carrière.",
      monthly: "Mensuel",
      yearly: "Annuel (-20%)",
      plans: {
        basic: {
          name: "Essentiel",
          desc: "Parfait pour débuter dans la tech.",
          cta: "Commencer"
        },
        pro: {
          name: "Pro",
          desc: "Pour les professionnels ambitieux.",
          cta: "Devenir Pro"
        },
        elite: {
          name: "Élite",
          desc: "L'expérience d'apprentissage ultime.",
          cta: "Rejoindre l'Élite"
        }
      }
    },
    cta: {
      title: "Prêt à transformer votre carrière ?",
      subtitle: "Rejoignez la nouvelle génération d'experts tech au Maroc.",
      primaryBtn: "Créer mon compte",
      secondaryBtn: "Voir le catalogue"
    },
    footer: {
      description: "L'apprentissage tech réinventé. Pour l'Afrique, par l'Afrique.",
      links: {
        platform: {
          title: "Plateforme",
          items: ["Catalogue", "Projets", "Certificats", "Tarifs"]
        },
        company: {
          title: "Entreprise",
          items: ["À propos", "Carrières", "Blog", "Contact"]
        },
        legal: {
          title: "Légal",
          items: ["CGV", "Confidentialité", "Mentions Légales"]
        }
      },
      rights: "© 2026 ZiryabTec. Tous droits réservés."
    },
    courseDetails: {
      objectives: "Ce que vous allez apprendre",
      audience: "À qui s'adresse cette formation ?",
      prerequisites: "Pré-requis",
      curriculum: "Programme de la formation",
      sessions: {
        title: "Types de session",
        inter: { label: "Inter-entreprises", desc: "Formation avec d'autres professionnels", cta: "Demander un devis" },
        intra: { label: "Intra-entreprise", desc: "Formation privée pour votre équipe", cta: "S'inscrire" },
        surMesure: { label: "Sur Mesure", desc: "Programme personnalisé selon vos besoins", cta: "Demander un devis" }
      },
      form: {
        name: "Nom complet",
        email: "Email professionnel",
        phone: "Téléphone",
        company: "Entreprise",
        message: "Votre message (optionnel)",
        submit: "Envoyer la demande",
        success: "Votre demande a été envoyée avec succès ! Un conseiller vous contactera sous 24h."
      },
      level: { beginner: "Débutant", intermediate: "Intermédiaire", advanced: "Avancé" },
      ref: "Réf.",
      duration: "Durée",
      nextSession: "Prochaine session",
      location: "Lieu",
      priceFrom: "À partir de",
      perGroup: "/ groupe",
      instructor: "Formateur"
    }
  },
  en: {
    hero: {
      badge: "Platform of Excellence",
      titleStart: "Certified IT Training in ",
      titleHighlight: "AI, Cloud & Cybersecurity",
      titleEnd: "",
      subtitle: "Prepare for your ISTQB, AWS, Microsoft Azure certifications and more. Over 290 training sessions led by certified experts.",
      searchPlaceholder: "What do you want to learn today? (ex: Cloud, Python...)",
      searchButton: "Search",
      scroll: "Discover"
    },
    featured: {
      subtitle: "Featured Courses",
      title: "Our top training programs",
      description: "Discover our most in-demand courses, hand-picked by our experts to accelerate your career.",
      viewAll: "View full catalog",
      view: "Discover",
    },
    courses: {
      catalog: "Catalog",
      title: "Explore our courses",
      description: "Training programs created by Moroccan and international experts, updated regularly.",
      badges: {
        bestseller: "Best Seller",
        new: "New",
        ai: "AI Included"
      },
      progress: "Progress",
      view: "View",
      filters: {
        searchPlaceholder: "Search for a course...",
        allCategories: "All Categories",
        allPrices: "All Prices",
        free: "Free",
        paid: "Paid",
        noResults: "No courses match your search criteria.",
        loading: "Loading catalog...",
        clearAll: "Clear all",
        filtersTitle: "Filters",
        category: "Category",
        level: "Level",
        format: "Format",
        duration: "Duration",
        levels: {
          beginner: "Beginner",
          intermediate: "Intermediate",
          advanced: "Advanced",
          all: "All levels",
        },
        formats: {
          presentiel: "On-site",
          hybride: "Hybrid",
          "en-ligne": "Online",
        },
        durations: {
          "1": "1 day",
          "2-3": "2-3 days",
          "4-5": "4-5 days",
          "5+": "More than 5 days",
        },
      }
    },
    features: {
      subtitle: "Features",
      title: "The ultimate learning ecosystem.",
      description: "Everything you need to excel in tech, gathered on a single platform.",
      cards: {
        ai: {
          title: "24/7 AI Tutor",
          desc: "Get instant answers, code reviews, and personalized coaching from our AI."
        },
        adaptive: {
          title: "Adaptive Paths",
          desc: "Curriculums that adapt in real-time to your pace and goals."
        },
        projects: {
          title: "Real Projects",
          desc: "Build a portfolio with use cases directly pulled from the industry."
        },
        certifs: {
          title: "Blockchain Certificates",
          desc: "Tamper-proof diplomas, verifiable in one click by recruiters."
        }
      }
    },
    stats: {
      title: "ZiryabTec impact in numbers",
      items: {
        learners: "Active learners",
        courses: "Available courses",
        rating: "Average rating",
        hired: "Hiring rate"
      }
    },
    testimonials: {
      subtitle: "Testimonials",
      title: "What they say about us"
    },
    portfolio: {
      subtitle: "Portfolio",
      title: "Our",
      titleHighlight: "professional projects",
      description: "Discover the innovative projects designed and developed by our team of experts.",
      learnMore: "Learn more",
      backToPortfolio: "Back to portfolio",
      technologies: "Technologies used",
      objectives: "Project objectives",
      visitSite: "Visit website",
      detailSubtitle: "Portfolio Project",
    },
    pricing: {
      subtitle: "Pricing",
      title: "Invest in your future.",
      description: "Plans tailored to every stage of your career.",
      monthly: "Monthly",
      yearly: "Yearly (-20%)",
      plans: {
        basic: {
          name: "Essential",
          desc: "Perfect to get started in tech.",
          cta: "Get Started"
        },
        pro: {
          name: "Pro",
          desc: "For ambitious professionals.",
          cta: "Become Pro"
        },
        elite: {
          name: "Elite",
          desc: "The ultimate learning experience.",
          cta: "Join the Elite"
        }
      }
    },
    cta: {
      title: "Ready to transform your career?",
      subtitle: "Join the new generation of tech experts in Morocco.",
      primaryBtn: "Create my account",
      secondaryBtn: "View catalog"
    },
    footer: {
      description: "Tech learning reinvented. For Africa, by Africa.",
      links: {
        platform: {
          title: "Platform",
          items: ["Catalog", "Projects", "Certificates", "Pricing"]
        },
        company: {
          title: "Company",
          items: ["About", "Careers", "Blog", "Contact"]
        },
        legal: {
          title: "Legal",
          items: ["T&C", "Privacy", "Legal Notice"]
        }
      },
      rights: "© 2026 ZiryabTec. All rights reserved."
    },
    courseDetails: {
      objectives: "What you will learn",
      audience: "Who is this course for?",
      prerequisites: "Prerequisites",
      curriculum: "Course Curriculum",
      sessions: {
        title: "Session Types",
        inter: { label: "Inter-company", desc: "Training with other professionals", cta: "Request a quote" },
        intra: { label: "Intra-company", desc: "Private training for your team", cta: "Enroll" },
        surMesure: { label: "Customized", desc: "Customized program according to your needs", cta: "Request a quote" }
      },
      form: {
        name: "Full Name",
        email: "Professional Email",
        phone: "Phone",
        company: "Company",
        message: "Your message (optional)",
        submit: "Submit Request",
        success: "Your request has been sent successfully! An advisor will contact you within 24h."
      },
      level: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" },
      ref: "Ref.",
      duration: "Duration",
      nextSession: "Next session",
      location: "Location",
      priceFrom: "From",
      perGroup: "/ group",
      instructor: "Instructor"
    }
  }
};

/* ══════════════════════════════════════════════════════════
   TRANSLATED COURSES — with taxonomy fields
   Hierarchy: Theme → Category → Formation
   ══════════════════════════════════════════════════════════ */
export const translatedCourses: TranslatedCourse[] = [
  {
    id: "python-avance",
    themeId: "data-ai",
    categoryId: "data-science",
    rating: 4.8,
    students: 1240,
    duration: "18h 30min",
    durationDays: 3,
    price: 299,
    badge: "bestseller",
    level: "intermediate",
    format: "en-ligne",
    featured: true,
    color: "from-blue-600/20 to-cyan-600/20",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    fr: {
      title: "Python Avancé & Data Science",
      category: "Data Science",
      theme: "IA & Data",
      instructor: "Pr. Ahmed Benali",
    },
    en: {
      title: "Advanced Python & Data Science",
      category: "Data Science",
      theme: "AI & Data",
      instructor: "Prof. Ahmed Benali",
    }
  },
  {
    id: "react-nextjs",
    themeId: "tech",
    categoryId: "frontend",
    rating: 4.9,
    students: 890,
    duration: "24h 15min",
    durationDays: 4,
    price: 399,
    badge: "new",
    level: "advanced",
    format: "en-ligne",
    featured: true,
    color: "from-cyan-600/20 to-emerald-600/20",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    fr: {
      title: "React & Next.js — De Zéro au Déploiement",
      category: "Frontend",
      theme: "Technologie",
      instructor: "Sara El Mansouri",
    },
    en: {
      title: "React & Next.js — Zero to Deployment",
      category: "Frontend",
      theme: "Technology",
      instructor: "Sara El Mansouri",
    }
  },
  {
    id: "ai-practical",
    themeId: "data-ai",
    categoryId: "ml",
    rating: 4.7,
    students: 2100,
    duration: "32h",
    durationDays: 5,
    price: 499,
    badge: "ai",
    level: "intermediate",
    format: "hybride",
    featured: true,
    color: "from-purple-600/20 to-blue-600/20",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
    fr: {
      title: "Intelligence Artificielle Pratique",
      category: "Machine Learning",
      theme: "IA & Data",
      instructor: "Dr. Karim Fassi",
    },
    en: {
      title: "Practical Artificial Intelligence",
      category: "Machine Learning",
      theme: "AI & Data",
      instructor: "Dr. Karim Fassi",
    }
  },
  {
    id: "devops-aws",
    themeId: "tech",
    categoryId: "devops",
    rating: 4.6,
    students: 650,
    duration: "20h",
    durationDays: 3,
    price: 349,
    progress: 42,
    level: "intermediate",
    format: "en-ligne",
    color: "from-emerald-600/20 to-yellow-600/20",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop",
    fr: {
      title: "DevOps & Cloud — AWS + Docker",
      category: "DevOps & CI/CD",
      theme: "Technologie",
      instructor: "Youssef Amrani",
    },
    en: {
      title: "DevOps & Cloud — AWS + Docker",
      category: "DevOps & CI/CD",
      theme: "Technology",
      instructor: "Youssef Amrani",
    }
  },
  {
    id: "cybersecurity-hacking",
    themeId: "security",
    categoryId: "cybersec",
    rating: 4.8,
    students: 940,
    duration: "28h",
    durationDays: 5,
    price: 449,
    badge: "new",
    level: "advanced",
    format: "presentiel",
    color: "from-red-600/20 to-rose-600/20",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    fr: {
      title: "Cybersécurité : Hacking Éthique",
      category: "Cybersécurité",
      theme: "Cybersécurité",
      instructor: "Amine Chraibi",
    },
    en: {
      title: "Cybersecurity: Ethical Hacking",
      category: "Cybersecurity",
      theme: "Cybersecurity",
      instructor: "Amine Chraibi",
    }
  },
  {
    id: "microservices",
    themeId: "tech",
    categoryId: "backend",
    rating: 4.5,
    students: 410,
    duration: "26h 30min",
    durationDays: 4,
    price: 399,
    level: "advanced",
    format: "en-ligne",
    color: "from-green-600/20 to-teal-600/20",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    fr: {
      title: "Architecture Microservices",
      category: "Backend",
      theme: "Technologie",
      instructor: "Pr. Hassan El Fassi",
    },
    en: {
      title: "Microservices Architecture",
      category: "Backend",
      theme: "Technology",
      instructor: "Prof. Hassan El Fassi",
    }
  },
  {
    id: "ml-masterclass",
    themeId: "data-ai",
    categoryId: "ml",
    rating: 4.9,
    students: 210,
    duration: "35h",
    durationDays: 6,
    price: 549,
    badge: "ai",
    level: "advanced",
    format: "hybride",
    color: "from-purple-600/20 to-indigo-600/20",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
    fr: {
      title: "Machine Learning Masterclass",
      category: "Machine Learning",
      theme: "IA & Data",
      instructor: "Dr. Karim Fassi",
    },
    en: {
      title: "Machine Learning Masterclass",
      category: "Machine Learning",
      theme: "AI & Data",
      instructor: "Dr. Karim Fassi",
    }
  },
  {
    id: "powerbi",
    themeId: "data-ai",
    categoryId: "data-viz",
    rating: 4.7,
    students: 520,
    duration: "12h",
    durationDays: 2,
    price: 199,
    level: "beginner",
    format: "en-ligne",
    color: "from-yellow-400/20 to-orange-400/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    fr: {
      title: "Data Visualization avec PowerBI",
      category: "Data Visualization",
      theme: "IA & Data",
      instructor: "Nisrine Mansour",
    },
    en: {
      title: "Data Visualization with PowerBI",
      category: "Data Visualization",
      theme: "AI & Data",
      instructor: "Nisrine Mansour",
    }
  },
  {
    id: "ux-strategy",
    themeId: "design",
    categoryId: "ux-design",
    rating: 4.9,
    students: 310,
    duration: "15h",
    durationDays: 2,
    price: 299,
    badge: "new",
    level: "beginner",
    format: "presentiel",
    color: "from-pink-400/20 to-purple-400/20",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
    fr: {
      title: "UX Design Strategy",
      category: "Design",
      theme: "Design",
      instructor: "Lina Berrada",
    },
    en: {
      title: "UX Design Strategy",
      category: "Design",
      theme: "Design",
      instructor: "Lina Berrada",
    }
  }
];
