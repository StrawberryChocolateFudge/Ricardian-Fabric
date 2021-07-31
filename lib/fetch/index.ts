export async function fetchDependency(url: string) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}
