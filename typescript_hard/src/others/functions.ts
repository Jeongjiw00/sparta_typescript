// Enums
import { Color, Direction } from "../types";
// 같이 써도 되지만 type형식은 따로 빼주는게 좋음
// interface
import type { IThingsInLife } from "../types";

function printRGB(color: Color): Color {
  return color;
}

// console.log(printRGB(Red)); // ㄴㄴ
console.log(printRGB(Color.Red));

function printThngsInLife(things: IThingsInLife): string {
  return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.keyboardArrow}`;
}

console.log(
  printThngsInLife({ colorOfPen: Color.Blue, keyboardArrow: Direction.Left })
); // color of pen: Blue keyboard arrow: Left
