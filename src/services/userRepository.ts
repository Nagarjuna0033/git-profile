import { fetchUser } from './fetchClient';
import type { GitHubRepo } from '@/models/Repo';
import {
  fetchUserRepos,
  fetchRepoDetails,
  fetchRepoReadme,
  fetchRepoLanguages,
  fetchRepoTopics,
  fetchRepoContributors,
} from './repoService';
import { fetchUserEvents, fetchUserReceivedEvents } from './userActivityService';
import {
  fetchUserFollowers,
  fetchUserFollowing,
  fetchUserOrgs,
  fetchUserGists,
  fetchUserStarredRepos,
} from './userSocialService';
// import { fetchPinnedRepos, fetchUserContributions } from './githubGraphqlClient';
import type { RepoData } from '@/models/Repo';

export async function getFullUserProfile(username: string) {
  const [
    user,
    repos,
    events,
    receivedEvents,
    followers,
    following,
    orgs,
    gists,
    starredRepos,
    // pinnedRepos,
    // contributions,
  ] = await Promise.all([
    fetchUser(username),
    fetchUserRepos(username),
    fetchUserEvents(username),
    fetchUserReceivedEvents(username),
    fetchUserFollowers(username),
    fetchUserFollowing(username),
    fetchUserOrgs(username),
    fetchUserGists(username),
    fetchUserStarredRepos(username),
    // fetchPinnedRepos(username),
    // fetchUserContributions(username),
  ]);

  let allRepos: RepoData[] = [];

  if (repos && repos.length > 0) {
    const repoPromises: Promise<RepoData>[] = repos.map(async (repo) => {
      const owner = repo.owner.login;
      const repoName = repo.name;
      const [details, readme, languages, topics, contributors] = await Promise.all([
        fetchRepoDetails(owner, repoName),
        fetchRepoReadme(owner, repoName).catch(() => null),
        fetchRepoLanguages(owner, repoName),
        fetchRepoTopics(owner, repoName),
        fetchRepoContributors(owner, repoName),
      ]);
      return {
        details: details as GitHubRepo,
        readme,
        languages,
        topics: topics.names,
        contributors,
      };
    });

    allRepos = await Promise.all(repoPromises);
  }

  return {
    user,
    repos,
    events,
    receivedEvents,
    followers,
    following,
    orgs,
    gists,
    starredRepos,
    // pinnedRepos,
    // contributions,
    allRepos,
  };
}
