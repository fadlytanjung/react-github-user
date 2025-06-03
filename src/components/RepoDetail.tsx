import type { Repo } from "@/types";
import { Anchor, Card, Flex, Text } from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";

export default function RepoDetail({ clone_url, name, stargazers_count, description }: Repo) {
  return (
    <Anchor
      href={clone_url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        py="sm"
        bg="gray.0"
        withBorder
        style={{
          cursor: "pointer",
          border: "1px solid var(--mantine-color-gray-3)",
          transition: "border-color 150ms ease, box-shadow 150ms ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--mantine-color-blue-6)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--mantine-color-gray-3)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <Flex justify="space-between">
          <div>
            <Text fw={700} size="sm">{name}</Text>
            <Text size="xs" c="dimmed">{description || "No description"}</Text>
          </div>
          <Flex align="center" gap={4}>
            <Text size="sm">{stargazers_count}</Text>
            <IconStarFilled size={16} color="orange" />
          </Flex>
        </Flex>
      </Card>
    </Anchor>
  )
}