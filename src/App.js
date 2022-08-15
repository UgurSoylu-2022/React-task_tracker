import './App.css';
import Home from './components/home/Home';
import {useState} from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  

  return (
    <div className="App">
      <Home taskList = {taskList} setTaskList = {setTaskList} />      
    </div>
  );
}

export default App;
