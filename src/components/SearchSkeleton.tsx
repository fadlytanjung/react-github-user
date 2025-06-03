import { Flex, Skeleton } from "@mantine/core";

export default function SearchSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <Flex
          p="md"
          align="center"
          gap={16}
          style={{ borderRadius: 8 }}
          key={i}
        >
          <Skeleton w={40} h={40} circle />
          <Skeleton w="70%" h={14} />
        </Flex>
      ))}
    </>
  );
}
