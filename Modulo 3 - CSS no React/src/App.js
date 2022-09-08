import {useState} from 'react'
import './App.css';
import MyComponent from './Components/MyComponent';
import Title from './Components/Title';

function App() {
  const [redTitle, setColor] = useState(true)
  return (
    <div className="App">
      <h1>CSS no React</h1>
      <p>Paragrafo do APP.JS</p>
      <MyComponent />
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
      <button onClick={() => setColor(true)}>Mudar para RED</button>
      <button onClick={() => setColor(false)}>Mudar para Blue</button>
      <Title />
    </div>
  );
}

export default App;
