type MyType2 = "dog" | "cat" | "alpaca";
type ExtractedType = Extract<MyType, "alpaca" | "cat">;

const onlyAlpacaOrCatAllowed: ExtractedType = "cat"; // 또는 "alpaca"만 할당 가능
