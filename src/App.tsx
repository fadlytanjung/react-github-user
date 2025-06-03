
import GitHubExplorer from './components/GithubExplorer';
import Providers from './providers';

export default function App() {
  return (
    <Providers>
      <GitHubExplorer />
    </Providers>
  );
}