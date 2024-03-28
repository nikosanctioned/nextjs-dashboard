import { revalidatePath } from 'next/cache';

async function getData() {
  const res = await fetch(
    'https://api.spaceflightnewsapi.net/v4/articles/?title_contains_one=Elon',
    {
      cache: 'no-store',
    },
  );
  revalidatePath('/articles/');
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
  return results.map((article: any) => (
    <div key={article.id}>
      <h2>Title: {article.title}</h2>
      <p>Summary: {article.summary}</p>
    </div>
  ));
}
