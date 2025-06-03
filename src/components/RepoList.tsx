import type { GitHubUser } from "@/types";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import RepoCard from "./RepoCard";
import RepoListAccordion from "./RepoListAccordion";
import RepoModal from "./RepoModal";

export default function RepoList({ data }: { data: GitHubUser[] }) {
  const [activeUser, setActiveUser] = useState<string>('');
  const isDesktop = useMediaQuery("(min-width: 48em)");

  if (!isDesktop) {
    return (
      <RepoListAccordion data={data} />
    );
  }
  return <>
    {data.map((el) => (
      <RepoCard {...el} key={el.id} onClick={() => setActiveUser(el.login)} />
    ))}
    <RepoModal
      username={activeUser}
      opened={!!activeUser}
      onClose={() => setActiveUser('')}
    />
  </>
}