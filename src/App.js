import useTimer from "./useTimer";
import { formatTime } from "./formatTime";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimer,
    splitList,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={() => resetTimer()}>
            Reset
          </button>
          <button className="button" onClick={() => splitTimer()}>
            Split
          </button>
        </div>
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        {splitList.length > 0 && <hr />}
        <div className="split">
          {splitList.map((split) => {
            return <p>{formatTime(split)}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
