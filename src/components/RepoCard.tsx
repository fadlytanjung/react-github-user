import type { GitHubUser } from "@/types";
import { Flex, Avatar, Text } from "@mantine/core";

export default function RepoCard({
  avatar_url,
  login,
  onClick,
}: Partial<GitHubUser> & { onClick?: () => void }) {
  return (
    <Flex
      p="md"
      align="center"
      gap={16}
      bg="gray.1"
      onClick={onClick}
      style={{ borderRadius: 8, cursor: "pointer" }}
    >
      <Avatar src={avatar_url} alt={login} />
      <Text fz={14} fw={600}>{login}</Text>
    </Flex>
  );
}
