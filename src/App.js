import './App.css';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
          <Sidebar />

      {/*    Sidebar  */}
          <Chat />
      {/*    Chat */}
      </div>
    </div>
  );
}

export default App;
