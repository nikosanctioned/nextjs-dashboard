async function getData() {
  const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles/', {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  console.log('res', res);

  return res.json();
}

export default async function Page() {
  const data = await getData();
  const results = data.results;
  console.log('data', data);
  return results.map((article) => (
    <div key={article.id}>
      <h2>Title: {article.title}</h2>
      <p>Summary: {article.summary}</p>
    </div>
  ));
}
