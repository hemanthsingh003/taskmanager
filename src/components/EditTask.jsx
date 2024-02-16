import { useState } from "react";

const EditTask = ({ showEditModal, task, taskList, setTaskList }) => {
    const [taskName, setTaskName] = useState(task.taskName)
    const [taskDescription, setTaskDescription] = useState(task.taskDescription)
    const [errorMessage, setErrorMessage] = useState("")

    const handleInput = e => {
        const {name, value} = e.target;
        if (name === "name") setTaskName(value);
        if (name === "name" && value.trim().length < 1) setErrorMessage("Enter task name to continue!");
        else setErrorMessage("");
        if (name === "description") setTaskDescription(value);
    }

    const handleSave = e => {
        e.preventDefault();
        if (taskName.trim().length < 1)
            setErrorMessage("Enter task name to continue!");
        else {
            let taskIndex = taskList.indexOf(task);
            taskList.splice(taskIndex, 1);
            setTaskList(
                [{taskName, taskDescription},...taskList]
            );
    
            showEditModal(false);
            setErrorMessage("");
        }
    }

    const handleClose = () => {
        showEditModal(false);
        setErrorMessage("");
    }

    

    return (
        <>
        <div className="edit-task-modal-overlay bg-dark opacity-25 position-fixed top-0 z-99 h-100 w-100"></div>
        <div className="edit-task-modal-body position-fixed top-0 z-100 h-100 w-100 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column bg-light rounded shadow-lg">
                <div className="d-flex flex-row justify-content-between p-3">
                    <h3 className="my-auto">Edit Task</h3>
                    <button 
                        className="btn btn-danger shadow-sm"
                        onClick={ handleClose }
                    >
                        X
                    </button>
                </div>
                <hr className="border border-dark-subtle mb-0" />
                <form onSubmit={ e => { e.preventDefault(); } }>
                    <div className="d-flex flex-column gap-3 p-3">
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="name" 
                                id=""
                                className="form-control bg-dark-subtle" 
                                value={ taskName } 
                                onChange={ handleInput }
                                placeholder="Task Name" 
                                required 
                            />
                        </div>
                        {errorMessage ? <div className="text-danger ps-1">{ errorMessage }</div> : null}
                        <div className="input-group">
                            <textarea 
                                name="description" 
                                id="" 
                                cols="30" 
                                rows="10" 
                                className="form-control bg-dark-subtle" 
                                value={ taskDescription } 
                                onChange={ handleInput }
                                placeholder="Task Description" 
                                required >
                            </textarea>
                        </div>
                    </div>
                </form>
                <hr className="border border-dark-subtle mb-0" />
                <div className="d-flex flex-row justify-content-end gap-2 pe-2 my-2">
                    <button 
                        className="btn btn-success"
                        onClick={ handleSave }
                    >
                        Save
                    </button>
                    <button 
                        className="btn btn-secondary"
                        onClick={ handleClose }
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditTask