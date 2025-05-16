import { useState } from "react";
import { useAnimation } from "@/hooks/use-animation";
import { RectangleEllipsis, MapPin, Linkedin, Github, Mail, Phone, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Informe um email válido" }),
  subject: z.string().min(3, { message: "O assunto deve ter pelo menos 3 caracteres" }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { ref: titleRef } = useAnimation<HTMLDivElement>();
  const { ref: infoRef } = useAnimation<HTMLDivElement>();
  const { ref: formRef } = useAnimation<HTMLDivElement>();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Formato a mensagem para o WhatsApp
      const whatsappMessage = `*Contato via Portfólio*%0A%0A*Nome:* ${data.name}%0A*Email:* ${data.email}%0A*Assunto:* ${data.subject}%0A%0A*Mensagem:*%0A${data.message.replace(/\n/g, '%0A')}`;
      
      // Cria a URL do WhatsApp com o número e a mensagem formatada
      const whatsappUrl = `https://wa.me/5562996635404?text=${whatsappMessage}`;
      
      // Abre o WhatsApp em uma nova aba
      window.open(whatsappUrl, '_blank');
      
      console.log("Form submitted", data);
      
      toast({
        title: "Redirecionando para WhatsApp",
        description: "Sua mensagem foi formatada e enviada para o WhatsApp!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao processar mensagem",
        description: "Ocorreu um erro ao processar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Discord-style background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: "linear-gradient(135deg, hsl(235, 85%, 12%), hsl(265, 85%, 15%))",
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
            <span className="text-primary">&lt;</span> Contato <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Tem um projeto em mente ou uma oportunidade de trabalho? Entre em contato comigo!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div ref={infoRef} className="hidden-element">
            <div className="bg-dark rounded-lg p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 font-poppins">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-dark p-3 rounded-lg hover-zoom">
                    <Mail className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:pedro.gualberto@email.com" className="text-gray-400 hover:text-primary transition-colors hover-zoom">
                      pedro.gualberto1203@email.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-dark p-3 rounded-lg hover-zoom">
                    <Phone className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <a href="https://wa.me/5562996635404" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover-zoom">
                      (62) 99663-5404
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-dark p-3 rounded-lg hover-zoom">
                    <MapPin className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Localização</h4>
                    <p className="text-gray-400">Goiânia, Goiás, Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-dark p-3 rounded-lg hover-zoom">
                    <Linkedin className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/pedro-gualberto-9a2b62316/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-primary transition-colors hover-zoom"
                    >
                      Pedro Gualberto
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-dark p-3 rounded-lg hover-zoom">
                    <Github className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/PedroGualberto1203" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-primary transition-colors hover-zoom"
                    >
                      PedroGualberto1203
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-dark p-3 rounded-lg hover-zoom">
                    <Youtube className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">YouTube</h4>
                    <a 
                      href="https://www.youtube.com/@DevAlvinegro" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-primary transition-colors hover-zoom"
                    >
                      @PedroByte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={formRef} className="hidden-element">
            <div className="bg-dark rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 font-poppins">Envie uma Mensagem</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome" 
                            className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="seu.email@exemplo.com" 
                            className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Assunto da mensagem" 
                            className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Sua mensagem" 
                            className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center hover-zoom"
                    disabled={isSubmitting}
                  >
                    <RectangleEllipsis className="mr-2 h-5 w-5" /> 
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
