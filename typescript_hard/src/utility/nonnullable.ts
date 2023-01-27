type QueryParam = string | string[] | undefined | null;
type NonNullableQueryParam = NonNullable<QueryParam>;

const queryParam: NonNullableQueryParam = "orders"; // 문자열은 허용되는 타입입니다
// const forbiddenQueryParam: NonNullableQueryParam = undefined; // 허용되지 않습니다
