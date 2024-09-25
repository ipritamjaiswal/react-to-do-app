import logo from './logo.svg';
import './App.css';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskContext"; 

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
