/**
 * Initialize scroll animation observer
 * Looks for elements with the class "hidden-element"
 * and adds the class "show-element" when they come into view
 */
export function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-element");
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
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
