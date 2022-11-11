import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Dictionary defaultKeyword="sunset" />
      <footer>
        Coded by Iryna Doroshenko{" "}
        <a href="https://github.com/IraDor/Dictionary">Source Code on Github</a>
      </footer>
    </div>
  );
}

export default App;
