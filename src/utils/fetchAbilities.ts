// Will get details for each url in the abilites array in PokemonDetails

async function getAbilities(abilityUrl) {
  const result = await fetch(abilityUrl);
  return result;
}
