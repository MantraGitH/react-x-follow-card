import "./App.css";
import { XFollowCard } from "./xFollowCard";

export function App() {
  return (
    <>
      <XFollowCard userName="reactjs" name="React" />
      <XFollowCard userName="nodejs" name="Node.js" />
      <XFollowCard userName="github" name="GitHub" />
      <XFollowCard userName="angular" name="Angular" />
      <XFollowCard userName="vercel" name="Vercel" />
    </>
  );
}
