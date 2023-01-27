type MyType = "dog" | "cat" | "alpaca";
type ExcludedType = Exclude<MyType, "cat" | "alpaca">;

const onlyDogAllowed: ExcludedType = "dog"; // ✅
// const noAlpaca: ExcludedType = "alpaca"; // ❌

type OnChange = (isDone: boolean) => void;
type GroupOfTypes = string | undefined | OnChange;
type FunctionType = Exclude<GroupOfTypes, string | undefined>;

const onChangeHandler: FunctionType = (isDone) => console.log(isDone); // ✅
console.log(onChangeHandler(true)); // true
// const today: FunctionType = "great day"; // ❌
