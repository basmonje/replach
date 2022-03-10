import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from '@basmonje/lib-icon';

import { usePagination, DOTS } from '../hooks/usePagination';

import Container from './Container';

// Patrón de diseño: Statefull
const Pagination = ({ pageSize, totalCount, currentPage }) => {
  const { pathname } = useLocation();

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    currentPage
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Container as="section">
      <ul className="-flex -flex-row -content-between -items-center -p-3">
        <li>
          {currentPage === 1 ? (
            <div />
          ) : (
            <Link
              to={`${pathname}?page=${currentPage - 1}`}
              className="-flex -items-center -gap-2 -p-2 -color-white"
            >
              <ChevronLeft />
              <span>Atrás</span>
            </Link>
          )}
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <li key={index}>&#8230;</li>;
          }

          return (
            <li key={index}>
              <Link
                to={`${pathname}?page=${pageNumber}`}
                className={`-button-cursor ${
                  pageNumber === currentPage
                    ? '-color-white-900'
                    : '-color-white-600'
                }`}
              >
                {pageNumber}
              </Link>
            </li>
          );
        })}

        <li>
          {currentPage === lastPage ? (
            <div />
          ) : (
            <Link
              className="-flex -items-center -gap-2 -p-2 -color-white"
              to={`${pathname}?page=${currentPage + 1}`}
            >
              Siguiente
              <ChevronRight />
            </Link>
          )}
        </li>
      </ul>
    </Container>
  );
};

export default Pagination;
