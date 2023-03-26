import React from "react";
import "./App.css";
import Register from "./page/register";
import Login from "./page/login";
import Event from "./page/event";
import Test from "./page/test";
import Chatting from "./page/chat";
import About from "./page/about";
import Profil from "./page/profil";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import { PageEnum } from "./enum/pageEnum";
import Security from "./Security";

function App() {
  return (
    <Routes>
      <Route
        path={PageEnum.HOME}
        element={
          <Security>
            <Home />
          </Security>
        }
      />
      <Route
        path={PageEnum.LOGIN}
        element={
          <Security>
            <Login />
          </Security>
        }
      />
      <Route
        path={PageEnum.REGISTER}
        element={
          <Security>
            <Register />
          </Security>
        }
      />
      <Route
        path={PageEnum.EVENT}
        element={
          <Security>
            <Event />
          </Security>
        }
      />
      <Route
        path="/test"
        element={
          <Security>
            <Test />
          </Security>
        }
      />
      <Route
        path={PageEnum.MESSAGE}
        element={
          <Security>
            <Chatting />
          </Security>
        }
      />
      <Route
        path={PageEnum.ABOUT}
        element={
          <Security>
            <About />
          </Security>
        }
      />
      <Route
        path={PageEnum.PROFIL}
        element={
          <Security>
            <Profil />
          </Security>
        }
      />
    </Routes>
  );
}

export default App;
