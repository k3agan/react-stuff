import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

const App = () => {

  const [tasks, ] = useState([
    { something: "some result",
    id: 1
    },
    { something: "some other result",
    id: 2
    }

])

// Delete Task
const deleteTask = (id) => {
  console.log('delete ', id)
}

//Toggle Reminder
const toggleReminder = (id)=> {
  console.log(id);
}

  return (
    <div className="container">
      <Header ></Header>
      <Tasks 
      tasks = {tasks} 
      onDelete = {deleteTask}
      onToggle = {toggleReminder}
      ></Tasks>
    </div>
  );
}

export default App;