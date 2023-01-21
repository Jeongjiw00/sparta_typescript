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

// 가져올 데이터 수만큼 getPokemon함수를 실행시켜줄 함수생성
const fetchData = (): void => {
  for (let i = 1; i <= pokemons; i++) {
    getPokemon(i);
  }
};

// 비동기처리위해서 async함수를 사용 => return값에 promise사용
const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);
  // json형태로 한 번 더 가공필, 데이터가 너무 많아서 any타입사용
  const pokemon: any = await data.json();
  const pokemonType: string = pokemon.types
    // 타입이 여러개인 경우가 있어서
    .map((poke: any) => poke.type.name)
    .join(", ");

  const transformedPokemon: IPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType,
  };

  showPokemon(transformedPokemon);
};
