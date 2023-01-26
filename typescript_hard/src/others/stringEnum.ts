import { Color } from "../types";

const myColor = Color.Red;
console.log(myColor); // "Red"

const yourColor = Color.Blue;
console.log(yourColor); // "Blue"

console.log("------------------------");

const faveColor = Color.Blue;
console.log(faveColor); // Blue

const chorock: Color = Color.Green;
console.log(chorock); // Green

// // 안됨
// const colorRed: Color = "Red"; //Color.Red라고 해줘야함!
// // typecast
// 이런식으로 타입을 부여할 수 있긴 함!
const colorRed: Color = "Red" as Color;
console.log(colorRed); // "Red"
const imposterColor: Color = "Potato" as Color;
console.log(imposterColor); // "Potato"
//그래도 사용안하는 것이 좋음
