import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const technicalSkills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, icon: "Code" },
        { name: "JavaScript", level: 90, icon: "Zap" },
        { name: "HTML5 & CSS3", level: 95, icon: "Layout" },
        { name: "Tailwind CSS", level: 90, icon: "Palette" }
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", level: 85, icon: "Server" },
        { name: "MongoDB", level: 80, icon: "Database" },
        { name: "API Development", level: 85, icon: "Link" },
        { name: "Authentication", level: 80, icon: "Shield" }
      ]
    },
    {
      category: "Design & UX",
      skills: [
        { name: "UI/UX Design", level: 85, icon: "Figma" },
        { name: "Responsive Design", level: 95, icon: "Smartphone" },
        { name: "User Experience", level: 90, icon: "Users" },
        { name: "Prototyping", level: 80, icon: "Layers" }
      ]
    }
  ];

  const certifications = [
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      icon: "Award",
      color: "bg-primary"
    },
    {
      name: "JavaScript Algorithms",
      issuer: "FreeCodeCamp",
      year: "2022",
      icon: "Code",
      color: "bg-warning"
    },
    {
      name: "UX Design Fundamentals",
      issuer: "Google",
      year: "2023",
      icon: "Palette",
      color: "bg-success"
    },
    {
      name: "Web Performance",
      issuer: "Google",
      year: "2024",
      icon: "Zap",
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Habilidades & <span className="text-gradient-primary">Certificações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sempre em constante aprendizado para oferecer as melhores soluções 
            tecnológicas para nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Competências Técnicas</h3>
            
            {technicalSkills.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-brand-sm border p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{category.category}</span>
                </h4>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name={skill.icon} size={16} color="var(--color-primary)" />
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Certificações</h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-brand-sm border p-6 hover:shadow-brand-md transition-all duration-300 card-hover"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center`}>
                      <Icon name={cert.icon} size={20} color="white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                    </div>
                    <Icon name="ExternalLink" size={16} color="var(--color-muted-foreground)" />
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Philosophy */}
            <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="BookOpen" size={16} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Aprendizado Contínuo</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A tecnologia evolui rapidamente, e eu me comprometo a estar sempre 
                    atualizado com as melhores práticas e ferramentas do mercado para 
                    oferecer soluções modernas e eficientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;