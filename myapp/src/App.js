import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import MySpace from './Components/MySpace';
import Logs from './Components/Logs';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div style={{display:"flex"}}>
      <Sidebar/>
      <div style={{width:"100%"}}>
        <Navbar/>
        <br/>
      <MySpace/>

      <Logs/>
      </div>
      </div>
    </div>

  );
}

export default App;
