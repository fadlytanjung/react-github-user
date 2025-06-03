import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { searchUsersByName, fetchReposByUsername } from '@/services/githubApi';
import type { Repo, GitHubUserSearchResponse } from '@/types';

export interface ReposResponse {
  data: Repo[];
  nextPage?: number;
}

export type InfiniteResponse = {
  pageParams: number[];
  pages: ReposResponse[];
}

export function useSearchUsers(query: string, enabled: boolean) {
  return useQuery<GitHubUserSearchResponse>({
    queryKey: ['search-users', query],
    queryFn: () => searchUsersByName(query),
    enabled: enabled && query.length > 2,
  });
};


export function useInfiniteUserRepos(username: string) {
  return useInfiniteQuery<ReposResponse, Error, InfiniteResponse, string[], number>({
    queryKey: ["user-repos", username],
    enabled: !!username,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    queryFn: ({ pageParam = 1 }) =>
      fetchReposByUsername({ username, pageParam }),
  });
}