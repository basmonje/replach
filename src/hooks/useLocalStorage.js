import { useState } from 'react';

// Este hook nos permite almacenar información de manera local
// en nuestro dispositivo con localstorage.
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue([...storedValue, value]);
      window.localStorage.setItem(key, JSON.stringify([...storedValue, value]));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteValue = () => {
    try {
      setStoredValue([]);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, deleteValue];
}

export default useLocalStorage;
