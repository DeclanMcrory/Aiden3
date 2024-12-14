import { AGENT_TYPES, AGENT_STATUS, TASK_TYPES, TASK_STATUS } from './constants.js';

export const validateAgentData = (data) => {
  const errors = [];

  if (!data.name) {
    errors.push('Name is required');
  }

  if (!AGENT_TYPES[data.type]) {
    errors.push('Invalid agent type');
  }

  if (data.status && !AGENT_STATUS[data.status]) {
    errors.push('Invalid agent status');
  }

  if (data.capabilities && !Array.isArray(data.capabilities)) {
    errors.push('Capabilities must be an array');
  }

  return errors;
};

export const validateTaskData = (data) => {
  const errors = [];

  if (!data.title) {
    errors.push('Title is required');
  }

  if (!data.description) {
    errors.push('Description is required');
  }

  if (!TASK_TYPES[data.type]) {
    errors.push('Invalid task type');
  }

  if (data.status && !TASK_STATUS[data.status]) {
    errors.push('Invalid task status');
  }

  if (data.priority && (data.priority < 1 || data.priority > 5)) {
    errors.push('Priority must be between 1 and 5');
  }

  return errors;
};