const Genres = ({
  chosenGenres,
  setChosenGenres,
}: {
  chosenGenres: string[];
  setChosenGenres: (newChosenGenres: string[]) => void;
}) => {
  const genres = ["Повседневность", "Ужасы", "Сейнен", "Хентай"];
  return (
    <div className="mt-2 flex flex-wrap gap-1 text-white">
      {genres.map((genre, idx) => (
        <button
          key={`genre-${idx}`}
          onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
            e.preventDefault();
            chosenGenres.includes(genre)
              ? setChosenGenres(chosenGenres.filter((item) => item !== genre))
              : setChosenGenres(chosenGenres.concat([genre]));
          }}
          className="rounded-xl bg-[#495057] px-2 py-1 hover:cursor-pointer hover:opacity-80 active:opacity-40"
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default Genres;
