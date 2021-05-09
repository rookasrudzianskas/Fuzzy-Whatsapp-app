import './App.css';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
          {/* then the router starts, we start looking for the url things from here*/}
          <Router>
            <Switch>
                {/* in the app will be shown all the data*/}
                <Route path="/app">

                    <Sidebar />
                    {/*    Sidebar  */}

                    <Chat />
                    {/*    Chat */}

                </Route>

                {/* the router home path, and in here the login is going to happen*/}
                <Route path="/">
                    <h1>Hello Screen</h1>
                </Route>

            </Switch>


          </Router>

      </div>
    </div>
  );
}

export default App;
