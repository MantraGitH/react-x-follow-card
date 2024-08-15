import "./App.css";
import { XFollowCard } from "./xFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <XFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="reactjs"
        name="React"
      />
      <XFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="nodejs"
        name="Node.js"
      />
      <XFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="github"
        name="GitHub"
      />
      <XFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="angular"
        name="Angular"
      />
      <XFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="vercel"
        name="Vercel"
      />
    </section>
  );
}
