import { useState, createContext, useEffect, useContext } from "react";
import ActiveTimer from "../models/ActiveTimer";

const MINS_PER_UPDATE = 1;

const TimersContext = createContext< ReturnType<typeof useTimers> >({
    timers : [],
    finishedTimers: [],
    setFinishedTimers: () => {return},
    setTimers: () => {return}
});

function useTimers(){
    const [timers, setTimers] = useState<Array<ActiveTimer>>([]);
  
    const [finishedTimers, setFinishedTimers] = useState<Array<ActiveTimer>>([]);

    return {
        timers,
        finishedTimers,
        setTimers,
        setFinishedTimers
    }
}

export function TimersProvider({ children }: { children: JSX.Element }) {

    const allTimers = useTimers();

  useEffect(() => {
    function updateDuration() {
      const now: Date = new Date();
      const localTimers = allTimers.timers.map((timer) => {
        const diffSecs: number =
          (now.getTime() - timer.startDate.getTime()) / 1000;
        // const diffMins: number = Math.ceil(diffSecs); flag: uncomment for easier testing
        const diffMins: number = Math.ceil(diffSecs / 60);
        return { ...timer, duration: diffMins.toString() };
      });
      allTimers.setTimers(localTimers);
    }

    const interval = window.setInterval(updateDuration, 1000 * MINS_PER_UPDATE);
    return () => {
      window.clearInterval(interval);
    };
  }, [allTimers.timers]);

  

  return <TimersContext.Provider value={allTimers}>{children}</TimersContext.Provider>;
}

export function useTimersContext(){
    return useContext(TimersContext)
}
