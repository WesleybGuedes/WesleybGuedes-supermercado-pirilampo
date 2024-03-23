const stockProducts = require('./data.json');

const searchProductsByBrand = (searchBrand) => stockProducts
  .filter((product) => product.brand === searchBrand)
  .map((product) => ({
    description: product.description,
    formattedPrice: `R$ ${product.price}` }));
module.exports = { searchProductsByBrand };
