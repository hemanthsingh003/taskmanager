import { useState } from "react";

const AddTask = ({ taskList, setTaskList }) => {
    const [addModal, setAddModal] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const handleAdd = e => {
        e.preventDefault();
        if (taskName.trim().length < 1) 
            setErrorMessage("Enter task name to continue!");
        else {
            setTaskList(
                [{taskName, taskDescription},...taskList]
            );
            setAddModal(false);
            setErrorMessage("");
            setTaskName("");
            setTaskDescription("");
        }
    }

    const handleInput = e => {
        const {name, value} = e.target;
        if (name === "taskName") setTaskName(value);
        if (name === "taskName" && value.trim().length < 1) setErrorMessage("Enter task name to continue!");
        else setErrorMessage("")
        if (name === "taskDescription") setTaskDescription(value);
    }

    return (
        <>
        <button 
            className="btn btn-warning mx-1"
            onClick={ () => { setAddModal(true) } }
        >
            +New
        </button>
        { addModal ? (
            <>
                <div className="modal-overlay position-fixed top-0 w-100 h-100 z-99 opacity-25 bg-dark"></div>
                <div className="modal-div position-fixed top-0 w-100 h-100 z-100 d-flex justify-content-center align-items-center">
                    <div className="modal-content d-flex bg-light text-dark rounded shadow">
                        <div className="modal-head d-flex flex-row justify-content-between p-3 pb-1">
                            <h3 className="me-3 my-auto">Add New Task</h3>
                            <button 
                                className="btn btn-danger shadow-sm"
                                onClick={ () => { setAddModal(false); setErrorMessage(""); } }
                            >
                                X
                            </button>
                        </div>
                        <hr className="border border-1 border-dark" />
                        <form onSubmit={ e => { e.preventDefault(); } }>
                            <div className="p-3 pt-2">
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        name="taskName" 
                                        id="" 
                                        className="form-control bg-secondary-subtle" 
                                        placeholder="Task Name" 
                                        required 
                                        value={ taskName }
                                        onChange={ handleInput }
                                    />
                                </div>
                                { errorMessage ? <div className="p-1 pb-0 text-danger">{ errorMessage }</div> : null }
                                
                            </div>
                            <div className="p-3 pt-2">
                                <div className="input-group">
                                    <textarea 
                                        name="taskDescription" 
                                        id="" 
                                        cols="30" 
                                        rows="8" 
                                        className="form-control bg-secondary-subtle" 
                                        placeholder="Task Description"
                                        value={ taskDescription }
                                        onChange={ handleInput }
                                    >
                                    </textarea>
                                </div>
                            </div>
                        </form>
                        <hr className="border border-1 border-dark" />
                        <div className="p-3 pt-0 d-flex justify-content-end">
                            <button
                                className="btn btn-primary me-1 shadow-sm"
                                onClick={ handleAdd }
                            >
                                Add Task
                            </button>
                            <button
                                className="btn btn-secondary ms-1 shadow-sm"
                                onClick={ () => { setAddModal(false); setErrorMessage(""); } }
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </>
        ) : null}
        </>
    )
}

export default AddTask;