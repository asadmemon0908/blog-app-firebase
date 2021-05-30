import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <PrivateRoute path="/blogs" component={Blogs} />
          <PrivateRoute path="/blogDetails" component={BlogDetails} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
