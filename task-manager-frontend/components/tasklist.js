import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/tasks").then((res) => setTasks(res.data));
    }, []);

    const addTask = () => {
        axios.post("http://localhost:5000/api/tasks", { title, description }).then((res) => {
            setTasks([...tasks, res.data]);
            setTitle("");
            setDescription("");
        });
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
