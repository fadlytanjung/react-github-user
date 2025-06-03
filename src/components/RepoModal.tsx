import {
  Modal,
  Button,
  Flex,
} from "@mantine/core";
import { useInfiniteUserRepos } from "@/services/repositories";
import SearchSkeleton from "./SearchSkeleton";
import RepoDetail from "./RepoDetail";

interface Props {
  username: string;
  opened: boolean;
  onClose: () => void;
}

export default function RepoModal({ username, opened, onClose }: Props) {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteUserRepos(username);

  const allRepos = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <Modal opened={opened} onClose={onClose} title={`Repositories of ${username}`} size="lg">
      {isLoading ? (
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
      )}
    </Modal>
  );
}
