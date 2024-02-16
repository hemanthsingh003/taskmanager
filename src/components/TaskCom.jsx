import { useState } from "react";
import EditTask from "./EditTask";

const TaskCom = ({ task, taskList, setTaskList }) => {
    const [editModal, showEditModal] = useState(false);

    const handleDelete = e => {
        e.preventDefault();
        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1);
        setTaskList( 
            currentTaskList => currentTaskList.filter(
                taskList => taskList.id !== taskIndex
            )
        )
    }

    // const handleEdit = e => {
    //     e.preventDefault();
    //     showModal(true);
    // }

    return (
        <>
        <div className="col-12 col-md-3 mb-4 mt-md-0 d-flex">
            <div className="d-flex flex-column w-100 border rounded shadow-sm">
                <h4 className="p-3 pb-0">{ task.taskName }</h4>
                <hr />
                <p className="px-3 overflow-y-auto" style={{ height: '150px' }}>{ task.taskDescription }</p>
                <hr className="mt-0"/>
                <div className="d-flex justify-content-end gap-2 pe-2 pb-2">
                    <button 
                        className="btn btn-warning"
                        onClick={ () => { showEditModal(true) } }
                    >
                        Edit
                    </button>
                    <button 
                        className="btn btn-danger"
                        onClick={ handleDelete }
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
        { editModal ? <EditTask showEditModal={ showEditModal } task={ task } taskList={ taskList } setTaskList={ setTaskList } /> : null }
        </>
    )
}

export default TaskCom