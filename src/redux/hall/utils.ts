import { IEditHallFormData } from "views/Halls/Edit/types";
import { ISeat, ISeatArrangement } from "api/types";

const nextChar = (char: string) => String.fromCharCode(char.charCodeAt(0) + 1);

export const getSeatArrangementFromSeatsMap = (hallData: IEditHallFormData) => {
  const seatArrangement: ISeatArrangement = {};
  const { rows, seatsPerRow } = hallData;

  let rowLetter = "A";
  //creating rows
  for (let i = 0; i < rows; i++) {
    const rowArray = [];
    //filling row with seats
    for (let i = 0; i < seatsPerRow; i++) {
      const seat: ISeat = {
        seatIndex: `${rowLetter}${i + 1}`,
        disabled: false,
      };
      rowArray.push(seat);
    }
    seatArrangement[rowLetter] = rowArray;
    rowLetter = nextChar(rowLetter);
  }

  return seatArrangement;
};
