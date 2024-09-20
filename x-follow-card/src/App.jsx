import "./App.css";
import { XFollowCard } from "./xFollowCard";

export function App() {
  return (
    <section className="App">
      <XFollowCard userName="NASA">NASA</XFollowCard>
      <XFollowCard userName="Microsoft">Microsoft</XFollowCard>
    </section>
  );
}
