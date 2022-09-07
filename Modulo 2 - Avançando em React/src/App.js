import './App.css';
import Pokemon from "./assets/img2.jpg"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avaçando em React</h1>
      <div>
        {/* <img src="/img1.jpg" alt="" /> */}
      </div>
      <div>
        {/* <img src={Pokemon} alt="" /> */}
      </div>
      {/* <ManageData /> */}
      <ListRender/>
    </div>
  );
}

export default App;
