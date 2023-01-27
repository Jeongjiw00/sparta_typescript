// Types
// import type { Order } from "./types";

// Object.entries
// 1. Order의 orderStatus의 타입을 [string, Status]로 변경해준다.
export interface Order {
  buyer: string;
  orderStatus: [string, Status];
}

// Enums
import { Status } from "./types";

const ordersE: Order[] = Object.entries(Status).map((status, index) => {
  return {
    buyer: `buyer #${index}`,
    orderStatus: status,
  };
});

console.log(ordersE);
