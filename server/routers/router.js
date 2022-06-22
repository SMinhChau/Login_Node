const express= require('express');
const route= express.Router();

const services= require('../services/render');
// Controller
const controller = require('../controller/controller');

/**
 * @description Root Router
 * @method get/
 */
route.get('/',services.homeRouter);

/**
 * @description Root Router
 * @method get/ add-user
 */
route.get('/add-user', services.add_user);

/**
 * @description Root Router
 * @method get/ update-user
 */
route.get('/update-user', services.update_user);

// API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.get('/api/users/:id',controller.findOne);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route;
