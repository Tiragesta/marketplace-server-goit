const mainRoute = require('./main/main');
const getProducts = require('./products/getProducts');

const getProductById = require('./products/getProductById');
const createProduct = require('./products/productCreate');
const getUser = require('./users/getUser');
const createUser = require('./users/createUser');

const router = {
  '/products': getProducts,
  '/product': getProductById,
  '/product/create': createProduct,
  '/user': getUser,
  '/user/create': createUser,
  
  default: mainRoute
};

module.exports = router;