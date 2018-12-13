// Initializes the `courses` service on path `/courses`
const createService = require('feathers-knex');
const createModel = require('../../models/calendar.model');
const hooks = require('./calendar.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'calendar',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/calendar', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('calendar');

  service.hooks(hooks);
};
  