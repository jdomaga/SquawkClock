import { useTimersContext } from "../contexts/TimersContext";
export default function DownloadSave() {

  const allTimers = useTimersContext();

  const csvStr = JSON.stringify({
    activeTimers: allTimers?.timers,
    finishedTimers: allTimers?.finishedTimers
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
