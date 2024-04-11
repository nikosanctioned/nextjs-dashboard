// page that fetches data
import { draftMode, headers } from 'next/headers';

async function getData() {
  const { isEnabled } = draftMode();

  const url = isEnabled
    ? 'https://api.spaceflightnewsapi.net/v4/articles/?title_contains_one=Draft'
    : 'https://api.spaceflightnewsapi.net/v4/articles/?title_contains_one=Production';

  const res = await fetch(url);
  return res.json();
}

export default async function Page() {
  const { title, results } = await getData();
  const nonce = headers().get('x-nonce');

  return (
    <main>
      {`"NONCE", ${nonce}`}
      {results.map((result: any) => (
        <div key={result.id}>
          <h2>
            {title}: {result.title}
          </h2>
          <p>{result.summary}</p>
        </div>
      ))}
    </main>
  );
}
