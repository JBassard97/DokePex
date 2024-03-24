async function fetchMove(movesUrl) {
  const results: any = await fetch(movesUrl);
  return results; 
}
