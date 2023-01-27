// Types
import type { Order, User } from "../types";
// Enums
import { Status } from "../types";

function getData<T>(data: T): T {
  return data;
}

// 에러 없이 콘솔로그 되는 유효한 호출
console.log(getData<string>("string data"));
console.log(getData<number>(1234));
console.log(getData<User>({ email: "email@email.com", name: "katie" }));
console.log(getData<string[]>(["string", "data"]));
console.log(getData<string[]>([])); // 빈 배열도 유효한 인자입니다!

// ❌ Type 'string' is not assignable to type 'Status'.
// => Object.keys() 가 string반환
// => keys를 values로 바꿔주면 okay
//  Object.values<Status>(Status)도 가능
const orders: Order[] = Object.values(Status).map((status, index) => {
  return {
    buyer: `buyer #${index}`,
    orderStatus: status,
  };
});
console.log(orders);

// const ordersE: Order[] = Object.entries(Status).map((status, index) => {
//   return {
//     buyer: `buyer #${index}`,
//     orderStatus: status,
//   };
// });
