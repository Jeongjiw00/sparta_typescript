function sum2(a: number, b: number): number {
  return a + b;
}
sum2(10, 20); // 30
// sum(10, 20, 30); // error, too many parameters
// sum(10); // error, too few parameters

function sum3(a: number, b?: number): number {
  // json파일에서 stringNullCheck를 빼줘야함!
  return a + b;
}

sum3(10, 20); // 30
// sum2(10, 20, 30); // error, too many parameters
sum3(10); // 타입 에러 없음
