const Goal = require('../models/goalModel')
const goalController = {};

goalController.getGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findOne();
    if (goal) {
      return res.status(200).json(goal);
    } else {
      return res.status(200).json({ goal: 0 });
    }
  } catch (err) {
    next({
      log: 'Error in getGoal',
      message: { err: 'An error occurred' }
    });
  }
}

// adds a transaction to database
goalController.setGoal = async (req, res, next) => {
  try {
    const { goal } = req.body;

    // Check if there's an existing goal
    let existingGoal = await Goal.findOne();

    // If there's an existing goal, update it. Otherwise, create a new one.
    if (existingGoal) {
      existingGoal.goal = goal;
      await existingGoal.save();
      return res.status(200).json(existingGoal);
    } else {
      const newGoal = await Goal.create({ goal: goal });
      return res.status(200).json(newGoal);
    }

  } catch (err) {
    next({
      log: 'Error in setGoal',
      message: { err: 'An error occurred' }
    });
  }
}

module.exports = goalController;