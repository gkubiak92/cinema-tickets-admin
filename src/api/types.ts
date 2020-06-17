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
