import { logger } from '../utils/logger.js';
import { ERROR_MESSAGES } from '../utils/constants.js';

export const errorHandler = (err, req, res, next) => {
  logger.error('Error:', err);

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      status: 'error',
      message: ERROR_MESSAGES.VALIDATION_ERROR,
      details: err.message
    });
  }

  // Mongoose duplicate key error
  if (err.name === 'MongoServerError' && err.code === 11000) {
    return res.status(409).json({
      status: 'error',
      message: ERROR_MESSAGES.DUPLICATE_KEY,
      details: err.message
    });
  }

  // JWT authentication error
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      status: 'error',
      message: ERROR_MESSAGES.INVALID_TOKEN
    });
  }

  // Operational errors (known application errors)
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }

  // Programming or unknown errors
  return res.status(500).json({
    status: 'error',
    message: ERROR_MESSAGES.INTERNAL_ERROR
  });
};