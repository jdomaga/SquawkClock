import "./App.css";
import Accordion from "./components/Accordion";
import Hero from "./components/Hero";

function App() {

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
      <Accordion></Accordion>
    </div>
  );
}

export default App;
