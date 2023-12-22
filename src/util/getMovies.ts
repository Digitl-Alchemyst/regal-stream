/* eslint-disable import/prefer-default-export */
import { SearchResults } from '#/types';

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  //Filters from TMDB API
  url.searchParams.set('include_adult', 'false');
  url.searchParams.set('include_video', 'false');
  url.searchParams.set('sort_by', 'popularity.desc');
  url.searchParams.set('language', 'en-US');
  url.searchParams.set('page', '1');

  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data;
}

export async function getNewReleaseMovies() {
  const url = new URL('https://api.themoviedb.org/3/movie/now_playing');
  const data = await fetchFromTMDB(url);

  return data.results;
}

export async function getTopReviewMovies() {
  const url = new URL('https://api.themoviedb.org/3/movie/top_rated');
  const data = await fetchFromTMDB(url);

  return data.results;
}

export async function getTrendingMovies() {
  const url = new URL('https://api.themoviedb.org/3/movie/popular');
  const data = await fetchFromTMDB(url);

  return data.results;
}

export async function getDiscoveredMovies(id?: string, keywords?: string) {
   const url = new URL('https://api.themoviedb.org/3/discover/movie');

   keywords && url.searchParams.set('with_keywords', keywords);
   id && url.searchParams.set('with_genres', id);

   const data = await fetchFromTMDB(url);

   return data.results;
}

export async function getSearchedMovies(term: string) {
  const url = new URL('https://api.themoviedb.org/3/search/movie');

  url.searchParams.set('query', term );

     const data = await fetchFromTMDB(url);

     return data.results;
}


