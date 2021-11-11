import { useState } from "react";
import './App.css';
import { Login } from "./components/login/Login";


function App() {

      // for popup 
      const handleClick = () => {
        const popup = document.getElementById("popup");
        popup.classList.toggle("active");
      };

  return (
    <div className="App" >
     <Login handleClick={handleClick}/>
    </div>
  );
}

export default App;
