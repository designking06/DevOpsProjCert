{/* 
    In this file I created a To Do List container which holds the stateful logic for the list.
    We import the component which renders the form and the component which renders the combined data list in order to maintain organization.
*/}

'use client';
import './ToDoList.css';
import { useEffect, useState } from "react";
import { taskData } from "./taskData";
import { getData } from './getData';
import ToDoListForm from './ToDoListForm';
import ToDoListComponent from './ToDoListComponent';

export default function ToDoListContainer() {
    const [isLoading, setLoading] = useState(true);
    
    const [tasksList, setTask] = useState(taskData);
    const [combinedDataList, setDataList] = useState([]);
    const [error, setError] = useState(null);
    
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function addTask() {
        if (inputValue.trim() !== "") {
            const newTask = {
                id: crypto.randomUUID(),
                title: inputValue,
                completed: false,
            }
            setDataList(prevData => [...prevData, newTask]);
            setInputValue("");
        }
    }

    function completeTaskToggle(id) {
        // Complete task by adding a line through the text
        const updatedTaskList = combinedDataList.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task
        );
        setDataList(updatedTaskList);
    }

    function deleteTask(id) {
        const newTasks = combinedDataList.filter(task => task.id !== id);
        setDataList(newTasks);
    }


    // fetch data
    useEffect(() => {
        (async function fetchTodos () {
        try {
            // Grab API Items
            const data = await getData();
            const list = Array.isArray(data) ? data : [data];

            setTimeout(() => {
                const newApiItems = list.map(apiItem => ({
                    title: apiItem.title,
                    id: apiItem.id,
                    completed: false, // Set a default value for the new property
                }));
                setDataList(newApiItems);

                // Grab Items stored locally
                const newLocalItems = tasksList.map(apiItem => ({
                    title: apiItem.name,
                    id: apiItem.id,
                    completed: false, // Set a default value for the new property
                }));

                // Merge API and local items
                setDataList(prevData => [...prevData, ...newLocalItems]);
                setLoading(false);
            }, 1500);
        } catch (err) {
            setError(err);
        }
        })();

    }, []);

    return (
        <div className="task-app">
            <h1>To-Do List</h1>
            <ToDoListForm 
                inputValue={inputValue}
                inputChangeHandler={handleInputChange}
                onAddTask={addTask} />
            
            { isLoading ? <div>Loading To Do List...</div> : error ? ( <h2 style={{ color: 'red' }}>Error: {error.message}</h2> ) : 
                <>

                <ToDoListComponent
                combinedDataList={combinedDataList}
                completeTaskToggle={completeTaskToggle}
                deleteTask={deleteTask} />
                </>
            }
        </div>
        );

};

