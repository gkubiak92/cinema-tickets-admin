import { IMovie } from "api/types";

export const deleteMovie = (movies: IMovie[], id: string) =>
  movies.filter((movie) => movie.id !== id);
