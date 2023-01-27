export enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

export enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// interface 키워드로 타입 선언하기
export interface IThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}

// // type 키워드로 타입 선언하기
// type TThingsInLifeType = {
//   colorOfPen: Color;
//   keyboardArrow: Direction;
// };

export type User = {
  email: string;
  name: string;
};

export enum Status {
  Initiated = "Initiated",
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
}

export interface Order {
  buyer: string;
  orderStatus: Status;
}
