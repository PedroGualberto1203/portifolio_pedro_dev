import { useState } from "react";
import { useAnimation } from "@/hooks/use-animation";
import { Github, ExternalLink } from "lucide-react";
import { projects, projectCategories } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const { ref: titleRef } = useAnimation<HTMLDivElement>();
  const { ref: filterRef } = useAnimation<HTMLDivElement>();
  const { ref: moreRef } = useAnimation<HTMLDivElement>();

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section id="projects" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16 hidden-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            <span className="text-primary">&lt;</span> Projetos <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Confira alguns dos projetos que desenvolvi utilizando C# e outras tecnologias.
          </p>
        </div>
        
        <div ref={filterRef} className="flex justify-center mb-10 hidden-element">
          <div className="flex space-x-2 flex-wrap justify-center gap-2">
            <button 
              className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-dark text-white hover:bg-primary transition-colors'}`}
              onClick={() => handleFilterClick('all')}
            >
              Todos
            </button>
            {projectCategories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full ${activeFilter === category.id ? 'bg-primary text-white' : 'bg-dark text-white hover:bg-primary transition-colors'}`}
                onClick={() => handleFilterClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { ref: projectRef } = useAnimation<HTMLDivElement>();
            const shouldDisplay = activeFilter === 'all' || project.categories.includes(activeFilter);
            
            return (
              <div 
                ref={projectRef}
                key={index}
                className={`hidden-element project-card`}
                style={{ display: shouldDisplay ? 'block' : 'none' }}
              >
                <div className="bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 font-poppins text-primary">{project.title}</h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-2 py-1 rounded-full bg-primary bg-opacity-20 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex space-x-3">
                      {project.repo && (
                        <a 
                          href={project.repo} 
                          className="text-primary hover:text-primary-light" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 inline-block h-4 w-4" /> Repositório
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          className="text-primary hover:text-primary-light" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1 inline-block h-4 w-4" /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div ref={moreRef} className="text-center mt-12 hidden-element">
          <a 
            href="https://github.com/PedroGualberto1203" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors"
          >
            <Github className="mr-2 inline-block h-5 w-5" /> Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
