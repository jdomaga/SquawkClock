import { useEffect, useState } from "react";
import "./App.css";
import Metrics from "./components/charts/Metrics";
import Hero from "./components/Hero";
import TimerGroups from "./components/TimerGroups";
import ActiveTimer from "./models/ActiveTimer";

function App() {
  const [timers, setTimers] = useState<Array<ActiveTimer>>([{activity: 'jerkin it', startDate: new Date(), duration: '0'}]);

  const [finishedTimers, setFinishedTimers] = useState<Array<ActiveTimer>>([]);
  
  useEffect(() => {
    function updateDuration() {
      const now: Date = new Date();
      const localTimers = timers.map((timer) => {
        const diffSecs: number =
          (now.getTime() - timer.startDate.getTime()) / 1000;
        const diffMins: number = Math.ceil(diffSecs);
        // const diffMins: number = Math.ceil(diffSecs / 60);
        return { ...timer, duration: diffMins.toString() };
      });
      setTimers(localTimers);
    }

    const interval = window.setInterval(updateDuration, 1000 * 60);
    return () => {
      window.clearInterval(interval);
    };
  }, [timers]);

  return (
    <div className="App flex flex-col gap-y-8">
      <Hero bgUrl="/bg.jpg" title="Squawk O' Clock">
        <button className="bg-transparent text-white border-solid border border-slate-100 w-56 text-left">
          Import from CSV
        </button>
        <button className="bg-transparent text-white border-solid border border-slate-100 w-56 text-left">
          Export to CSV
        </button>
        <button className="bg-black text-white w-56"> More Projects</button>
      </Hero>
      <TimerGroups timers={timers} setTimers={setTimers} finishedTimers={finishedTimers} setFinishedTimers={setFinishedTimers} />
      <Metrics timers={finishedTimers}/>
    </div>
  );
}

export default App;
