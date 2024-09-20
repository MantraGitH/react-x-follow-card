import { useState } from "react";
import "./App.css";
import { XFollowCard } from "./xFollowCard";

export function App() {
  const [name, setName] = useState("nodejs");
  return (
    <section className="App">
      <XFollowCard userName="reactjs" initialIsFollowing={true}>React </XFollowCard>
      <XFollowCard userName={name}>Node</XFollowCard>

      <button onClick={() => setName("github")}>Cambiar Nombre</button>
    </section>
  );
}
