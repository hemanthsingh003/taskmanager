import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskCom from "./components/TaskCom";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [showTask, setShowTask] = useState(false);

  useEffect(
    () => {
      setShowTask(taskList.length > 0)
    }, [taskList]
  )

  return (
    <>
    <div className="container pt-3">
      <h1 className="text-center">Task Manager</h1>
      <p>Hi there</p>
      <div className="d-flex">
        <p className="my-auto">Click</p>
        <AddTask 
          taskList={ taskList }
          setTaskList={ setTaskList }
        /> 
        <p className="my-auto"> to add a new task</p>
      </div>
      <div className="row mt-md-3">
        {
          showTask ? (
            <div className="d-flex flex-row justify-content-between mt-4 mb-2">
              <h1 >Tasks:</h1>
              <div className="d-flex align-items-center">
                <button className="btn btn-danger" onClick={ () => setTaskList([]) }>Clear All</button>
              </div>
            </div>
          ) : null
        }
        {
          taskList.map((task, index) => {
            return (
              <TaskCom key={index} task={ task } taskList={ taskList } setTaskList={ setTaskList } />
            )
          })
        }
      </div>
    </div>
    </>
  );
}

export default App;
