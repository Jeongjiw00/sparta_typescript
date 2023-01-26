enum Color {
  Red = 0,
  Green,
  Blue = 9,
  Purple,
}

const myColor = Color.Red;
console.log(myColor); // 0

const yourColor = Color.Blue;
console.log(yourColor); // 2

const yourColor2: Color = Color.Blue;
console.log(yourColor2); // 2

// //안됨!
// const yourColor3: Color.Green = Color.Blue;

console.log(Color["Green"]); // 1

// Reverse mapping
console.log(Color[0]); // "Red"
console.log(Color[1]); // "Green"
console.log(Color[4]); // undefined
console.log(Color);
// {
//   '0': 'Red',
//   '1': 'Green',
//   '9': 'Blue',
//   '10': 'Purple',
//   Red: 0,
//   Green: 1,
//   Blue: 9,
//   Purple: 10
// }
