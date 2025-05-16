import { jsPDF } from 'jspdf';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  
  // Add gradient background
  const gradient = doc.setFillColor(147, 51, 234); // Purple
  doc.rect(0, 0, 210, 297, 'F');
  
  // Add white content area
  doc.setFillColor(255, 255, 255);
  doc.rect(10, 10, 190, 277, 'F');
  
  // Set font styles for header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(147, 51, 234); // Purple
  doc.text("Chris Maganga", 20, 30);
  
  // Add subtitle
  doc.setFontSize(16);
  doc.setTextColor(34, 197, 94); // Green
  doc.text("Full Stack Developer", 20, 40);
  
  // Add decorative line
  doc.setDrawColor(147, 51, 234);
  doc.setLineWidth(0.5);
  doc.line(20, 45, 190, 45);
  
  // Add contact information
  doc.setFontSize(12);
  doc.setTextColor(75, 85, 99); // Gray-600
  doc.text("Contact Information", 20, 60);
  doc.setFont("helvetica", "normal");
  doc.text("Email: chrismaganga3@gmail.com", 20, 70);
  doc.text("GitHub: github.com/Chrismaganga", 20, 80);
  doc.text("LinkedIn: linkedin.com/in/chrismaganga", 20, 90);
  
  // Add skills section
  doc.setFont("helvetica", "bold");
  doc.setTextColor(147, 51, 234);
  doc.text("Technical Skills", 20, 110);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(75, 85, 99);
  
  // Create a two-column layout for skills
  const skills = [
    "• JavaScript, React, Next.js",
    "• Python, Django, FastAPI",
    "• HTML, CSS, Tailwind CSS",
    "• Git, GitHub",
    "• RESTful APIs",
    "• Database Design",
    "• Responsive Design",
    "• Agile Methodologies"
  ];
  
  skills.forEach((skill, index) => {
    const x = index < 4 ? 20 : 105;
    const y = 120 + ((index % 4) * 10);
    doc.text(skill, x, y);
  });
  
  // Add experience section
  doc.setFont("helvetica", "bold");
  doc.setTextColor(147, 51, 234);
  doc.text("Professional Experience", 20, 170);
  
  // Experience details
  doc.setFont("helvetica", "bold");
  doc.setTextColor(34, 197, 94);
  doc.text("Full Stack Developer", 20, 180);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(75, 85, 99);
  doc.text("6 Years of Experience", 20, 190);
  
  const experiences = [
    "• Built and designed software applications using modern technologies",
    "• Developed responsive web applications with React and Next.js",
    "• Implemented RESTful APIs using Python, Django, and FastAPI",
    "• Created user-friendly interfaces with Tailwind CSS",
    "• Collaborated with cross-functional teams using Agile methodologies",
    "• Optimized application performance and user experience"
  ];
  
  experiences.forEach((exp, index) => {
    doc.text(exp, 20, 200 + (index * 10));
  });
  
  // Add footer
  doc.setFontSize(10);
  doc.setTextColor(147, 51, 234);
  doc.text("Generated from Portfolio", 20, 280);
  doc.text(new Date().toLocaleDateString(), 170, 280);
  
  // Save the PDF
  doc.save("Chris_Maganga_Resume.pdf");
}; 