import { useState, useEffect } from 'react';

// Este hook nos sirve para crear un nuevo tamaño de imagen
// según sea la anchura del elemento seleccionado
function useWindowSize({ ref, width, height }) {
  const isWindowClient = typeof window === 'object';

  const getBreakPoint = (innerWidth, offsetWidth) => {
    if (innerWidth < 768) {
      return {
        width: offsetWidth,
        height: Math.trunc(height / (width / offsetWidth).toFixed(3))
      };
    } else if (innerWidth >= 768 && innerWidth < 1020) {
      return {
        width: offsetWidth,
        height: 560
      };
    } else if (innerWidth >= 1020) {
      return {
        width: offsetWidth,
        height: 370
      };
    }
  };

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth, ref.current.offsetWidth));
    }

    if (isWindowClient) {
      setSize();

      window.addEventListener('resize', setSize);

      return () => window.removeEventListener('resize', setSize);
    }
  }, [isWindowClient, ref, width, height]);

  return windowSize;
}

export default useWindowSize;
