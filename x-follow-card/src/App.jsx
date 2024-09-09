import "./App.css";
import { XFollowCard } from "./xFollowCard";

export function App() {
  return (
    <section className="App">
      <XFollowCard userName="reactjs">React </XFollowCard>
      <XFollowCard userName="nodejs">Node</XFollowCard>
    </section>
  );
}
