import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger.js';
import { AppError } from '../utils/errorHandler.js';
import { ERROR_MESSAGES } from '../utils/constants.js';

export const validateAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      throw new AppError(ERROR_MESSAGES.AUTH_REQUIRED, 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    logger.error('Authentication error:', error);
    next(new AppError(ERROR_MESSAGES.INVALID_TOKEN, 401));
  }
};