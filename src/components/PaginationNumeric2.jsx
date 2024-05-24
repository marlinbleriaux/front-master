import React from 'react';

function PaginationNumeric2({ currentPage, paginateFront, paginateBack, lastPage, fetchData }) {
  const items = [];
  const totalPagesToShow = 5; // Nombre total de pages à afficher

  let startPage = Math.max(1, currentPage - Math.floor(totalPagesToShow / 2));
  let endPage = Math.min(lastPage, startPage + totalPagesToShow - 1);

  // Ajouter les points de suspension (...) avant les premières pages
  if (startPage > 1) {
    items.push(
      <li key={1} onClick={() => { fetchData(1); }}>
        <a className="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-slate-200 text-slate-600 hover:bg-cyan-500 hover:text-white" href="#0">1</a>
      </li>
    );
    if (startPage > 2) {
      items.push(
        <li key="ellipsis_start">
          <span className="inline-flex items-center justify-center leading-5 px-3.5 py-2 text-slate-600">...</span>
        </li>
      );
    }
  }

  // Ajouter les pages
  for (let i = startPage; i <= endPage; i++) {
    let classN = "inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-slate-200 text-slate-600 ";
    if (i === currentPage) {
      classN += "text-cyan-500";
    } else {
      classN += "hover:bg-cyan-500 hover:text-white";
    }
    items.push(
      <li key={i} onClick={() => { fetchData(i); }}>
        <a className={classN} href="#0">{i}</a>
      </li>
    );
  }

  // Ajouter les points de suspension (...) après les dernières pages
  if (endPage < lastPage) {
    if (endPage < lastPage - 1) {
      items.push(
        <li key="ellipsis_end">
          <span className="inline-flex items-center justify-center leading-5 px-3.5 py-2 text-slate-600">...</span>
        </li>
      );
    }
    items.push(
      <li key={lastPage} onClick={() => { fetchData(lastPage); }}>
        <a className="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-slate-200 text-slate-600 hover:bg-cyan-500 hover:text-white" href="#0">{lastPage}</a>
      </li>
    );
  }


  return (
    <div className="flex justify-center">
      <nav className="flex" role="navigation" aria-label="Navigation">
        <div className="mr-2">
          <a
            onClick={() => {
              paginateBack();
            }}
            href='#'
            className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-cyan-500 border border-slate-200 text-slate-600 hover:text-white shadow-sm"
          >
            <span className="sr-only">Previous</span><wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>
          </a>
        </div>
        <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
          {items}
        </ul>
        <div className="ml-2">
          <a
            onClick={() => {
              paginateFront();
            }}
            href='#'
            className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-cyan-500 border border-slate-200 text-slate-600 hover:text-white shadow-sm"
          >
            <span className="sr-only">Next</span><wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default PaginationNumeric2;