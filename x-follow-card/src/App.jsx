import { useState } from "react";
import "./App.css";
import { XFollowCard } from "./xFollowCard";

export function App() {
  const [name, setName] = useState("nodejs");
  return (
    <section className="App">
      <XFollowCard userName="reactjs">React </XFollowCard>
      <XFollowCard userName={name}>Node</XFollowCard>

      <button onClick={() => setName("github")}>Cambio Nombre</button>
    </section>
  );
}
