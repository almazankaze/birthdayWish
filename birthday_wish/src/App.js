import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./pages/Home";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BirthdayBoard from "./pages/BirthdayBoard";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/birthdayboard/:id">
                <BirthdayBoard />
              </Route>
            </Switch>
          </Router>
          {/* <MessageSender />
          <div className="app__body">
            <Posts />
          </div> */}
        </>
      )}
    </div>
  );
}

export default App;
