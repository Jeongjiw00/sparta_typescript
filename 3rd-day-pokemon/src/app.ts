// getElementById를 사용했을때 리턴값이 둘 중 하나로 자동으로 추론함. 그래서 안써줘도 무관
const container: HTMLElement | null = document.getElementById("app");
const pokemons: number = 100;

// 가져올 데이터 형식
interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}
