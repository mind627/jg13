import { Route,Routes } from "react-router-dom";
import Home from "./routes/Home"
import React from "react";
import BoardDetail from "./routes/BoardDetail";
import BoardWrite from "./routes/BoardWrite";
import BoardList from "./routes/BoardList";
import BoardUpdate from "./routes/BoardUpdate";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<BoardList/>}/>
      <Route path="/posts/:id" element={<BoardDetail/>}/>
      <Route path="/write" element={<BoardWrite/>}/>
      <Route path="/update/:id" element={<BoardUpdate />} />
    </Routes>
  );
}

export default App;