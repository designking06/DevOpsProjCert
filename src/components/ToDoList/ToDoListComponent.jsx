import React from 'react';

export default function ToDoListComponent({combinedDataList, completeTaskToggle, deleteTask}) {
    return (
        <>               
         <ul className="task-list">
            {combinedDataList.map((task) => (
                <li key={task.id} >
                    <span className="text">{task.completed ? <s>{task.title}</s> : task.title}</span>
                        {!task.completed ?
                        <button className="complete-button" onClick={() => completeTaskToggle(task.id)}>Complete</button>
                        :
                        <button className="reset-button" onClick={() => completeTaskToggle(task.id)}>Reset</button>}
                        <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete Task</button>
                </li>
            ))}
        </ul>
        
        </>
    )

}