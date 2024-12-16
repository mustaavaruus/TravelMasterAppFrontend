import * as React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Main from "./main/Main";
import Auth from "./auth/Auth";
import User from "./user/User";
import Register from "./register/Register";
import Welcome from "./welcome/Welcome";
import Generating from "./generating/Generating";
import Success from "./success/Success";
import Question from "./question/Question";
import ToursList from "./tours-list/ToursList";
import HotelsList from "./hotels-list/HotelsList";
import Hotel from "./hotel/Hotel";
import DateChoosing from "./date-choosing/DateChoosing";
import TicketList from "./ticket-list/TicketList";
import TripList from "./trip-list/TripList";
import FillPassenger from "./fill-passenger/FillPassenger";
import CheckPassenger from "./check-passenger/CheckPassenger";
import BankList from "./bank-list/BankList";
import Payment from "./payment/Payment";


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
                <Route exact path="/question" element={<Question />}/>
                <Route exact path="/tours-list" element={<ToursList />}/>
                <Route exact path="/hotels-list" element={<HotelsList />}/>
                <Route exact path="/hotel" element={<Hotel />}/>
                <Route exact path="/date-choosing" element={<DateChoosing />}/>
                <Route exact path="/ticket-list" element={<TicketList />}/>
                <Route exact path="/trip-list" element={<TripList />}/>
                <Route exact path="/fill-passenger" element={<FillPassenger />}/>
                <Route exact path="/check-passenger" element={<CheckPassenger />}/>
                <Route exact path="/bank-list" element={<BankList />}/>
                <Route exact path="/payment" element={<Payment/>}/>
                <Route exact path="/user" element={<User />}/>
                <Route exact path="/" element={<Main />} />
              </Routes>
            </BrowserRouter>
        </div>
        </div>
    </div>
  );
}

export default App;
