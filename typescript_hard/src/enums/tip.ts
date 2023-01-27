import { Color } from "../types";

// enum도 분해 할당이 가능
const { Red, Green, Blue: ImBlue } = Color; // Blue => ImBlue변경

const green = Green; // Color.Green할 필요가 없음!
const pepper = Red;

console.log(Green); // "Green"
console.log(ImBlue); // "Blue"
// console.log(Blue); // Cannot find name 'Blue'. -> 상수의 이름을 바꿨으니 에러가 납니다
