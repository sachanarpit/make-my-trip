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
  );
}

export default App;
