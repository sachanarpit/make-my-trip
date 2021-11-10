<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======

// import {Button} from '@mui/material';
import { Main } from "./components/HomePage/Main";
import { Route, Routes } from "react-router-dom";
import {Search} from './components/SearchPage/Search'
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main/>}/>
          <Route path="/search" exact element={<Search/>}/>
        </Routes>
      </div>

>>>>>>> master
  );
}

export default App;
