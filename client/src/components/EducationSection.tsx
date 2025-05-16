import { useAnimation } from "@/hooks/use-animation";
import { Award } from "lucide-react";
import { education, certifications } from "@/data/portfolio-data";

export default function EducationSection() {
  const { ref: titleRef } = useAnimation<HTMLDivElement>();
  const { ref: educationRef } = useAnimation<HTMLDivElement>();
  const { ref: certificationRef } = useAnimation<HTMLDivElement>();

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
            <h3 className="text-2xl font-bold mb-8 font-poppins border-b border-primary pb-2">
              Formação Acadêmica
            </h3>
            
            {education.map((item, index) => (
              <div className="bg-dark-light p-6 rounded-lg shadow-lg mb-6 hover-zoom" key={index}>
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
          
          <div ref={certificationRef} className="hidden-element">
            <h3 className="text-2xl font-bold mb-8 font-poppins border-b border-primary pb-2">
              Certificações
            </h3>
            
            <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
