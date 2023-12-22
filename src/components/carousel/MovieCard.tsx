import { Movie } from '#/types';
import getImagePath from '@/util/getImagePath';
import Image from 'next/image';

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className='relative flex-shrink-0 cursor-pointer transform hover:scale-105 transistion duration-200 ease-out hover:drop-shadow-lg overflow-y-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-rsdark-200/10 via-rsdark-900/20 to-rsdark-300 dark:to-rsdark-700/70 z-10' />
      <p className='absolute bottom-5 left-5 z-20'>{movie.title}</p>
      <Image
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        width={1920}
        height={1080}
        alt={movie.title}
        className='h-56 w-fit rounded-sm object-cover object-center shadow-md shadow-rsdark-900 drop-shadow-lg lg:min-w-[400px]'
      />
    </div>
  );
}

export default MovieCard;
