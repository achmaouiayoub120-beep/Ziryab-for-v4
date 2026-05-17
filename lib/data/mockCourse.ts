import { Course } from "./types";
import { formationsData } from "./formations";

// Construit un détail de cours dynamique à partir des données réelles
export const getCourseById = (id: string): Course => {
  const f = formationsData.find(f => f.reference === id) || formationsData[0];
  
  return {
    id: f.reference,
    ref: f.reference,
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    logoImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", // Logo générique pour l'IT
    rating: 4.8,
    reviewCount: Math.floor(Math.random() * 500) + 50,
    duration: f.duree,
    level: "intermediate",
    sessions: {
      surMesure: true
    },
    fr: {
      title: f.titre,
      subtitle: "Formation professionnelle dispensée par les experts ZiryabTec.",
      category: f.categorie,
      theme: f.theme,
      instructor: "Expert ZiryabTec",
      objectives: [
        "Comprendre les enjeux et les fondamentaux liés au domaine",
        "Maîtriser les outils et les technologies de l'état de l'art",
        "Mettre en pratique les concepts théoriques sur des cas réels",
        "Valider les compétences acquises"
      ],
      audience: "Professionnels de l'IT, Ingénieurs, et toute personne souhaitant développer ses compétences en " + f.theme,
      prerequisites: [
        "Bases en informatique ou dans le domaine " + f.theme,
        "Motivation et curiosité technique"
      ],
      curriculum: [
        {
          title: "Introduction et fondamentaux",
          lessons: [
            { title: "Présentation des concepts clés", duration: "1h", type: "video" },
            { title: "Mise en place de l'environnement", duration: "45m", type: "document" }
          ]
        },
        {
          title: "Approfondissement et mise en pratique",
          lessons: [
            { title: "Cas d'usage", duration: "2h", type: "video" },
            { title: "Ateliers pratiques", duration: "3h", type: "document" }
          ]
        }
      ]
    },
    en: {
      title: f.titre,
      subtitle: "Professional training provided by ZiryabTec experts.",
      category: f.categorie,
      theme: f.theme,
      instructor: "ZiryabTec Expert",
      objectives: [
        "Understand the challenges and fundamentals related to the field",
        "Master state-of-the-art tools and technologies",
        "Apply theoretical concepts to real-world cases",
        "Validate acquired skills"
      ],
      audience: "IT Professionals, Engineers, and anyone wanting to develop skills in " + f.theme,
      prerequisites: [
        "Basic knowledge in IT or in the " + f.theme + " field",
        "Motivation and technical curiosity"
      ],
      curriculum: [
        {
          title: "Introduction and fundamentals",
          lessons: [
            { title: "Presentation of key concepts", duration: "1h", type: "video" },
            { title: "Setting up the environment", duration: "45m", type: "document" }
          ]
        },
        {
          title: "Deep dive and practice",
          lessons: [
            { title: "Use cases", duration: "2h", type: "video" },
            { title: "Practical workshops", duration: "3h", type: "document" }
          ]
        }
      ]
    }
  };
};

export const mockCourse = getCourseById("CP-TH"); // Cours par défaut pour éviter les crashs si appelé directement
