import logo from './logo.svg';
import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      {data.map((l) => <p>{l.English}</p>)}
    </div>
  );
}

export default App;
