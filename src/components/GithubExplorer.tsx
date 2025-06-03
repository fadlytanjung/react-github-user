import { useEffect } from "react";
import { Container, Flex, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import { useSearchUsers } from "@/services/repositories";
import { FormProvider, useForm } from "react-hook-form";
import { FormUsernameSchema, type FormUsernameValues } from "@/services/model";
import { zodResolver } from "@hookform/resolvers/zod";
import SearchBar from "@/components/SearchBar";
import SearchSkeleton from "./SearchSkeleton";
import RepoList from "./RepoList";

export default function GitHubExplorer() {
  const form = useForm<FormUsernameValues>({
    resolver: zodResolver(FormUsernameSchema),
    defaultValues: {
      username: '',
    },
    mode: "onSubmit"
  });

  const username = form.getValues("username");
  const isSubmitted = form.formState.isSubmitted;
  const { data, isLoading, error } = useSearchUsers(username, isSubmitted);

  useEffect(() => {
    if (isSubmitted) {
      form.reset({ username }, { keepValues: true });
    }
  }, [isSubmitted, username]);

  const renderFooter = (
    <Text
      fz="sm"
      c="dimmed"
      ta="center"
      my="lg"
    >
      Built with ❤️ by <a href="https://github.com/fadlytanjung" target="_blank" rel="noopener noreferrer">Fadly Tanjung</a>
    </Text>
  );

  const renderLayout = (content: React.ReactNode) => (
    <Flex direction="column" justify="space-between" style={{ minHeight: "100vh" }}>
      <Container size="md" py="md">
        <FormProvider {...form}>
          <Stack gap={24}>
            <SearchBar loading={isLoading} />
            {content}
          </Stack>
        </FormProvider>
      </Container>
      {renderFooter}
    </Flex>
  );


  if (data?.total_count === 0) {
    return renderLayout(
      <Flex direction="column" gap={4} mx="auto">
        <Image src="not-found.avif" maw={300} />
        <Text fw={600} fz={20} ta="center">Data Not Found</Text>
      </Flex>
    );
  }

  if (error) {
    return renderLayout(
      <Flex direction="column" gap={4} mx="auto">
        <Image src="error.jpg" maw={300} />
        <Text fw={600} fz={20} ta="center">Oops! Something went wrong</Text>
      </Flex>
    );
  };

  return renderLayout(
    <SimpleGrid spacing="md" cols={{ base: 1, sm: 2, lg: 3 }}>
      {isLoading ? <SearchSkeleton /> : <RepoList data={data?.items || []} />}
    </SimpleGrid>
  );
}
