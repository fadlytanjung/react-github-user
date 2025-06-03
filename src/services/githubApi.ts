const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_GITHUB_TOKEN || ''; // setup via .env

const headers: HeadersInit = token
  ? { Authorization: `token ${token}` }
  : {};

export async function fetchReposByUsername({
  username,
  pageParam = 1,
  perPage = 5,
}: {
  username: string;
  pageParam?: number;
  perPage?: number;
}) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=stars&direction=desc&per_page=${perPage}&page=${pageParam}`,
    { headers }
  );

  if (!res.ok) throw new Error("Failed to fetch repos");

  const data = await res.json();
  const link = res.headers.get("Link");
  const hasNextPage = link?.includes('rel="next"') ?? false;

  return {
    data,
    nextPage: hasNextPage ? pageParam + 1 : undefined,
  };
}  

export async function searchUsersByName(name: string, page = 1, perPage = 5) {
  const res = await fetch(
    `${BASE_URL}/search/users?q=fullname:${name}&per_page=${perPage}&page=${page}`,
    { headers }
  );
  if (!res.ok) throw new Error('Failed to search users');
  return res.json();
}
