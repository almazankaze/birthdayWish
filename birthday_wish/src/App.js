import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import MessageSender from "./components/MessageSender";
import Post from "./components/Post";
import Posts from "./components/Posts";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <MessageSender />
          <div className="app__body">
            <Posts />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
