import { useState, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useClickOutside from '../hooks/useClickOutside';
import useLocalStorage from '../hooks/useLocalStorage';
import Container from './Container';

// Patrón de diseño: Stateless
const HistoryList = ({ title, data, action }) => (
  <div className="-flex -flex-col -gap-2 -mb-3">
    <header className="-flex -items-center -content-between">
      <h3>{title}</h3>
      {action && (
        <button
          onClick={action}
          className="-b-none -bg-transparent -button-cursor -color-white-600 -color-hover-white-900"
        >
          Limpiar
        </button>
      )}
    </header>
    <ul className="-flex -flex-wrap -gap-2 -mt-1">
      {data.map(({ id, type, query }) => (
        <div key={id}>
          <Link
            to={`/${type}/search/${query}`}
            className="-flex -p-3 -b-1 -color-white-700 -color-hover-white-900"
          >
            {query}
          </Link>
        </div>
      ))}
    </ul>
  </div>
);

// Patrón de diseño: Statefull
const Search = ({ type, trending }) => {
  const refInput = useRef();
  const [query, setQuery] = useState('');
  const [records, setRecords, removeRecords] = useLocalStorage('records', []);
  const [active, setActive] = useState(false);
  const navigation = useNavigate();
  const { ref } = useClickOutside(() => setActive(false));

  const handleOnFocus = () => setActive(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (refInput.current.value !== '') {
      setRecords({
        id: new Date().getTime(),
        query: refInput.current.value,
        type
      });
      setQuery('');
      setActive(false);
      navigation(`/${type}/search/${refInput.current.value}`);
    }
  };

  const handleChange = useCallback((e) => {
    setQuery(refInput.current.value);
  }, []);

  const cleanRecords = () => {
    removeRecords();
    setQuery('');
  };

  return (
    <Container as="section" className="-my-6 -px-4 -flex -flex-col">
      <div ref={ref}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              ref={refInput}
              value={query}
              onFocus={handleOnFocus}
              onChange={handleChange}
              type="text"
              placeholder="Buscar..."
              className="-flex -bg-transparent -bg-hover-white-100 -bg-active-white-300 -bg-focus-white-500 -px-6 -py-4 -radius-small -w-full -color-white -b-1 -b-blue-400"
            />
          </div>
        </form>
        <section className="-position-relative">
          {active && (
            <div className="-position-absolute -mt-5 -w-full bg-blue-dark -p-4 -index-2 -color-white">
              {records.length !== 0 && (
                <HistoryList
                  data={records}
                  title="Busquedas realizadas"
                  action={cleanRecords}
                />
              )}
              <HistoryList data={trending.topics} title="Topics" />
            </div>
          )}
        </section>
      </div>
    </Container>
  );
};

Search.defaultProps = {
  trending: {
    collections: [],
    topics: [
      {
        query: 'experimental',
        type: 'photos',
        name: 'Experimental',
        id: 1
      },
      {
        query: 'interiors',
        type: 'photos',
        name: 'Interiors',
        id: 2
      },
      {
        query: 'food-drink',
        type: 'photos',
        name: 'Food & Drink',
        id: 3
      },
      {
        query: 'textures-patterns',
        type: 'photos',
        name: 'Textures & Patterns',
        id: 4
      },
      {
        query: 'people',
        type: 'photos',
        name: 'People',
        id: 5
      }
    ]
  }
};

export default Search;
