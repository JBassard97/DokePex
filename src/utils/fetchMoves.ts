async function fetchMoves(movesUrl) {
  const results: any = await fetch(movesUrl);
  return results; 
}
