import React, { useRef, useState } from 'react';

import SearchResult from '../../components/search-result/SearchResult';

import './search.scss';

let debounceTimeout;

export default function Search() {
  const searchInput = useRef(null);
  const [searchResults, setSearchResults] = useState([]);

  searchInput.current?.focus();

  async function searchMovies(searchQuery) {
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=016becf0a275645f50adf5af490d838d`
    );
    const json = await resp.json();
    const { results } = json;

    setSearchResults(results || []);
  }

  return (
    <div className="route-Search">
      <h2 className="route-Search__page-title">Search for Movie by Title</h2>

      <input
        ref={searchInput}
        placeholder="Movie title"
        onInput={(ev) => {
          clearTimeout(debounceTimeout);

          debounceTimeout = setTimeout(() => {
            searchMovies(ev.target.value);
          }, 250);
        }}
      />

      {!!searchResults.length &&
        searchResults.map((searchResult, i) => (
          <SearchResult searchResult={searchResult} key={i} />
        ))}
    </div>
  );
}
