import { useAnimation } from "@/hooks/use-animation";
import { Code, Database, Cog, Bug } from "lucide-react";
import { skills, competencies, otherTechnologies } from "@/data/portfolio-data";

export default function SkillsSection() {
  const { ref: titleRef } = useAnimation<HTMLDivElement>();
  const { ref: techRef } = useAnimation<HTMLDivElement>();
  const { ref: compRef } = useAnimation<HTMLDivElement>();
  const { ref: otherRef } = useAnimation<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 bg-dark-light relative">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16 hidden-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            <span className="text-primary">&lt;</span> Habilidades <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div ref={techRef} className="hidden-element">
            <h3 className="text-2xl font-bold mb-6 font-poppins">Tecnologias</h3>
            
            {skills.map((skill, index) => (
              <div className="mb-4" key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-value" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div ref={compRef} className="hidden-element">
            <h3 className="text-2xl font-bold mb-6 font-poppins">Competências</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {competencies.map((competency, index) => (
                <div className="bg-dark p-4 rounded-lg shadow-lg" key={index}>
                  {getIcon(competency.icon, "text-primary text-3xl mb-2")}
                  <h4 className="text-lg font-medium mb-1">{competency.name}</h4>
                  <p className="text-gray-400 text-sm">{competency.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div ref={otherRef} className="hidden-element mt-12">
          <h3 className="text-2xl font-bold mb-6 font-poppins text-center">Outras Tecnologias</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {otherTechnologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-dark rounded-full border border-primary text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getIcon(iconName: string, className: string) {
  switch (iconName) {
    case 'code':
      return <Code className={className} />;
    case 'database':
      return <Database className={className} />;
    case 'cog':
      return <Cog className={className} />;
    case 'bug':
      return <Bug className={className} />;
    default:
      return <Code className={className} />;
  }
}
