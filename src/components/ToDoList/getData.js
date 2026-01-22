export async function getData() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Response status: ${res.status}`);
  return res.json();
}