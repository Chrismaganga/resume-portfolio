import { jsPDF } from 'jspdf';

export const generateResumePDF = () => {
  try {
    const doc = new jsPDF();
    
    // Add gradient background
    doc.setFillColor(147, 51, 234); // Purple
    doc.rect(0, 0, 210, 297, 'F');
    
    // Add white content area
    doc.setFillColor(255, 255, 255);
    doc.rect(10, 10, 190, 277, 'F');
    
    // Add enhanced watermark
    addEnhancedWatermark(doc);
    
    // Add header with logo area
    addHeaderWithLogo(doc);
    
    // Add contact information
    addContactInfo(doc);
    
    // Add skills section
    addSkillsSection(doc);
    
    // Add experience section
    addExperienceSection(doc);
    
    // Add projects section
    addProjectsSection(doc);
    
    // Add education section
    addEducationSection(doc);
    
    // Add footer with branding
    addFooter(doc);
    
    // Save the PDF
    doc.save("Chris_Maganga_Resume.pdf");
    
    console.log("PDF generated successfully!");
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Error generating PDF. Please try again.");
  }
};

// Enhanced header with logo area
const addHeaderWithLogo = (doc) => {
  // Add decorative header background
  doc.setFillColor(147, 51, 234);
  doc.rect(10, 10, 190, 25, 'F');
  
  // Add white text area
  doc.setFillColor(255, 255, 255);
  doc.rect(15, 15, 180, 15, 'F');
  
  // Main title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(147, 51, 234);
  doc.text("CHRIS MAGANGA", 20, 25);
  
  // Subtitle
  doc.setFontSize(14);
  doc.setTextColor(34, 197, 94);
  doc.text("Full Stack Developer & Software Engineer", 20, 30);
  
  // Add decorative line
  doc.setDrawColor(147, 51, 234);
  doc.setLineWidth(1);
  doc.line(20, 32, 190, 32);
  
  // Add logo placeholder (you can replace with actual logo)
  addLogoPlaceholder(doc);
};

// Add logo placeholder
const addLogoPlaceholder = (doc) => {
  // Create a simple logo using shapes
  const logoX = 160;
  const logoY = 20;
  
  // Background circle
  doc.setFillColor(147, 51, 234);
  doc.circle(logoX, logoY, 8, 'F');
  
  // Inner circle
  doc.setFillColor(255, 255, 255);
  doc.circle(logoX, logoY, 6, 'F');
  
  // Letter C
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(147, 51, 234);
  doc.text("C", logoX - 2, logoY + 2);
  
  // Add "Portfolio" text below
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("PORTFOLIO", logoX - 8, logoY + 12);
};

// Contact information
const addContactInfo = (doc) => {
  doc.setFontSize(12);
  doc.setTextColor(75, 85, 99);
  doc.setFont("helvetica", "bold");
  doc.text("CONTACT INFORMATION", 20, 50);
  
  doc.setFont("helvetica", "normal");
  const contactInfo = [
    "📧 chrismaganga3@gmail.com",
    "🌐 github.com/Chrismaganga",
    "💼 linkedin.com/in/chrismaganga",
    "📍 Cape Town, South Africa",
    "📱 +1 (555) 123-4567"
  ];
  
  contactInfo.forEach((info, index) => {
    doc.text(info, 20, 58 + (index * 6));
  });
};

// Skills section
const addSkillsSection = (doc) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(147, 51, 234);
  doc.text("TECHNICAL SKILLS", 20, 90);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(75, 85, 99);
  
  const skills = [
    "Frontend: React, Next.js, JavaScript, TypeScript, Tailwind CSS, HTML5, CSS3",
    "Backend: Python, Django, FastAPI, Node.js, Express.js, RESTful APIs",
    "Database: PostgreSQL, MongoDB, MySQL, Redis",
    "DevOps: Docker, AWS, CI/CD, Git, GitHub Actions",
    "Tools: VS Code, Figma, Adobe XD, Postman, Swagger",
    "Methodologies: Agile, Scrum, Test-Driven Development"
  ];
  
  skills.forEach((skill, index) => {
    doc.text(skill, 20, 98 + (index * 5));
  });
};

// Experience section
const addExperienceSection = (doc) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(147, 51, 234);
  doc.text("PROFESSIONAL EXPERIENCE", 20, 130);
  
  // Current position
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(34, 197, 94);
  doc.text("Senior Full Stack Developer", 20, 138);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(75, 85, 99);
  doc.text("2020 - Present | Remote", 20, 143);
  
  const experiences = [
    "• Architected and developed scalable web applications serving 10,000+ users",
    "• Led a team of 5 developers in implementing microservices architecture",
    "• Reduced application load time by 40% through performance optimization",
    "• Implemented CI/CD pipelines reducing deployment time by 60%",
    "• Mentored junior developers and conducted code reviews"
  ];
  
  experiences.forEach((exp, index) => {
    doc.text(exp, 20, 150 + (index * 4));
  });
  
  // Previous position
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(34, 197, 94);
  doc.text("Full Stack Developer", 20, 175);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(75, 85, 99);
  doc.text("2018 - 2020 | Tech Solutions Inc.", 20, 180);
  
  const prevExperiences = [
    "• Developed responsive web applications using React and Django",
    "• Created RESTful APIs handling 1M+ requests daily",
    "• Collaborated with UX/UI designers to implement pixel-perfect designs",
    "• Optimized database queries improving performance by 30%"
  ];
  
  prevExperiences.forEach((exp, index) => {
    doc.text(exp, 20, 187 + (index * 4));
  });
};

// Projects section
const addProjectsSection = (doc) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(147, 51, 234);
  doc.text("KEY PROJECTS", 20, 210);
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(34, 197, 94);
  doc.text("E-Commerce Platform", 20, 218);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99);
  doc.text("Built a full-stack e-commerce solution with React, Django, and PostgreSQL. Features include", 20, 223);
  doc.text("user authentication, payment processing, inventory management, and admin dashboard.", 20, 227);
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(34, 197, 94);
  doc.text("Task Management API", 20, 235);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99);
  doc.text("Developed a RESTful API using FastAPI with real-time updates via WebSocket. Includes", 20, 240);
  doc.text("JWT authentication, role-based access control, and comprehensive API documentation.", 20, 244);
};

// Education section
const addEducationSection = (doc) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(147, 51, 234);
  doc.text("EDUCATION", 20, 255);
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(34, 197, 94);
  doc.text("Bachelor of Science in Computer Science", 20, 263);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99);
  doc.text("University of Technology | 2014 - 2018", 20, 268);
  doc.text("GPA: 3.8/4.0 | Magna Cum Laude", 20, 272);
};

// Enhanced footer
const addFooter = (doc) => {
  // Add decorative footer line
  doc.setDrawColor(147, 51, 234);
  doc.setLineWidth(1);
  doc.line(20, 280, 190, 280);
  
  // Footer text
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("Generated from Portfolio Website", 20, 285);
  doc.text("www.chrismaganga.dev", 20, 289);
  doc.text(new Date().toLocaleDateString(), 170, 285);
  doc.text("Page 1 of 1", 170, 289);
};

// Enhanced watermark function
const addEnhancedWatermark = (doc) => {
  try {
    // Save current graphics state
    doc.saveGraphicsState();
    
    // Set watermark properties
    doc.setFontSize(80);
    doc.setTextColor(240, 240, 240); // Very light gray
    doc.setFont("helvetica", "bold");
    
    // Add diagonal watermarks
    const watermarkText = "PORTFOLIO";
    const angle = -45;
    
    // Multiple watermark positions
    const positions = [
      { x: 30, y: 80 },
      { x: 80, y: 120 },
      { x: 130, y: 160 },
      { x: 60, y: 200 },
      { x: 110, y: 240 }
    ];
    
    positions.forEach(pos => {
      doc.saveGraphicsState();
      doc.translate(pos.x, pos.y);
      doc.rotate(angle * Math.PI / 180);
      doc.text(watermarkText, 0, 0);
      doc.restoreGraphicsState();
    });
    
    // Add subtle pattern watermarks
    addPatternWatermarks(doc);
    
    // Add corner decorations
    addCornerDecorations(doc);
    
    // Add border watermarks
    addBorderWatermarks(doc);
    
    // Restore graphics state
    doc.restoreGraphicsState();
    
  } catch (error) {
    console.error("Error adding watermark:", error);
  }
};

// Add pattern watermarks
const addPatternWatermarks = (doc) => {
  doc.setFontSize(20);
  doc.setTextColor(245, 245, 245);
  
  // Add small pattern elements
  const patterns = ["⚡", "🚀", "💻", "🔧", "⭐"];
  const patternPositions = [
    { x: 40, y: 60 },
    { x: 160, y: 100 },
    { x: 50, y: 180 },
    { x: 170, y: 220 },
    { x: 90, y: 260 }
  ];
  
  patternPositions.forEach((pos, index) => {
    doc.text(patterns[index % patterns.length], pos.x, pos.y);
  });
};

// Add corner decorations
const addCornerDecorations = (doc) => {
  const cornerSize = 15;
  const corners = [
    { x: 20, y: 20 },
    { x: 190, y: 20 },
    { x: 20, y: 280 },
    { x: 190, y: 280 }
  ];
  
  corners.forEach(corner => {
    // Outer circle
    doc.setFillColor(147, 51, 234);
    doc.circle(corner.x, corner.y, cornerSize, 'F');
    
    // Inner circle
    doc.setFillColor(255, 255, 255);
    doc.circle(corner.x, corner.y, cornerSize - 3, 'F');
    
    // Center dot
    doc.setFillColor(147, 51, 234);
    doc.circle(corner.x, corner.y, 3, 'F');
  });
};

// Add border watermarks
const addBorderWatermarks = (doc) => {
  doc.setDrawColor(147, 51, 234);
  doc.setLineWidth(0.5);
  
  // Add decorative borders
  for (let i = 0; i < 3; i++) {
    const offset = i * 2;
    doc.rect(15 + offset, 15 + offset, 180 - (offset * 2), 267 - (offset * 2));
  }
  
  // Add side decorations
  const sideDecorations = [
    { x: 12, y: 50 },
    { x: 12, y: 100 },
    { x: 12, y: 150 },
    { x: 12, y: 200 },
    { x: 12, y: 250 },
    { x: 198, y: 50 },
    { x: 198, y: 100 },
    { x: 198, y: 150 },
    { x: 198, y: 200 },
    { x: 198, y: 250 }
  ];
  
  sideDecorations.forEach(pos => {
    doc.setFillColor(147, 51, 234);
    doc.circle(pos.x, pos.y, 2, 'F');
  });
};
