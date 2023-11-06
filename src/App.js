import { Route,Routes } from "react-router-dom";
import Home from "./routes/Home"
import React from "react";
import BoardDetail from "./routes/BoardDetail";
import BoardWrite from "./routes/BoardWrite";
import BoardList from "./routes/BoardList";
import BoardUpdate from "./routes/BoardUpdate";
import Food from "./routes/Food";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/board" element={<BoardList/>}/>
      <Route path="/board/:id" element={<BoardDetail/>}/>
      <Route path="/write" element={<BoardWrite/>}/>
      <Route path="/update/:id" element={<BoardUpdate />} />
      <Route path="/Food" element={<Food/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
}

export default App;