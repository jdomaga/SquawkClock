import { useState } from "react";

function createDateFromInputs( date: String, time: String): Date{
    if(date && time) return new Date(date + "T" + time)
    // if only date, default to current time
    if(date){
        const [year, month, day] = date.split('-');
        // subtract 1 because input starts with 1 for Jan, but date object starts with 0
        return new Date( parseInt(year), parseInt(month) - 1 ,parseInt(day));
    }
    // if only time, default to current date
    if(time){
        const today = new Date();
        const [hours, mins] = time.split(':')
        today.setHours(parseInt(hours));
        today.setMinutes(parseInt(mins));
        return today;
    }
    // else by default choose current day/time
    return new Date()
}

export default function TimerInput({addTimer} : {addTimer : Function}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function addTime(){
    //if we have a day specified, time is optional
    const newDateTime = createDateFromInputs(date, time);
    // only add timer if they actually gave it a name...
    if(name)
    addTimer(name, newDateTime);
    // reset inputs
    setName('')
    setDate('')
    setTime('')
  }

  return (
    <div className="flex flex-col">
      <div className=" mb-4 mx-4 flex gap-4">
        <label
          className="font-bold inline-block text-bottom"
          htmlFor="activityName"
        >
          Activity Name:
        </label>
        <input
          className="border-b-2 border-solid border-slate-600"
          id="activityName"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="font-medium" htmlFor="startDate">
          Start Date (optional)
        </label>
        <input
          className="border-b-2 border-solid border-slate-600"
          id="startDate"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <label className="font-medium" htmlFor="startTime">
          Start Time (optional)
        </label>
        <input
          className="border-b-2 border-solid border-slate-600"
          id="startTime"
          type="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        />
      </div>
      <button className="font-bold w-48 border-solid border-slate-600" onClick={addTime}>
        Add Timer
      </button>
    </div>
  );
}
