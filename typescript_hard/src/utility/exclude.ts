type MyType = "dog" | "cat" | "alpaca";
// excluede는 유니언 타입
type ExcludedType = Exclude<MyType, "cat" | "alpaca">;

const onlyDogAllowed: ExcludedType = "dog"; // ✅
// const noAlpaca: ExcludedType = "alpaca"; // ❌

type OnChange = (isDone: boolean) => boolean;
type GroupOfTypes = string | undefined | OnChange;
type FunctionType = Exclude<GroupOfTypes, string | undefined>;

const onChangeHandler: FunctionType = (isDone) => isDone; // ✅
console.log(onChangeHandler(true)); // true
// const today: FunctionType = "great day"; // ❌
