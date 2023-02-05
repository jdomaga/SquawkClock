import { useEffect, useState } from "react";
import "./App.css";
import Metrics from "./components/charts/Metrics";
import Hero from "./components/Hero";
import TimerGroups from "./components/TimerGroups";
import DownloadSave from './components/DownloadSave'
import ImportSave from './components/ImportSave'
import ActiveTimer from "./models/ActiveTimer";
import bgHero from "/assets/img/bg.jpg";

const MINS_PER_UPDATE = 1;

function App() {
  const [timers, setTimers] = useState<Array<ActiveTimer>>([]);

  const [finishedTimers, setFinishedTimers] = useState<Array<ActiveTimer>>([]);
  
  useEffect(() => {
    function updateDuration() {
      const now: Date = new Date();
      const localTimers = timers.map((timer) => {
        const diffSecs: number =
          (now.getTime() - timer.startDate.getTime()) / 1000;
        // const diffMins: number = Math.ceil(diffSecs); flag: uncomment for easier testing
        const diffMins: number = Math.ceil(diffSecs / 60);
        return { ...timer, duration: diffMins.toString() };
      });
      setTimers(localTimers);
    }

    const interval = window.setInterval(updateDuration, 1000 * MINS_PER_UPDATE);
    return () => {
      window.clearInterval(interval);
    };
  }, [timers]);

  return (
    <div className="App flex flex-col gap-y-8">
      <Hero bgUrl={bgHero} title="Squawk O' Clock">
        <ImportSave setFinishedTimers={setFinishedTimers} setTimers={setTimers} />
        <DownloadSave finishedTimers={finishedTimers} timers={timers} />
        <button className="bg-black text-white w-56"> More Projects ( Soon )</button>
      </Hero>
      <TimerGroups timers={timers} setTimers={setTimers} finishedTimers={finishedTimers} setFinishedTimers={setFinishedTimers} />
      <Metrics timers={finishedTimers}/>
    </div>
  );
}

export default App;
