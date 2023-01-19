import ActiveTimer from "../models/ActiveTimer";

export default function TimerRow({
  timer,
  index,
  finishTimer,
  deleteTimer,
  finished,
}: {
  timer: ActiveTimer;
  index: number;
  finishTimer: Function;
  deleteTimer: Function;
  finished: boolean;
}) {
  function finish() {
    finishTimer(index);
  }

  function deleteTime() {
    deleteTimer(index);
  }

  return (
    <tr>
      <td>{timer.activity}</td>
      <td>{timer.startDate.toLocaleDateString()}</td>
      <td>
        {timer.startDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </td>
      <td>{timer.duration}</td>
        <td>
            {!finished && (
            <button
                className="bg-transparent font-bold text-green-500"
                onClick={finish}
            >
                Finish {index}
            </button>
            )}
          <button
            className="bg-transparent font-bold text-red-500"
            onClick={deleteTime}
          >
            Delete
          </button>
        </td>
    </tr>
  );
}
