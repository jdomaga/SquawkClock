import ActiveTimer from "../models/ActiveTimer";
import Accordion from "./Accordion";
import TimerInput from "./TimerInput";
import TimerTable from "./TimerTable";
import birdclock from "/assets/img/birdclock.png";
import sleepy from "/assets/img/sleepbird.png";
import workbird from "/assets/img/workbird.png";
import { useTimersContext } from "../contexts/TimersContext";

export default function TimerGroups() {

 const allTimers = useTimersContext();

  
  const {timers, finishedTimers, setTimers, setFinishedTimers} = allTimers;

  function addTimer(activity: string, startDate: Date) {
    const timer: ActiveTimer = { activity, startDate, duration: "1" };
    setTimers([...timers, timer]);
  }

  function finishTimer(index: number) {
    const newActive = timers.filter((timer : ActiveTimer) => timer);
    const finishedTime = newActive.splice(index, 1);
    setTimers(newActive);
    setFinishedTimers([...finishedTimers, ...finishedTime]);
  }

  function deleteActive(index: number) {
    const newActive = timers.filter((timer : ActiveTimer) => timer);
    newActive.splice(index, 1);
    setTimers(newActive);
  }

  function deletePast(index: number) {
    const newpast = finishedTimers.filter((timer : ActiveTimer) => timer);
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
