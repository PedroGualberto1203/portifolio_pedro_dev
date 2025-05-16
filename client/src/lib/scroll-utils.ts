/**
 * Initialize scroll animation observer
 * Looks for elements with the class "hidden-element"
 * and adds/removes the class "show-element" when they come in/out of view
 */
export function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Quando o elemento entra na viewport, adiciona a classe show-element
      if (entry.isIntersecting) {
        entry.target.classList.add("show-element");
      } 
      // Quando o elemento sai da viewport, remove a classe show-element
      else {
        entry.target.classList.remove("show-element");
      }
      // Não desconecta o observer para que o efeito aconteça sempre no scroll
    });
  }, {
    root: null,
    rootMargin: "-50px", // Margem negativa para que o efeito comece um pouco antes do elemento entrar totalmente na tela
    threshold: 0.15 // Aumentado para que a animação ocorra quando mais do elemento estiver visível
  });

  // Get all elements with the hidden-element class
  const hiddenElements = document.querySelectorAll(".hidden-element");
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
}

/**
 * Initialize smooth scrolling for anchor links
 */
export function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
