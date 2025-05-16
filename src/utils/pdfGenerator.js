import { jsPDF } from 'jspdf';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  
  // Set font styles
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  
  // Add title
  doc.text("Chris Maganga", 20, 20);
  
  // Add subtitle
  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text("Full Stack Developer", 20, 30);
  
  // Add contact information
  doc.setFontSize(12);
  doc.text("Contact Information:", 20, 45);
  doc.text("Email: chrismaganga3@gmail.com", 20, 55);
  doc.text("GitHub: github.com/Chrismaganga", 20, 65);
  doc.text("LinkedIn: linkedin.com/in/chrismaganga", 20, 75);
  
  // Add skills section
  doc.setFont("helvetica", "bold");
  doc.text("Skills:", 20, 95);
  doc.setFont("helvetica", "normal");
  doc.text("• JavaScript, React, Next.js", 20, 105);
  doc.text("• Python, Django, FastAPI", 20, 115);
  doc.text("• HTML, CSS, Tailwind CSS", 20, 125);
  doc.text("• Git, GitHub", 20, 135);
  
  // Add experience section
  doc.setFont("helvetica", "bold");
  doc.text("Experience:", 20, 155);
  doc.setFont("helvetica", "normal");
  doc.text("Full Stack Developer - 6 years", 20, 165);
  doc.text("• Built and designed software applications", 20, 175);
  doc.text("• Developed web applications using modern technologies", 20, 185);
  doc.text("• Implemented responsive and user-friendly interfaces", 20, 195);
  
  // Save the PDF
  doc.save("Chris_Maganga_Resume.pdf");
}; 