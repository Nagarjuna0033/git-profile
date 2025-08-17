import { request } from 'graphql-request';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function githubGraphQLRequest<T>(query: string, variables: Record<string, any> = {}) {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (!token) throw new Error('GitHub token is required for GraphQL requests');
  return request<T>(GITHUB_GRAPHQL_API, query, variables, {
    Authorization: `Bearer ${token}`,
  });
}

// Example: Fetch pinned repositories for a user
export async function fetchPinnedRepos(username: string) {
  const query = `
    query($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage { name color }
            }
          }
        }
      }
    }
  `;
  const data = await githubGraphQLRequest(query, { login: username });
  return data.user.pinnedItems.nodes;
}

// Example: Fetch user contribution calendar
export async function fetchUserContributions(username: string) {
  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;
  const data = await githubGraphQLRequest(query, { login: username });
  return data.user.contributionsCollection.contributionCalendar;
}
