import ActiveTimer from "../models/ActiveTimer";
import MetricTimer from "../models/MetricTimer";

export function dayFromDate( dateTime: Date): string {
    let date: string[] =  dateTime.toISOString().split('T');
    date = date[0].split('-');
    date = date.reverse();
    return date.join('/')
}

export function formatDuration(duration: string): string {
    const time = parseInt(duration);
    const mins = time % 60;
    const hours = Math.floor(time / 60) % 24;
    const days = Math.floor(time / (60 * 24));
    console.log(time)
    
    const dstr = days > 0 ? `${days} days, ` : '';
    const hstr = hours > 0 ? `${hours} hours, ` : '';
    return `${dstr}${hstr}${mins} minutes`;
}

export function CombineTimers( timers : ActiveTimer[]) : Array<MetricTimer>{
    const finishedTimers : Array<MetricTimer> = [];
    const groupedTimers: {[key: string] : number}= {};
    for( let timer of timers){
        if(timer.activity in groupedTimers){
            groupedTimers[timer.activity] += parseInt(timer.duration);
        }
        else groupedTimers[timer.activity] = parseInt(timer.duration);
    }
    for(let [activity, duration] of Object.entries(groupedTimers)){
        finishedTimers.push({
            activity, duration
        })
    }
    return finishedTimers;
}