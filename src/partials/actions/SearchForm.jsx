import React from "react";

function SearchForm({ placeholder, onChange = () => {}, onSubmit = () => {} }) {
  return (
    <div className="relative">
      <label htmlFor="action-search" className="sr-only">
        Search
      </label>
      <div className="flex justify-between">

      <input
        id="action-search"
        className="form-input pr-9 focus:border-slate-300"
        type="search"
        placeholder={placeholder}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            onSubmit();
          }
        }}
      />
      <button
        className="absolute inset-0 left-auto group"
        onClick={()=> {
          onSubmit();
        }}
        aria-label="Search"
      >
        <svg
          className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 mr-3 ml-2"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
          <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
        </svg>
      </button>
      </div>
    </div>
  );
}

SearchForm.defaultProps = {
  placeholder: "Search…",
};

export default SearchForm;
