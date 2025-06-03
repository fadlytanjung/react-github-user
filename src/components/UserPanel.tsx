import { Accordion } from "@mantine/core";
import RepoList from "./RepoList";
import type { Repo } from "../types";

type Props = {
  username: string;
  repos: Repo[];
};

export default function UserPanel({ username, repos }: Props) {
  return (
    <Accordion defaultValue={username}>
      <Accordion.Item value={username}>
        <Accordion.Control>{username}</Accordion.Control>
        <Accordion.Panel>
          <RepoList repos={repos} />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
