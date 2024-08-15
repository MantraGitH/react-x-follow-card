import "./App.css";
import { XFollowCard } from "./xFollowCard";

export function App() {
  return (
    <section className="App">
      <XFollowCard isFollowing userName="reactjs">React </XFollowCard>
      <XFollowCard isFollowing={false} userName="nodejs">Node</XFollowCard>
    </section>
  );
}
