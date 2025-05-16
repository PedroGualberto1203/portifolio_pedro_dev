import { useAnimation } from "@/hooks/use-animation";
import { useState } from "react";
import { Award, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { education, certifications } from "@/data/portfolio-data";

export default function EducationSection() {
  const { ref: titleRef } = useAnimation<HTMLDivElement>();
  const { ref: educationRef } = useAnimation<HTMLDivElement>();
  const { ref: certificationRef } = useAnimation<HTMLDivElement>();
  
  const [activeEducationIndex, setActiveEducationIndex] = useState(0);
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [showAllEducation, setShowAllEducation] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const nextEducation = () => {
    setActiveEducationIndex((prev) => 
      prev === education.length - 1 ? 0 : prev + 1
    );
  };

  const prevEducation = () => {
    setActiveEducationIndex((prev) => 
      prev === 0 ? education.length - 1 : prev - 1
    );
  };

  const nextCert = () => {
    setActiveCertIndex((prev) => 
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  const prevCert = () => {
    setActiveCertIndex((prev) => 
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  const toggleAllEducation = () => {
    setShowAllEducation(!showAllEducation);
  };

  const toggleAllCerts = () => {
    setShowAllCerts(!showAllCerts);
  };

  return (
    <section id="education" className="py-20 relative">
      {/* Discord-style background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: "linear-gradient(220deg, hsl(260, 85%, 15%), hsl(235, 85%, 12%))",
          backgroundSize: "cover"
        }}
      ></div>
      {/* Background grid overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "radial-gradient(hsla(270, 100%, 85%, 0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.8
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16 hidden-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            <span className="text-primary">&lt;</span> Formação & Certificações <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div ref={educationRef} className="hidden-element">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold font-poppins border-b border-primary pb-2">
                Formação Acadêmica
              </h3>
              <button 
                onClick={toggleAllEducation}
                className="text-primary hover:text-primary-light hover-zoom"
                aria-label={showAllEducation ? "Fechar todas" : "Ver todas"}
              >
                {showAllEducation ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
            </div>
            
            {showAllEducation ? (
              // Mostra todas as formações quando expandido
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 education-scrollbar">
                {education.map((item, index) => (
                  <div className="bg-dark-light p-6 rounded-lg shadow-lg hover-zoom" key={index}>
                    <div className="flex justify-between flex-wrap mb-2">
                      <h4 className="text-xl font-bold font-poppins">{item.degree}</h4>
                      <span className="text-primary whitespace-nowrap">{item.period}</span>
                    </div>
                    <h5 className="text-lg text-gray-300 mb-4">{item.institution}</h5>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              // Mostra apenas formação ativa com controles de navegação
              <div className="relative">
                <div className="bg-dark-light p-6 rounded-lg shadow-lg hover-zoom min-h-[250px] transition-all duration-300 ease-in-out">
                  <div className="flex justify-between flex-wrap mb-2">
                    <h4 className="text-xl font-bold font-poppins">{education[activeEducationIndex].degree}</h4>
                    <span className="text-primary whitespace-nowrap">{education[activeEducationIndex].period}</span>
                  </div>
                  <h5 className="text-lg text-gray-300 mb-4">{education[activeEducationIndex].institution}</h5>
                  <p className="text-gray-400">
                    {education[activeEducationIndex].description}
                  </p>
                </div>
                
                {education.length > 1 && (
                  <div className="flex justify-between mt-4">
                    <button 
                      onClick={prevEducation} 
                      className="p-2 bg-dark rounded-full hover:bg-primary hover-zoom"
                      aria-label="Formação anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="text-center text-sm text-gray-400">
                      {activeEducationIndex + 1} / {education.length}
                    </div>
                    <button 
                      onClick={nextEducation} 
                      className="p-2 bg-dark rounded-full hover:bg-primary hover-zoom"
                      aria-label="Próxima formação"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div ref={certificationRef} className="hidden-element">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold font-poppins border-b border-primary pb-2">
                Certificações
              </h3>
              <button 
                onClick={toggleAllCerts}
                className="text-primary hover:text-primary-light hover-zoom"
                aria-label={showAllCerts ? "Fechar todas" : "Ver todas"}
              >
                {showAllCerts ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
            </div>
            
            {showAllCerts ? (
              // Mostra todas as certificações quando expandido
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 certifications-scrollbar">
                {certifications.map((cert, index) => (
                  <div className="bg-dark-light p-6 rounded-lg shadow-lg hover-zoom" key={index}>
                    <h4 className="text-xl font-bold font-poppins mb-2">{cert.name}</h4>
                    <div className="flex items-center mb-3">
                      <Award className="text-primary mr-2 h-5 w-5" />
                      <span className="text-gray-300">{cert.issuer}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-gray-400">{cert.year}</span>
                    </div>
                    <p className="text-gray-400">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              // Mostra apenas certificação ativa com controles de navegação
              <div className="relative">
                <div className="bg-dark-light p-6 rounded-lg shadow-lg hover-zoom min-h-[250px] transition-all duration-300 ease-in-out">
                  <h4 className="text-xl font-bold font-poppins mb-2">{certifications[activeCertIndex].name}</h4>
                  <div className="flex items-center mb-3">
                    <Award className="text-primary mr-2 h-5 w-5" />
                    <span className="text-gray-300">{certifications[activeCertIndex].issuer}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-400">{certifications[activeCertIndex].year}</span>
                  </div>
                  <p className="text-gray-400">
                    {certifications[activeCertIndex].description}
                  </p>
                </div>
                
                {certifications.length > 1 && (
                  <div className="flex justify-between mt-4">
                    <button 
                      onClick={prevCert} 
                      className="p-2 bg-dark rounded-full hover:bg-primary hover-zoom"
                      aria-label="Certificação anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="text-center text-sm text-gray-400">
                      {activeCertIndex + 1} / {certifications.length}
                    </div>
                    <button 
                      onClick={nextCert} 
                      className="p-2 bg-dark rounded-full hover:bg-primary hover-zoom"
                      aria-label="Próxima certificação"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
