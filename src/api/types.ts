export enum FirestoreCollections {
  halls = "hallsArrangement",
  movies = "movies",
  moviesToHalls = "moviesToHalls",
  screenings = "screenings",
}

export interface IMovie {
  description: string;
  director: string;
  genres: string[];
  id: string;
  isNew: boolean;
  isPopular: boolean;
  isUpcoming: boolean;
  lastupdate: Object;
  photosUrl: string[];
  rating: number;
  screeningDates: IScreeningDate[];
  stars: string[];
  thumbnailUrl: string;
  ticketPrice: number;
  title: string;
  updatedby: string;
  writer: string;
}

export interface IScreeningDate {
  date: Object;
  hallId: string;
}

export interface IHall {
  name: string;
  id: string;
  seatArrangement: ISeatArrangement;
}

export interface ISeatArrangement {
  [key: string]: ISeat[];
}

export interface ISeat {
  seatIndex: string;
  disabled: boolean;
}

export interface IScreening {
  dateAndHour: Object;
  hallId: string;
  id: string;
  movieId: string;
  bookedSeats: string[];
}

export interface IErrorResponse {
  a: any;
  code: string;
  message: string;
}
