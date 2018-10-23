const express = require('express');

const getAllUser = require('./users/getUsers');
const getUserById = require('./users/getUserById');
const createUser = require('./users/createUser');
const updateUser = require('./users/updateUser');

const getAllProducts = require('./products/getProducts');
const getProductById = require('./products/getProductById');
const createProduct = require('./products/createProduct');
const updateProduct = require('./products/updateProduct');

const getAllCategories = require('./categories/getCategories');
const getCategoryById = require('./categories/getCategoryById');
const createCategory = require('./categories/createCategory');
const updateCategory = require('./categories/updateCategory');

const loadImage = require('./images/saveImage');

const apiRoutes = express.Router();



apiRoutes
  .get('/users', getAllUser)
  .get('/users/:id', getUserById)
  .post('/users/create', createUser)
  .put('/users/:id', updateUser)

  .get('/products', getAllProducts)
  .get('/products/:id', getProductById)
  .post('/products/create', createProduct)
  .put('/products/:id', updateProduct)

  .get('/categories', getAllCategories)
  .get('/categories/:id', getCategoryById)
  .post('/categories/create', createCategory)
  .put('/categories/:id', updateCategory)

  .post('./images', loadImage)


module.exports = apiRoutes;