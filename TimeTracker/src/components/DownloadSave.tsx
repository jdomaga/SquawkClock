import ActiveTimer from "../models/ActiveTimer";
export default function DownloadSave({
  timers,
  finishedTimers,
}: {
  timers: ActiveTimer[];
  finishedTimers: ActiveTimer[];
}) {
  const csvStr = JSON.stringify({
    activeTimers: timers,
    finishedTimers
  });

  return (
    <a
      className="link-button"
      download="example.txt"
      target="_blank"
      href={`data:text/csv;charset=utf-8,${encodeURI(csvStr)}`}
    >
    <button className="bg-transparent text-white border-solid border border-slate-100 w-56 text-left">
        Save to file
    </button>
      </a>
  );
}
