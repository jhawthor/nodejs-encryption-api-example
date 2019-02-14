const mongoose = require('mongoose');
const logger = require('../lib/logger');
const config = require('../config/config.json');

/**
 * MongoDB connection
 */
function connect() {
  mongoose.connect(`mongodb://0.0.0.0:27017/${config.app.name}`, {
    useNewUrlParser: true,
  })
    .then(() => logger.info('MongoDB connected'))
    .catch(err => logger.error(err));
}

module.exports = { connect };
