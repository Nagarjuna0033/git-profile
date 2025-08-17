import { safeGitHubRequest, githubClient } from '@/lib/githubClient';

// List followers for a user
export async function fetchUserFollowers(username: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.users.listFollowersForUser({ username });
    return data;
  });
}

// List users followed by a user
export async function fetchUserFollowing(username: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.users.listFollowingForUser({ username });
    return data;
  });
}

// List organizations for a user
export async function fetchUserOrgs(username: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.orgs.listForUser({ username });
    return data;
  });
}

// List gists for a user
export async function fetchUserGists(username: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.gists.listForUser({ username });
    return data;
  });
}

// List starred repositories for a user
export async function fetchUserStarredRepos(username: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.activity.listReposStarredByUser({ username });
    return data;
  });
}
