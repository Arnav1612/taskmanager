const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Add a new task
router.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

// Get all tasks
router.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Update a task
router.put("/tasks/:id", async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
});

// Delete a task
router.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task removed" });
});

module.exports = router;
