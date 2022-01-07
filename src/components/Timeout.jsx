import { useTimeout } from "../Hooks/CustomHooks";

export function Timeout() {
  const isReady = useTimeout(2000);
  return <div>{isReady ? <h3>Ready</h3> : <h3>Not Ready</h3>}</div>;
}
