// require => import 로 변경
// 크롤링하기위한 puppeteer 모듈 불러오기
import puppeteer from "puppeteer";
// 데이터를 저장하기위해 fs 모듈 불러오기
import fs from "fs";

interface IPokemon {
  id: string;
  name: string;
  image: string;
  type: string;
}

//성공했을때와 실패했을때 모두 return이 있어야 오류가 안남
async function scrape(): Promise<IPokemon[]> {
  try {
    // 크로미움으로 브라우저를 연다.
    const browser = await puppeteer.launch();

    // 페이지 열기
    const page = await browser.newPage();

    // 링크 이동
    await page.goto("http://127.0.0.1:5500");

    // .card 엘리먼트중에 값이 #100인 .card--id 엘리먼트가 생길때까지 기다림(모든 카드가 로드될때까지 기다림)
    await page.waitForFunction(
      () => {
        const cardId = document.querySelector(".card:last-child .card--id");
        return cardId && cardId.textContent === "#100";
      },
      { timeout: 10000 }
    );

    // cards 에 모든 카드정보 배열로 저장
    const cards = await page.$$(".card");
    // 100개의 카드가 잘 저장되었는지 확인.
    console.log(cards.length);
    const data: Array<IPokemon> = [];
    // const data: IPokemon[] = [];

    // cards 돌면서 필요한 데이터 수집
    for (const card of cards) {
      const id = await card.$eval(".card--id", (el: Element) => el.textContent);
      const image = await card.$eval(".card--image", (el: Element) =>
        el.getAttribute("src")
      );
      const name = await card.$eval(
        ".card--name",
        (el: Element) => el.textContent
      );
      const type = await card.$eval(
        ".card--details",
        (el: Element) => el.textContent
      );
      // data 배열에 수집한 데이터 등록
      if (id && image && name && type) {
        data.push({ id, image, name, type });
      } else {
        console.log("빈 형식이 들어왔습니다!");
        return [];
      }
    }

    // 페이지와 브라우저 종료
    await page.close();
    await browser.close();

    // data 리턴 => 리턴한 데이터를 받아서 파일로 쓰기 위함.
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

scrape()
  .then((data) => {
    fs.writeFile(
      "pokemon.json",
      JSON.stringify(data),
      "utf8",
      (error: Error) => {
        if (error) {
          console.log("파일 생성 중 에러 발생.");
          return console.log(error);
        }
        console.log("파일 생성 완료!");
      }
    );
  })
  .catch((error) => console.log(error));
