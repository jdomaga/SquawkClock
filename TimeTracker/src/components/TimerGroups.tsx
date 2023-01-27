import ActiveTimer from "../models/ActiveTimer";
import Accordion from "./Accordion";
import TimerInput from "./TimerInput";
import TimerTable from "./TimerTable";
import birdclock from "/birdclock.png";
import sleepy from "/sleepbird.png";
import workbird from "/workbird.png";

export default function TimerGroups({
  timers,
  setTimers,
  finishedTimers,
  setFinishedTimers,
}: {
  timers: ActiveTimer[];
  setTimers: Function;
  finishedTimers: ActiveTimer[];
  setFinishedTimers: Function;
}) {
  function addTimer(activity: string, startDate: Date) {
    const timer: ActiveTimer = { activity, startDate, duration: "0" };
    setTimers([...timers, timer]);
  }

  function finishTimer(index: number) {
    const newActive = timers.filter((timer) => timer);
    const finishedTime = newActive.splice(index, 1);
    setTimers(newActive);
    setFinishedTimers([...finishedTimers, ...finishedTime]);
  }

  function deleteActive(index: number) {
    const newActive = timers.filter((timer) => timer);
    newActive.splice(index, 1);
    setTimers(newActive);
  }

  function deletePast(index: number) {
    const newpast = finishedTimers.filter((timer) => timer);
    newpast.splice(index, 1);
    setFinishedTimers(newpast);
  }

  const cards = [
    {
      title: "Add a timer",
      openStart: true,
      titleIconPath: workbird,
      content: <TimerInput addTimer={addTimer} />,
    },
    {
      title: "Ongoing Timers",
      openStart: true,
      titleIconPath: birdclock,
      content: (
        <TimerTable
          timers={timers}
          finishTimer={finishTimer}
          deleteTimer={deleteActive}
          finished={false}
        ></TimerTable>
      ),
    },
    {
      title: "Past Timers",
      openStart: true,
      titleIconPath: sleepy,
      content: (
        <TimerTable
          timers={finishedTimers}
          finishTimer={finishTimer}
          deleteTimer={deletePast}
          finished={true}
        ></TimerTable>
      ),
    },
  ];
  return <Accordion items={cards} />;
}
