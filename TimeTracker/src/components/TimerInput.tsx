import { useState } from "react";

export default function TimerInput({addTimer} : {addTimer : Function}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function addTime(){
    //if we have a day specified, time is optional
    let newDateTime: Date;
    if(date){
        const dtStr = time ? date + 'T' + time : date;
        newDateTime = new Date(dtStr);
    }
    // if we have a time but no date, then use current date
    // flag: check for timezone stuff? see if the actual time is being used....
    else if(time){
        newDateTime = new Date();
        const [hours, mins] = time.split(':')
        newDateTime.setHours(parseInt(hours));
        newDateTime.setMinutes(parseInt(mins));
    }
    //othwerwise just use now
    else {
        newDateTime = new Date();
    }
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
