const container: HTMLElement | null = document.getElementById("app");
const pokemons: number = 200;

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

const fetchData = async (): Promise<void> => {
  for (let i = 1; i <= pokemons; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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

const showPokemon = (pokemon: IPokemon): void => {
  let output: string = `
    <div class="card">
        <span class="card--id">#${pokemon.id}</span>
        <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
        <h1 class="card--name">${pokemon.name}</h1>
        <span class="card--details">${pokemon.type}</span>
    </div>
  `;

  // container의 type이 null일수도 있기때문에 null이 아닐경우에만 넣어주도록 지정
  if (container) {
    container.innerHTML += output;
  }
};

fetchData();
