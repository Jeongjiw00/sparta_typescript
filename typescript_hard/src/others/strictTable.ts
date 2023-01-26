// interface도 가능
type TTableData = {
  [x: string]: string;
};

// 실수를 해도 에러가 나지않아서 실수인지 알 길이 없음
const myTableData: TTableData = {
  Id: "1",
  firstName: "jane",
  lastName: "doe",
  score: "100",
  // 실수로 더해진 키/밸류값
  age: "99",
};

// tree-shaking
const enum TableKey {
  ID = "ID",
  FirstName = "firstName",
  LastName = "lastName",
  Score = "score",
}

type StrictTableData = { [key in TableKey]: string };

// // 허용되지 않는 필드가 들어가면
// const myStrictTableData1: StrictTableData = {
//   ID: "1",
//   firstName: "jane",
//   lastName: "doe",
//   score: "100",
//   age: "99", // ❌ Object literal may only specify known properties, and 'Age' does not exist in type 'StrictTableData'.
// };

// // 타입에는 있으나 추가가 되지 않을 필드가 있으면
// const myStrictTableData2: StrictTableData = {
//   // ❌ Property '[TableKey.Score]' is missing in type '{ ID: string; FirstName: string; LastName: string; }' but required in type 'StrictTableData'.
//   ID: "1",
//   firstName: "jane",
//   lastName: "doe",
// };

type LessStrictTableData = { [key in TableKey]?: string };

const lessStrictTableData: LessStrictTableData = {
  ID: "1",
}; // ✅

// 그리고 이렇게 빈 객체도 통과합니다
const emptyTableData: LessStrictTableData = {}; // ✅
