import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Show from "./components/Show";
import Users from "./components/Users";

const App = () => {
  return (
    <div>
      <Routes>
          <Route exact path='/' element={<Users/>}/>
          <Route exact path='/user/create' element={<Add/>}/>
          <Route exact path='/user/info/:id' element={<Show/>}/>
          <Route exact path='/user/Edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
};

export default App;
