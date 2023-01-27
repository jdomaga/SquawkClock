import ActiveTimer from "../../models/ActiveTimer";
import BarTime from "./BarTime";
import PieTime from "./PieTime";
export default function Metrics({timers} : {timers: ActiveTimer[]}) {

  const title = timers && timers.length ? 
  <h1>How you're using your time</h1> : 
  <h1>get those clocks ticking!</h1>

  return (
    <div>
      {title}
      {
        timers && timers.length &&
        <div>
        <PieTime timers={timers}/>
        <BarTime timers={timers}/>
        </div>
      }
    </div>
  );
}
