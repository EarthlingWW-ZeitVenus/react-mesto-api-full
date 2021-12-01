// ToDo: на logger.js сделать исключение в Git
const winston = require('winston');
const expressWinston = require('express-winston');

console.log('Runcode in logger');
const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: '../logs/request.log' }),
  ],
  format: winston.format.json(),
});

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: '../logs/error.log' }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
