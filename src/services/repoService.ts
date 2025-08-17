import { safeGitHubRequest, githubClient } from '@/lib/githubClient';
import { Buffer } from 'buffer';

// List all public repositories for a user
export async function fetchUserRepos(username: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.repos.listForUser({ username });
    return data;
  });
}

// Get details for a specific repository
export async function fetchRepoDetails(owner: string, repo: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.repos.get({ owner, repo });
    return data;
  });
}

// Get README for a specific repository
export async function fetchRepoReadme(owner: string, repo: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.repos.getReadme({ owner, repo });
    if (!data.content || !data.encoding) return null;

    if (data.encoding === 'base64') {
      return Buffer.from(data.content, 'base64').toString('utf-8');
    }
    return data.content;
  });
}

// Get languages used in a repository
export async function fetchRepoLanguages(owner: string, repo: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.repos.listLanguages({ owner, repo });
    return data;
  });
}

// Get topics for a repository
export async function fetchRepoTopics(owner: string, repo: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.repos.getAllTopics({ owner, repo });
    return data;
  });
}

// Get contributors for a repository
export async function fetchRepoContributors(owner: string, repo: string) {
  return safeGitHubRequest(async () => {
    const { data } = await githubClient.rest.repos.listContributors({ owner, repo });
    return data;
  });
}
