import "./App.css";
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DetailUser from "./components/DetailUser";


function App() {
  return (
    <div className="App">

      {/* <AddUser />
      <ListUsers /> */}

      <Router>
        <AddUser />
        <Routes>
          <Route path="/" element={<ListUsers />} />
          <Route path='/detail/:_id' element={<DetailUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
