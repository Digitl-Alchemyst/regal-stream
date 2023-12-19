import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

// http://localhost:3000/search/Star%20Wars
function SearchPage({ params: { term } }: Props) {
    if (!term) notFound();

    const decodedTerm = decodeURI(term); 

    // API Call to searched Movies 

    // API call to get popular Movies 

  return (
    <div>
      SearchPage
      <div>Search Term: {decodedTerm}</div>
    </div>
  );
}

export default SearchPage;
