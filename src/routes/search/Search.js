import React, { useState } from 'react';

import './search.scss';

let debounceTimeout;

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);

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
        onInput={(ev) => {
          clearTimeout(debounceTimeout);

          debounceTimeout = setTimeout(() => {
            searchMovies(ev.target.value);
          }, 250);
        }}
      />

      {!!searchResults.length &&
        searchResults.map((searchResult, i) => (
          <div className="route-Search__search-result" key={i}>
            <h4 className="route-Search__search-result--title">
              {searchResult.title}
            </h4>
            <img
              src={`https://image.tmdb.org/t/p/original${searchResult.poster_path}`}
              alt="Movie image"
            />
          </div>
        ))}
    </div>
  );
}
