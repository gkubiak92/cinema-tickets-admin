import { IEditHallFormData } from "views/Halls/Edit/types";
import { ISeat, ISeatArrangement } from "api/types";

const nextChar = (char: string) => String.fromCharCode(char.charCodeAt(0) + 1);

export const getSeatArrangementFromSeatsMap = (hallData: IEditHallFormData) => {
  let rowLetter = "A";
  const { rows, seatsPerRow } = hallData;
  const defaultSeat: ISeat = { disabled: false };
  const rowArray = [];
  for (let i = 0; i < seatsPerRow; i++) {
    rowArray.push(defaultSeat);
  }
  const seatArrangement: ISeatArrangement = {};
  for (let i = 0; i < rows; i++) {
    seatArrangement[rowLetter] = rowArray;
    rowLetter = nextChar(rowLetter);
  }

  return seatArrangement;
};
