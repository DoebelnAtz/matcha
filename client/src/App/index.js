import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  Redirect,
} from "react-router-dom";
import { AppDiv } from "./styles";
import SignUp from "./Auth/Signup";
import LogIn from "./Auth/Login";
import Home from "./Home";
import { useGet } from "../Hooks";
import Verify from "./Auth/Verify";
function App() {
  const [user, setUser] = useGet("/users/me");
  console.log(user);
  return (
    <AppDiv id={"App"}>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            {user && user.verified ? (
              <Home />
            ) : (
              <Redirect to={`/auth/verify/${user?.u_id}`} />
            )}
          </Route>
          <Route exact path={"/auth/login"}>
            <LogIn />
          </Route>
          <Route exact path={"/auth/signup"}>
            <SignUp />
          </Route>
          <Route exact path={"/auth/verify/:uid"}>
            <Verify />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
