const calendar = require('./calendar/calendar.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(calendar);
};
