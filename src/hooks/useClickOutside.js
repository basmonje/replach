import { useRef, useEffect } from 'react';

// Este hook nos sirve para saber cuando se ha hecho
// click fuera del elemento seleccionado con useRef
function useOnClickOutside(handler) {
  const ref = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);

  return {
    ref
  };
}

export default useOnClickOutside;
