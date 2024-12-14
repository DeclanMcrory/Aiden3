export const AGENT_TYPES = {
  DEVELOPER: 'DEVELOPER',
  SOUND_ENGINEER: 'SOUND_ENGINEER',
  CONTENT_CREATOR: 'CONTENT_CREATOR',
  MARKETING: 'MARKETING'
};

export const AGENT_STATUS = {
  IDLE: 'IDLE',
  BUSY: 'BUSY',
  OFFLINE: 'OFFLINE',
  ERROR: 'ERROR'
};

export const TASK_TYPES = {
  CODE_GENERATION: 'CODE_GENERATION',
  CODE_REVIEW: 'CODE_REVIEW',
  SOUND_PROCESSING: 'SOUND_PROCESSING',
  CONTENT_CREATION: 'CONTENT_CREATION'
};

export const TASK_STATUS = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export const ERROR_MESSAGES = {
  AGENT_NOT_FOUND: 'Agent not found',
  TASK_NOT_FOUND: 'Task not found',
  AGENT_UNAVAILABLE: 'Agent is not available',
  INVALID_TOKEN: 'Invalid authentication token',
  AUTH_REQUIRED: 'Authentication required',
  VALIDATION_ERROR: 'Validation Error',
  DUPLICATE_KEY: 'Duplicate Key Error',
  INTERNAL_ERROR: 'Internal Server Error'
};