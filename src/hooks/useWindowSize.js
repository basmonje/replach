import { useState, useEffect } from 'react';

const isWindowClient = typeof window === 'object';

// Este hook nos permite saber la anchura y la altura del
// dispotivo en cual estamos accediendo, se actualizará
// siempre que se reajuste el tamaño
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    if (isWindowClient) {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isWindowClient]);

  return windowSize;
}

export default useWindowSize;
