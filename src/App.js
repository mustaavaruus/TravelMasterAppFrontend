import * as React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Main from "./main/Main";
import Auth from "./auth/Auth";
import User from "./users/User";
import Register from "./register/Register";
import Welcome from "./welcome/Welcome";
import Generating from "./generating/Generating";
import Success from "./success/Success";
import Question from "./question/Question";
import ToursList from "./tours-list/ToursList";


function App() {
  return (
    <div className="App">
        <div className={"wrapper"}>
          <div className={"workArea"}>
            <BrowserRouter>
              <Routes>
                <Route exact path="/auth" element={<Auth />}/>
                <Route exact path="/register" element={<Register />}/>
                <Route exact path="/welcome" element={<Welcome />}/>
                <Route exact path="/generating" element={<Generating />} />
                <Route exact path="/success" element={<Success />} />
                <Route exact path="/users" element={<User />}/>
                <Route exact path="/question" element={<Question />}/>
                <Route exact path="/tours-list" element={<ToursList />}/>
                <Route exact path="/" element={<Main />} />
              </Routes>
            </BrowserRouter>
        </div>
        </div>
    </div>
  );
}

export default App;
