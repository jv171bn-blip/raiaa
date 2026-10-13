async function check() {
  const res = await fetch('https://drogariacarvalho.com/assets/index-RmuiIY6z.js', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const js = await res.text();
  console.log('JS length:', js.length);

  // Search for API endpoints, product arrays, or imports
  const apiMatches = [...js.matchAll(/https?:\/\/[a-zA-Z0-9.-]+\/[a-zA-Z0-9_\-\/.]*/g)].map(m => m[0]);
  const uniqueApis = [...new Set(apiMatches)].filter(u => !u.includes('google') && !u.includes('w3.org') && !u.includes('schema.org'));
  console.log('Endpoints / URLs in bundle:', uniqueApis);

  // Check chunk imports
  const chunkMatches = [...js.matchAll(/\/assets\/[a-zA-Z0-9_\-.]+\.js/g)].map(m => m[0]);
  console.log('Chunks:', [...new Set(chunkMatches)]);
}
check().catch(console.error);
