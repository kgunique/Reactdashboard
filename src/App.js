import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Home from './components/pages/home/Home'


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sidebar_container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
