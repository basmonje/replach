import { useEffect } from 'react';

// Este hook nos sirve para saber cuando un elemento se encuentra en el viewport
// Cuando el elemento sea visible en el viewport del dispositivo se activará y
// cambiaremos el estado
function useIntersectionObserver({
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px'
}) {
  useEffect(() => {
    const observer = new window.IntersectionObserver(onIntersect, {
      rootMargin,
      threshold
    });
    const current = target.current;
    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  });
}

export default useIntersectionObserver;
