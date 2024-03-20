// call like         await getURLs(151, 0)
async function getURLs(limit, offset) {
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

async function getSpritesNamesNumbers(urlArray) {
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

await console.log(await getSpritesNamesNumbers(await getURLs(2, 0)));

//   switch (generation) {
//     case 1:
//       let dex = await getSpritesNamesNumbers(151, 0);
//       console.log(dex);
//       break;
//     case 2:
//       break;
//     case 3:
//       break;
//     case 4:
//       break;
//     case 5:
//       break;
//     case 6:
//       break;
//     case 7:
//       break;
//     case 8:
//       break;
//     case 9:
//       break;
//     default:
//       console.error(`Generation ${generation} not found!`);
//   }
// };

// fetchDex(1);
