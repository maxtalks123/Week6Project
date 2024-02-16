export default function ResetButton({ functiontoResetCount }) {
  return <button onClick={() => functiontoResetCount(0)}>Reset Cookies</button>;
}
