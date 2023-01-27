type QueryParam = string | string[] | undefined | null;
type NonNullableQueryParam = NonNullable<QueryParam>; // string | string[]

const queryParam1: NonNullableQueryParam = "orders"; // 문자열은 허용되는 타입입니다
const queryParam2: NonNullableQueryParam = ["orders"]; // 문자열 배열은 허용되는 타입입니다
// const forbiddenQueryParam1: NonNullableQueryParam = null; // 허용되지 않습니다
// const forbiddenQueryParam2: NonNullableQueryParam = undefined; // 허용되지 않습니다
