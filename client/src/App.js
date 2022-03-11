import './App.css';
import AddUser from './components/AddUser';
import ListUsers from './components/ListUsers';

function App() {
  return (
    <div className="App">
      <ListUsers />
      <AddUser />
    </div>
  );
}

export default App;
