export default function ResetButton({
  functiontoResetCount,
  functiontoResetCPS,
}) {
  return (
    <button onClick={() => functiontoResetCount(0) & functiontoResetCPS(1)}>
      Reset Cookies
    </button>
  );
}
