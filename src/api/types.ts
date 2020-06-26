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
  disabled: boolean;
}

export interface IScreening {
  dateAndHour: Object;
  hallId: string;
  id: string;
  movieId: string;
}
