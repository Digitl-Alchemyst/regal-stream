type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

// http://localhost:3000/genre/10?genre=Crime

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return <div>GenrePage
    <div>
        Searched for: {genre} with id: {id}
    </div>
  </div>;
}

export default GenrePage;
