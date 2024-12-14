import { Agent } from '../models/Agent.js';
import { logger } from '../utils/logger.js';
import { AppError } from '../utils/errorHandler.js';
import { validateAgentData } from '../utils/validators.js';
import { ERROR_MESSAGES } from '../utils/constants.js';

class AgentService {
  async createAgent(agentData) {
    const errors = validateAgentData(agentData);
    if (errors.length > 0) {
      throw new AppError(errors.join(', '), 400);
    }

    try {
      const agent = new Agent(agentData);
      await agent.save();
      logger.info(`Agent created: ${agent.name}`);
      return agent;
    } catch (error) {
      logger.error('Error creating agent:', error);
      throw error;
    }
  }

  async getAgents(filter = {}) {
    try {
      return await Agent.find(filter);
    } catch (error) {
      logger.error('Error fetching agents:', error);
      throw error;
    }
  }

  async getAgentById(id) {
    try {
      const agent = await Agent.findById(id);
      if (!agent) {
        throw new AppError(ERROR_MESSAGES.AGENT_NOT_FOUND, 404);
      }
      return agent;
    } catch (error) {
      logger.error(`Error fetching agent ${id}:`, error);
      throw error;
    }
  }

  async updateAgentStatus(id, status) {
    try {
      const agent = await Agent.findByIdAndUpdate(
        id,
        { 
          status,
          lastActive: Date.now()
        },
        { new: true }
      );
      
      if (!agent) {
        throw new AppError(ERROR_MESSAGES.AGENT_NOT_FOUND, 404);
      }

      logger.info(`Agent ${id} status updated to ${status}`);
      return agent;
    } catch (error) {
      logger.error(`Error updating agent ${id}:`, error);
      throw error;
    }
  }
}

export const agentService = new AgentService();