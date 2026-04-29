function parseUrlQuery(url) {
  const queryString = url.split("?")[1];
  if (!queryString) {
    return {};
  }
  const pairs = queryString.split("&");
  const queryParams = {};

  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  });

  return queryParams;
}

parseUrlQuery("https://example.com/search?name=Alice&age=30");

parseUrlQuery(
  "https://freecodecamp.org/learn?skill=programming&language=python",
);

parseUrlQuery("https://freecodecamp.org/items?category=books&sort=asc&page=2");

parseUrlQuery("https://example.com?redirect=freecodecamp.org/learn&when=now");
