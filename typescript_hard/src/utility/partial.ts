interface IToppings {
  tomato: boolean;
  onion: boolean;
  lettuce: boolean;
  ketchup: boolean;
}

const myToppings: IToppings = {
  tomato: true,
  onion: true,
  lettuce: true,
  ketchup: true,
};

// Partial(파셜)은 특정 타입에 속해있는 집합을 모두 선택적으로 만드는 타입으로 변환
// 빈객체를 넣어도 에러가 안남
const partialToppings: Partial<IToppings> = {
  onion: true,
  // 모든 토핑이 있어도 되고 없어도 됩니다
  // undefined로 명시해줘도 됩니다
  ketchup: undefined,
};

console.log(myToppings); // { tomato: true, onion: true, lettuce: true, ketchup: true }
console.log(partialToppings); // { onion: true, ketchup: undefined }
