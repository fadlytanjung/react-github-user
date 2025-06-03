import { Flex, Avatar, Text, Accordion, Button } from "@mantine/core";
import { useState } from "react";
import { useInfiniteUserRepos } from "@/services/repositories";
import type { GitHubUser } from "@/types";
import SearchSkeleton from "./SearchSkeleton";
import RepoDetail from "./RepoDetail";

export default function RepoListAccordion({ data }: { data: GitHubUser[] }) {
  const [activeUser, setActiveUser] = useState<string | null>(null);
  const {
    data: repos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteUserRepos(activeUser || "");

  const allRepos = (repos?.pages || []).flatMap((page) => page.data) ?? [];
  return (
    <Accordion
      defaultValue={"user"}
      value={activeUser}
      onChange={(login) => setActiveUser(login)}
    >
      {data.map((el) => (
        <Accordion.Item value={el.login} key={el.id}>
          <Accordion.Control>
            <Flex align="center" gap="sm">
              <Avatar src={el.avatar_url} alt={el.login} size="sm" />
              <Text fw={600}>{el.login}</Text>
            </Flex>
          </Accordion.Control>
          <Accordion.Panel>
            {activeUser === el.login && (
              isLoading ? (
                <SearchSkeleton />
              ) : (
                <Flex direction="column" gap="md">
                  {allRepos.map((repo) => (
                    <RepoDetail key={repo.id} {...repo} />
                  ))}
                  {hasNextPage && (
                    <Button
                      onClick={() => fetchNextPage()}
                      loading={isFetchingNextPage}
                      variant="light"
                      w={180}
                      mx="auto"
                    >
                      Load More
                    </Button>
                  )}
                </Flex>
              )
            )}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}