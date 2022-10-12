const baseUrl = 'https://swapi.dev/api/starships'

export async function getStarships() {
  const res = await fetch(baseUrl)
  return res.json()
}