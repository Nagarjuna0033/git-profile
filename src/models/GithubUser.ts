import type { components } from '@octokit/openapi-types';

export type GitHubUser =
  | components['schemas']['private-user']
  | components['schemas']['public-user'];
