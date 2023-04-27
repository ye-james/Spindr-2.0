import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './mainPage';
import ExplorePage from './explore';
import Login from './login';



function App() {
  // A state that represents if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);
  // Function that changes login status
  const handleLoginClick = (e) => {
    e.preventDefault();
    setLoggedIn(!loggedIn);
  };
  // If user is logged in, return mainpage component
  return (
    <div>

      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/home' element={<ExplorePage/>}/>
        <Route path='/songs' element={<MainPage/>}/>
      </Routes>

    </div>


  )  
  // if (loggedIn) {
  //    return <MainPage />
  //   }
  // return <Login handleLoginClick={handleLoginClick}/>
}

export default App;
