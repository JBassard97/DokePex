// ! File Purpose:
// ? Export a function that takes in a Generation Number,
// ? and returns an array of the names, ids, and sprites of pokemon in that generation


// call like         await getURLs(151, 0)
// ? Limit doesn't correspond to the id of the pokemon, just how many get returned from the api
async function getURLs(limit: number, offset: number) {
  let pokeDexRangeURL = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(pokeDexRangeURL);
    const data = await response.json();
    const results = await data.results;
    let urlArray = [];
    for (const issue of results) {
      urlArray.push(issue.url);
    }
    return urlArray;
  } catch (error) {
    console.error("Error fetching URLs:", error);
    throw error; // Propagate the error to the caller
  }
}

async function getSpritesNamesNumbers(urlArray: any) {
  let coverIssueArray = [];
  for (const url of urlArray) {
    const response = await fetch(url);
    const data = await response.json();
    let slice = {
      id: await data.id,
      name: await data.name.toUpperCase(),
      sprite: await data.sprites.front_default,
    };
    coverIssueArray.push(slice);
  }
  return coverIssueArray;
}

// ! THIS WORKS
// await console.log(await getSpritesNamesNumbers(await getURLs(2, 0)));

async function getRegionDex(generation: number) {
  let results: any = [];

  switch (generation) {
    //   ! KANT0
    case 1:
      results = await getSpritesNamesNumbers(await getURLs(151, 0));
      break;

    //   ! JOHTO
    case 2:
      results = await getSpritesNamesNumbers(await getURLs(100, 151));
      break;

    //   ! HOENN
    case 3:
      results = await getSpritesNamesNumbers(await getURLs(135, 251));
      break;

    //   ! SINNOH
    case 4:
      results = await getSpritesNamesNumbers(await getURLs(107, 386));
      break;

    //   ! UNOVA
    case 5:
      results = await getSpritesNamesNumbers(await getURLs(156, 493));
      break;

    //   ! KALOS
    case 6:
      results = await getSpritesNamesNumbers(await getURLs(72, 649));
      break;

    //   ! ALOLA
    case 7:
      results = await getSpritesNamesNumbers(await getURLs(88, 721));
      break;

    //   ! GALAR
    case 8:
      results = await getSpritesNamesNumbers(await getURLs(89, 809));
      break;

    default:
      console.error(`Generation ${generation} not found!`);
  }
  return results;
}

export { getRegionDex };
