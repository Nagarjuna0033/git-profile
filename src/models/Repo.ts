import type { components } from '@octokit/openapi-types';

export type GitHubRepo = components['schemas']['repository'];
export type GitHubOrg = components['schemas']['organization-full'];
export type GitHubEvent = components['schemas']['event'];
export type GitHubFollower = components['schemas']['simple-user'];
export type GitHubLanguageStats = components['schemas']['language'];
export type GitHubContributor = components['schemas']['contributor'];

export type RepoData = {
  details: GitHubRepo;
  readme: string | null;
  languages: GitHubLanguageStats;
  topics: string[];
  contributors: GitHubContributor[];
};
