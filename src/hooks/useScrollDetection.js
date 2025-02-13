import { useEffect } from "react"

export const useScrollDetection = (sectionId, message) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log(message);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById(sectionId);
  
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionId, message]);
}
