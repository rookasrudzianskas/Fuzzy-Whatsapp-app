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

              <Sidebar />
              {/*    Sidebar  */}

            <Switch>

                {/* in the app will be shown all the data*/}
                {/*: is the wildcard, it does not matter what is entered here*/}
                {/* it could be anything*/}
                <Route path="/rooms/:roomId">

                    <Chat />
                    {/*    Chat */}

                </Route>

                {/* the router home path, and in here the login is going to happen*/}
                <Route path="/">

                    <Chat />
                    {/*    Chat */}

                </Route>

            </Switch>


          </Router>

      </div>
    </div>
  );
}

export default App;
