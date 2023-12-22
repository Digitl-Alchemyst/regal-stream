import { getDiscoveredMovies } from "@/util/getMovies";
import Banner from "./Banner";

type Props = {
  id?: string;
  keywords?: string;
};

async function BannerWrapper({ id, keywords }: Props) {
    const movies = await getDiscoveredMovies(id, keywords);
  return <Banner movies={movies} />;
}

export default BannerWrapper;
