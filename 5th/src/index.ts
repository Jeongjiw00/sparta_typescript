// Required External Modules - 모듈
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { itemsRouter } from "./items/items.router";

dotenv.config();

// App Variables - 앱 변수 선언
//포트가 없으면 프로그램 종료
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// App Configuration - JSON 형식으로 데이터를 전달받기위해서
app.use(express.json());
app.use("/api/menu/items", itemsRouter);

// Server Activation - 서버 활성화
app.get("/", (req: Request, res: Response) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
