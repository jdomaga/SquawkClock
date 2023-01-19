import ActiveTimer from "../models/ActiveTimer";
import TimerRow from "./TimerRow";
export default function TimerTable({
  timers,
  finishTimer,
  deleteTimer,
  finished,
}: {
  timers: ActiveTimer[];
  finishTimer: Function;
  deleteTimer: Function;
  finished: boolean;
}): JSX.Element {
  return (
    <div className="w-full timer-table">
      <table
        className={`table-auto w-full text-slate-600 border-2 border-solid border-slate-200`}
      >
        <thead className="bg-slate-100">
          <tr>
            <th scope="col" className="">
              Activity
            </th>
            <th scope="col">Start Date</th>
            <th scope="col">Start Time</th>
            <th scope="col">Duration</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="border-2 border-solid border-slate-200 text-slate-600">
          {timers.map((timer, index) => (
            <TimerRow
              timer={timer}
              key={`${timer.activity}-${timer.startDate}`}
              index={index}
              finishTimer={finishTimer}
              deleteTimer={deleteTimer}
              finished={finished}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
