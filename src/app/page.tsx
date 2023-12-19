import MoviesCarousel from '@/components/carousel/MoviesCarousel';
import { getNewReleaseMovies, getTopReviewMovies, getTrendingMovies } from '@/util/getMovies';


export default async function Home() {

  const newReleasesMovies = await getNewReleaseMovies();
  const topReviewMovies = await getTopReviewMovies();
  const trendingMovies = await getTrendingMovies();

  return (
    <main className='flex items-center justify-center pt-14'>
      {/* Carousel Banner  */}

      <div className='flex flex-col space-y-2 xl:-mt-48'>
        <MoviesCarousel movies={[]} title='New Releases' isVertical={false} />
        <MoviesCarousel movies={[]} title='Top Reviews' isVertical={false} />
        <MoviesCarousel movies={[]} title='Trending' isVertical={false} />
      </div>
    </main>
  );
}
