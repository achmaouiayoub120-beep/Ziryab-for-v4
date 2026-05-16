"use client";

import React, { useRef, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { TranslatedCourse } from "@/lib/data/types";
import { dictionaries } from "@/lib/i18n/dictionaries";

interface DownloadCatalogButtonProps {
  courses: TranslatedCourse[];
  language: "fr" | "en";
}

export default function DownloadCatalogButton({ courses, language }: DownloadCatalogButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const templateRef = useRef<HTMLDivElement>(null);
  const t = dictionaries[language].courses;

  const handleDownload = async () => {
    if (!templateRef.current) return;
    
    setIsGenerating(true);
    try {
      // Show the template briefly for capture (it's off-screen)
      const element = templateRef.current;
      
      // Use html2canvas to capture the element
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      const canvasWidth = imgWidth * ratio;
      const canvasHeight = imgHeight * ratio;
      
      const marginX = (pdfWidth - canvasWidth) / 2;
      const marginY = 20; // Some top margin
      
      pdf.addImage(imgData, "PNG", marginX, marginY, canvasWidth, canvasHeight);
      pdf.save(language === "fr" ? "Catalogue_ZiryabTec.pdf" : "ZiryabTec_Catalog.pdf");
    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert("Une erreur est survenue lors de la génération du PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:scale-[0.98] active:scale-95 shadow-md shadow-[var(--accent)]/30 disabled:opacity-70"
      >
        {isGenerating ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <Download size={18} />
        )}
        {isGenerating 
          ? (language === "fr" ? "Génération..." : "Generating...") 
          : (language === "fr" ? "Télécharger le Catalogue PDF" : "Download PDF Catalog")}
      </button>

      {/* Hidden PDF Template (Rendered off-screen) */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <div 
          ref={templateRef} 
          style={{ 
            width: "800px", 
            padding: "60px", 
            backgroundColor: "#fff", 
            fontFamily: "system-ui, sans-serif",
            color: "#111"
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "4px solid #1A56DB", paddingBottom: "20px", marginBottom: "40px" }}>
            <div>
              <h1 style={{ fontSize: "32px", margin: "0", fontWeight: "800", color: "#111" }}>
                {language === "fr" ? "Catalogue des Formations" : "Course Catalog"} 2026
              </h1>
              <p style={{ fontSize: "16px", margin: "5px 0 0 0", color: "#555" }}>
                ZiryabTec Formation — Elite Tech Academy
              </p>
            </div>
            <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
          </div>

          {/* List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {courses.map((course) => (
              <div key={course.id} style={{ padding: "20px", borderBottom: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3 style={{ fontSize: "20px", margin: "0", fontWeight: "700", color: "#1A56DB" }}>
                    {course[language].title}
                  </h3>
                  <span style={{ fontSize: "12px", backgroundColor: "#EBF2FF", color: "#1A56DB", padding: "4px 10px", borderRadius: "6px", fontWeight: "600", textTransform: "uppercase" }}>
                    {course[language].category}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#555" }}>
                  <span><strong>{language === 'fr' ? 'Formateur' : 'Instructor'}:</strong> {course[language].instructor}</span>
                  <span><strong>{language === 'fr' ? 'Niveau' : 'Level'}:</strong> {dictionaries[language].courses.filters.levels[course.level as keyof typeof dictionaries["fr"]["courses"]["filters"]["levels"]]}</span>
                  <span><strong>{language === 'fr' ? 'Durée' : 'Duration'}:</strong> {course.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ marginTop: "60px", borderTop: "1px solid #E8E4DC", paddingTop: "20px", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#999" }}>
            <span>ZiryabTec Formation</span>
            <span>https://ziryab-for-v4.vercel.app</span>
          </div>
        </div>
      </div>
    </>
  );
}
