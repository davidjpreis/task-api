import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const comp = req.query.completed;
  const completed = comp === undefined ? undefined : comp === 'true';
  const tasks = await taskService.getAllTasks({
    completed: completed,
  });
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
