type MyPet = "dog" | "cat" | "alpaca";
type ExtractedMyPet = Extract<MyPet, "alpaca" | "cat">;

const onlyAlpacaOrCatAllowed1: ExtractedMyPet = "cat"; // 또는 "alpaca"만 할당 가능
// const onlyAlpacaOrCatAllowed2: ExtractedMyPet = "dog"; // error

console.log(onlyAlpacaOrCatAllowed1);
