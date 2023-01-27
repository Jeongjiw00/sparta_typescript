// // 기능적으로는 동일
// // interface IMyInterface {
// //   value: string | number | string[];
// // }

// // 키워드 사용할 때 조금 다름
// // const error: readonly Array<boolean> = [false]; //ㄴㄴ
// // 'readonly' 형식 한정자는 배열 및 튜플 리터럴 형식에서만 사용할 수 있습니다.
// const okay: readonly boolean[] = [true];
// // generic과 readonly를 같이 사용하기 위해서는 ReadonlyArray 유틸리티함수사용
// const okayGeneric: ReadonlyArray<boolean> = [true];

// No Generic - object선언할때 타입이 명시가 안됨! 타입추가도 interface에서 해줘야 함
interface IMyInterface {
  value: string | number | Array<string>;
}

const stringObject: IMyInterface = { value: "hello, world!" };
const numberObject: IMyInterface = { value: 1234 };
const stringArrayObject: IMyInterface = { value: ["hello", "world!"] };

// Generic - 반대로 타입을 명시할 수 있고, 타입추가도 따로 안해줘도 되며, 기초값도 줄 수 있음
interface IMyInterfaceG<T = string> {
  value: T;
}

const stringObject2: IMyInterfaceG = { value: "hello, world!" };
const numberObject2: IMyInterfaceG<number> = { value: 1234 };
const stringArrayObject2: IMyInterfaceG<Array<string>> = {
  // IMyInterfaceG<string[]> 기능적으로는 동일
  value: ["hello", "world!"],
};
