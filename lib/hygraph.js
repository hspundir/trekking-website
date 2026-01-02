export async function fetchHygraph(query) {
  const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store", // always fetch fresh data
  });

  const json = await res.json();

  if (json.errors) {
    console.error("Hygraph errors:", json.errors);
    throw new Error("Failed to fetch data");
  }

  return json.data;
}
