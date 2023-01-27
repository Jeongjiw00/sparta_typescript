interface UserInfo {
  userName: string;
  favoriteColor: string;
  email: string;
  password: string;
}

// password 랑 email 생략
type LessUserInfo = Omit<UserInfo, "password" | "email">;

// const newUser: LessUserInfo = {
//   userName: "pony",
//   favoriteColor: "rainbow",
//   // 생략시킨 email이 속해있어서 컴파일되지 않습니다
//   email: "hello@world.hello", // ❌ Object literal may only specify known properties, and 'email' does not exist in type 'LessUserInfo'.
// };
