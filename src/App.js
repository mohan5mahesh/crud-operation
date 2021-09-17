import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
//nav bar function react router
function App() {
  return (
    <div>
      <AppBar position="static">
        <Link to="/">Home</Link>
        <Link to="/users">List Users</Link>
        <Link to="/create-user">Create User</Link>
        <Link to="/edit-user/:id">Edit User</Link>
        <Link to="/profile/:id">profile</Link>
        <Link to="/edit-profile/:id">edit profile</Link>
      </AppBar>

      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/create-user">
          <Createuser />
        </Route>
        <Route path="/edit-user/:id">
          <Edituser />
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/edit-profile/:id">
          <Editprofile />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

//page not found function
function NotFound() {
  return (
    <div>
      <h1>May be youare looking for some other page?</h1>
    </div>
  );
}

//to home
function Home() {
  return (
    <div>
      <h1>Welcome to Ourkart!!!</h1>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h1>List of users Route</h1>
    </div>
  );
}
function Createuser() {
  return (
    <div>
      <h1>Create User Route</h1>
    </div>
  );
}
function Edituser() {
  return (
    <div>
      <h1>Edit user route</h1>
    </div>
  );
}
function Profile() {
  return (
    <div>
      <h1>Profile route</h1>
    </div>
  );
}
function Editprofile() {
  return (
    <div>
      <h1>Edit profile route</h1>
    </div>
  );
}
export default App;
