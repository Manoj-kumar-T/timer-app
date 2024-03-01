import CountDown from "./CoutDown";

function App() {
  let onTimesup = () => {
    alert(`time's up!`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>--- A COUNTDOWN TIMER WITH REACT---</p>
        <div>
          <CountDown onTimesup={onTimesup} duration={6} />
        </div>
      </header>
    </div>
  );
}

export default App;
