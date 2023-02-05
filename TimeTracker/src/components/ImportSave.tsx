export default function DownloadSave({
    setTimers,
    setFinishedTimers,
}: {
  setTimers: Function;
  setFinishedTimers: Function;
}) {

    function importSave(e: React.ChangeEvent<HTMLInputElement>){
        if(!e.target.files?.length) return;

        const saveFile = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (evt) => {
            if(reader.result){
                let decodedStr;
                if(reader.result instanceof ArrayBuffer){
                    decodedStr = new TextDecoder().decode(reader.result);
                }else {
                    decodedStr = reader.result;
                }   
                const saveDataObj = JSON.parse(decodedStr)
                if(saveDataObj.activeTimers){
                    saveDataObj.activeTimers = saveDataObj.activeTimers.map((timer) => {return {...timer, startDate : new Date(timer.startDate)}});
                    console.log(saveDataObj.activeTimers)
                    setTimers(saveDataObj.activeTimers)
                }
                if(saveDataObj.finishedTimers){
                    saveDataObj.finishedTimers = saveDataObj.finishedTimers.map((timer) => {return {...timer, startDate : new Date(timer.startDate)}});
                    setFinishedTimers(saveDataObj.finishedTimers);
                }
            }
        })
        reader.readAsText(saveFile);
    }

  return (
    <div className="bg-transparent text-white border-solid border border-slate-100 rounded-lg w-56 text-left p-2">
        <input 
            type="file"
            id="fileImport" name="fileImport"
            className="hidden"
            onChange={(e) => importSave(e)}
            accept=".txt"/>
        <label htmlFor="fileImport">Import from save</label>
    </div>
  );
}
