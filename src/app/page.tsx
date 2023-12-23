import BannerWrapper from '@/components/carousel/BannerWrapper';
import MoviesCarousel from '@/components/carousel/MoviesCarousel';
import { getNewReleaseMovies, getTopReviewMovies, getTrendingMovies } from '@/util/getMovies';


export default async function Home() {

  const newReleasesMovies = await getNewReleaseMovies();
  const topReviewMovies = await getTopReviewMovies();
  const trendingMovies = await getTrendingMovies();

  return (
    <main className=''>
      {/* Carousel Banner  */}
      <BannerWrapper />
      <div className='flex flex-col space-y-2 '>
        <MoviesCarousel movies={newReleasesMovies} title='New Releases' />
        <MoviesCarousel movies={topReviewMovies} title='Top Reviews' />
        <MoviesCarousel movies={trendingMovies} title='Trending' />
      </div>
    </main>
  );
}
