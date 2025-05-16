import { useEffect, useState, useRef } from "react";
import { RectangleEllipsis, Code, ChevronDown, Github, Linkedin } from "lucide-react";
import { useAnimation } from "@/hooks/use-animation";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const { ref: leftColRef } = useAnimation<HTMLDivElement>();
  const { ref: rightColRef } = useAnimation<HTMLDivElement>();

  const specialties = [
    'Desenvolvedor Backend', 
    'Especialista em C#', 
    'Desenvolvedor .NET', 
    'Engenheiro de Software'
  ];

  useEffect(() => {
    const typeText = () => {
      const specialty = specialties[currentIndex];
      let typingSpeed = 50; // Faster typing speed
      
      if (isDeleting) {
        setTypedText(specialty.substring(0, typedText.length - 1));
        typingSpeed = 30; // Faster deletion
      } else {
        setTypedText(specialty.substring(0, typedText.length + 1));
        typingSpeed = 50; // Faster typing
      }
      
      if (!isDeleting && typedText === specialty) {
        setIsDeleting(true);
        typingSpeed = 1000; // Shorter pause at end
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % specialties.length);
        typingSpeed = 300; // Shorter pause before typing next
      }
      
      animationRef.current = setTimeout(typeText, typingSpeed);
    };
    
    // Start typing effect faster
    animationRef.current = setTimeout(typeText, 500);
    
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [typedText, currentIndex, isDeleting, specialties]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Discord-style background */}
      <div 
        className="absolute inset-0 bg-dark-light z-0" 
        style={{
          background: "linear-gradient(45deg, hsl(235, 85%, 15%), hsl(260, 85%, 20%), hsl(290, 70%, 20%))",
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}
      ></div>
      {/* Background grid overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "radial-gradient(hsla(260, 100%, 85%, 0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.5
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-12 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div ref={leftColRef} className="hidden-element">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
              Olá, eu sou<br />
              <span className="text-primary">Pedro Gualberto</span>
            </h1>
            <div className="text-xl md:text-2xl mb-6 flex">
              <span ref={textRef}>{typedText}</span>
              <span ref={cursorRef} className="typed-cursor"></span>
            </div>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              Especializado em C# e desenvolvimento backend, construindo soluções robustas e eficientes para problemas complexos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center hover-zoom"
              >
                <RectangleEllipsis className="mr-2 h-5 w-5" /> Contato
              </a>
              <a 
                href="#projects" 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center hover-zoom"
              >
                <Code className="mr-2 h-5 w-5" /> Projetos
              </a>
            </div>
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://github.com/PedroGualberto1203" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-gray-400 hover:text-primary transition-colors hover-zoom"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pedro-gualberto-9a2b62316/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-gray-400 hover:text-primary transition-colors hover-zoom"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div ref={rightColRef} className="hidden-element flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
              alt="Developer workspace" 
              className="rounded-full border-4 border-primary w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
        <a href="#skills" className="text-primary">
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
