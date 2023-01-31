import ActiveTimer from "../../models/ActiveTimer";
import { CombineTimers } from "../../utils/formatters";
import Block from "../Block";
import BarTime from "./BarTime";
import PieTime from "./PieTime";
export default function Metrics({timers} : {timers: ActiveTimer[]}) {

  const title = timers && timers.length ? 
  <h1>How you're using your time</h1> : 
  <h1>get those clocks ticking!</h1>

  const combinedTimers = CombineTimers(timers); 

  return (
    <Block>
      <div className="px-8 py-4">
        {title}
        {
          timers && timers.length &&
          <div className="flex mt-12 justify-between">
          <PieTime timers={combinedTimers}/>
          <BarTime timers={combinedTimers}/>
          </div>
        }
      </div>
    </Block>
  );
}
