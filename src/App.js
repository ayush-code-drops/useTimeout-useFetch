import { Fetch } from "./components/Fetch";
import { Timeout } from "./components/Timeout";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Custom Hooks</h2>
      <h3>useTimeout: gets ready after given delay</h3>

      <Timeout />

      <hr />

      <h3>useFetch : fetches info from server</h3>
      <Fetch />
    </div>
  );
}
