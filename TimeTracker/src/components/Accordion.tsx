import { useEffect, useState } from "react";
import ActiveTimer from "../models/ActiveTimer";
import ItemCard from "./ItemCard";
import TimerInput from "./TimerInput";
import TimerTable from "./TimerTable";
import birdclock from "/birdclock.png";
import sleepy from "/sleepbird.png";
import workbird from "/workbird.png";

export default function Accordion(): JSX.Element {
  const [timers, setTimers] = useState([
    {
      activity: "Playing Runescape1",
      startDate: new Date(),
      duration: "5 mins",
    },
    {
      activity: "Playing Runescape2",
      startDate: new Date(),
      duration: "5 mins",
    },
    {
      activity: "Playing Runescape3",
      startDate: new Date(),
      duration: "5 mins",
    },
  ]);

  const [finishedTimers, setFinishedTimers] = useState<Array<ActiveTimer>>([]);

  useEffect(() => {
    function updateDuration() {
      const now: Date = new Date();
      const localTimers = timers.map((timer) => {
        const diffSecs: number =
          (now.getTime() - timer.startDate.getTime()) / 1000;
        const diffMins: number = Math.ceil(diffSecs / 60);
        return { ...timer, duration: diffMins.toString() };
      });
      setTimers(localTimers);
    }
    updateDuration();

    const interval = window.setInterval(updateDuration, 1000 * 60);
    return () => {
      window.clearInterval(interval);
    };
  }, []);

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

  return (
    <div className="w-full flex flex-col gap-16">
      <ItemCard
        title="Add a timer"
        openStart={true}
        titleIconPath={workbird}
      >
        <TimerInput />
      </ItemCard>
      <ItemCard
        title="Ongoing Timers"
        openStart={true}
        titleIconPath={birdclock}
      >
        <TimerTable
          timers={timers}
          finishTimer={finishTimer}
          deleteTimer={deleteActive}
          finished={false}
        ></TimerTable>
      </ItemCard>
      <ItemCard title="Past Timers" titleIconPath={sleepy}>
        <TimerTable
          timers={finishedTimers}
          finishTimer={finishTimer}
          deleteTimer={deletePast}
          finished={true}
        ></TimerTable>
      </ItemCard>
    </div>
  );
}
