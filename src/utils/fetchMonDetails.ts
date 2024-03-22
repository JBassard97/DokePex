const fetchMonDetails = async (pokemonId: number) => {
  const singleMonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const response = await fetch(singleMonURL);
  const data = await response.json();
  console.log({ data });
  return data;
};

fetchMonDetails(678);

export { fetchMonDetails };
