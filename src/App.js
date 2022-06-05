import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* tailwindCSS initialize test */}
      <div class="flex flex-row bg-slate-700 h-screen text-zinc-50 items-center">
        <div class="basis-1/4 md:basis-1/3">01</div>
        <div class="basis-1/4 md:basis-1/3">02</div>
        <div class="basis-1/2 md:basis-1/3">03</div>
      </div>
    </div>
  );
}

export default App;
