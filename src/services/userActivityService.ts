import { safeGitHubRequest, githubClient } from '@/lib/githubClient';

// List public events performed by a user
export async function fetchUserEvents(username: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.activity.listPublicEventsForUser({ username });
    return data;
  });
}

// List events received by a user
export async function fetchUserReceivedEvents(username: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.activity.listReceivedPublicEventsForUser({ username });
    return data;
  });
}
