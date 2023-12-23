import { Movie } from '#/types';
import { cn } from '@/util/util';
import MovieCard from './MovieCard';

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function convertLanguageCode(languageCode: string): string {
  const languageMap: { [key: string]: string } = {
    en: 'English',
    es: 'Spanish',
    zh: 'Chinese',
    hi: 'Hindi',
    ar: 'Arabic',
    bn: 'Bengali',
    pt: 'Portuguese',
    ru: 'Russian',
    ur: 'Urdu',
    id: 'Indonesian',
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    pa: 'Punjabi',
    jv: 'Javanese',
    te: 'Telugu',
    vi: 'Vietnamese',
    ko: 'Korean',
    mr: 'Marathi',
    ta: 'Tamil',
    it: 'Italian',
    tr: 'Turkish',
    fa: 'Persian',
    uk: 'Ukrainian',
    pl: 'Polish',
    th: 'Thai',
    // Add more language codes and corresponding names as needed
  };

  return languageMap[languageCode] || languageCode;
}

function MoviesCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className='px-6'>
      <h2 className='px-10 py-2 text-xl font-bold text-rslight-200'>{title}</h2>
      <div
        className={cn(
          'flex space-x-4 overflow-scroll px-5 py-5 scrollbar-hide lg:px-10',
          isVertical && ' flex-col space-x-0 space-y-12',
        )}
      >
        {isVertical
          ? movies?.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    ' mb-5 flex flex-col items-center space-x-5 space-y-5 lg:flex-row',
                )}
              >
                <MovieCard movie={movie} />
                <div className='max-w-2xl'>
                  <p className='font-bold'>
                    {movie.title}
                    {' - '}({movie.release_date?.split('-')[0]})
                  </p>
                  <hr className='mb-3' />
                  <p className=''>{movie.overview}</p>
                  <p className='px-3 py-2'>
                    {movie.vote_average}/10 out of {movie.vote_count} votes
                  </p>
                  <p>Language:{' '}{convertLanguageCode(movie.original_language)}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default MoviesCarousel;
