import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { AppDiv } from "./styles";
import SignUp from "./Auth/Signup";
import LogIn from "./Auth/Login";
import Home from "./Auth/Home";
function App() {
  return (
    <AppDiv id={"App"}>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/auth/login"}>
            <LogIn />
          </Route>
          <Route exact path={"/auth/signup"}>
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
