import { Color } from "../types";

const keys = Object.keys(Color);
console.log(keys); // [ 'Red', 'Green', 'Blue' ] - string[]

console.log("--------------------------------");

const values = Object.values(Color);
console.log(values); // [ 'Red', 'Green', 'Blue' ] - Color[]

console.log("--------------------------------");

const keyValues = Object.entries(Color);
console.log(keyValues); // [ [ 'Red', 'Red' ], [ 'Green', 'Green' ], [ 'Blue', 'Blue' ] ]

console.log("--------------------------------");

// enum을 key로 사용해서 인덱싱을 할 땐 interface를 사용못함
type TObjectType = {
  [key in Color]?: string;
};

const myObject: TObjectType = {};

values.forEach((key) => {
  myObject[key] = "hello";
});

console.log(myObject); // { Red: 'hello', Green: 'hello', Blue: 'hello' }
