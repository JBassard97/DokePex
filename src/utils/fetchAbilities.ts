// Will get details for each url in the abilites array in PokemonDetails

async function fetchAbilities(abilityUrl) {
  const results = await fetch(abilityUrl);
  return results;
}
