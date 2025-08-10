import { Octokit } from '@octokit/core';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';
import { RequestError } from 'octokit';
const MyOctokit = Octokit.plugin(restEndpointMethods);

export const githubClient = new MyOctokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN || undefined,
  userAgent: 'my-app/v1.2.3',
  request: {
    timeout: 5000,
  },
  headers: {
    accept: 'application/vnd.github+json',
  },
});

export async function safeGitHubRequest<T>(requestFn: () => Promise<T>): Promise<T> {
  try {
    return await requestFn();
  } catch (error) {
    if (error instanceof RequestError) {
      console.error(`GitHub API Error [${error.status}]: ${error.message}`);
      console.error('Request:', error.request);
      console.error('Response:', error.response?.data);
      const cleanMessage =
        error.status === 404
          ? 'User not found on GitHub'
          : typeof error.response?.data === 'string'
            ? error.response.data
            : JSON.stringify(error.response?.data ?? error.message);

      throw new Error(cleanMessage);
    } else {
      console.error('Unexpected Error:', error);
    }
    throw error;
  }
}
