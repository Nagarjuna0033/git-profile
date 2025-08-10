import { safeGitHubRequest, githubClient } from '@/lib/githubClient';

export async function fetchUser(username: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.users.getByUsername({ username });
    return data;
  });
}
