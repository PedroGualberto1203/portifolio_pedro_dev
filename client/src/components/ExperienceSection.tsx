import { useAnimation } from "@/hooks/use-animation";
import { Briefcase, Code, Laptop } from "lucide-react";
import { experiences } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const { ref: titleRef } = useAnimation<HTMLDivElement>();
  const { ref: timelineRef } = useAnimation<HTMLDivElement>();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="text-white" />;
      case 'code':
        return <Code className="text-white" />;
      case 'laptop-code':
        return <Laptop className="text-white" />;
      default:
        return <Briefcase className="text-white" />;
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      {/* Tech background */}
      <div 
        className="absolute inset-0 bg-dark z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          opacity: 0.1
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16 hidden-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            <span className="text-primary">&lt;</span> Experiência Profissional <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="timeline-line"></div>
            
            {experiences.map((experience, index) => {
              const { ref: expRef } = useAnimation<HTMLDivElement>();
              return (
                <div 
                  ref={expRef}
                  key={index} 
                  className={`hidden-element relative pl-12 ${index !== experiences.length - 1 ? 'pb-12' : ''}`}
                >
                  <div className="absolute left-0 top-0 w-9 h-9 bg-primary rounded-full z-10 flex items-center justify-center">
                    {getIcon(experience.icon)}
                  </div>
                  <div className="bg-dark-light p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between flex-wrap mb-2">
                      <h3 className="text-xl font-bold font-poppins">{experience.title}</h3>
                      <span className="text-primary whitespace-nowrap">{experience.period}</span>
                    </div>
                    <h4 className="text-lg text-gray-300 mb-4">{experience.company}</h4>
                    <p className="text-gray-400 mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-sm px-3 py-1 rounded-full bg-primary bg-opacity-20 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
