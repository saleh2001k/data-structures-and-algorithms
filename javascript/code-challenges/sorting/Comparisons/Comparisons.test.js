const { sortByRecentYear, sortByTitle } = require("./Comparisons");

describe("Sorting Functions", () => {
  it("should correctly sort movies by most recent year first", () => {
    const movies = [
      { title: "Movie 1", year: 2020 },
      { title: "Movie 2", year: 2019 },
      { title: "Movie 3", year: 2021 },
    ];

    const sortedMovies = sortByRecentYear(movies);

    expect(sortedMovies).toEqual([
      { title: "Movie 3", year: 2021 },
      { title: "Movie 1", year: 2020 },
      { title: "Movie 2", year: 2019 },
    ]);
  });

  it("should correctly sort movies alphabetically by title, ignoring articles", () => {
    const movies = [
      { title: "The Movie", year: 2021 },
      { title: "Movie 2", year: 2022 },
      { title: "An Amazing Film", year: 2020 },
    ];
  
    const sortedMovies = sortByTitle(movies);
  
    expect(sortedMovies).toEqual([
      { title: "An Amazing Film", year: 2020 },
      { title: "The Movie", year: 2021 },
      { title: "Movie 2", year: 2022 },
    ]);
  });

  it("should correctly sort movies with the same year by title", () => {
    const movies = [
      { title: "Zebra", year: 2020 },
      { title: "Apple", year: 2020 },
      { title: "Banana", year: 2020 },
    ];

    const sortedMovies = sortByTitle(movies);

    expect(sortedMovies).toEqual([
      { title: "Apple", year: 2020 },
      { title: "Banana", year: 2020 },
      { title: "Zebra", year: 2020 },
    ]);
  });
});
