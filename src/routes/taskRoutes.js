import express from 'express';
import * as taskController from '../controllers/taskController.js';
import {
  validateTask,
  validateTaskParams,
} from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', validateTaskParams, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
