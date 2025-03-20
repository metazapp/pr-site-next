export function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll(".fade-in");
    hiddenElements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }