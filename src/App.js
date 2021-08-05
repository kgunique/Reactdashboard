import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sidebar_container">
        <Sidebar />
        <div className="other_div"><h2>other text</h2></div>
      </div>
    </div>
  );
}

export default App;
