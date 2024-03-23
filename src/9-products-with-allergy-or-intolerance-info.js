const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => stockProducts
  .filter((product) => product.allergyOrIntolerance)
  .map((product) => ({
    description: product.description,
    formattedPrice: `R$ ${product.price}`,
    allergyOrIntoleranceMessage: `Pode conter: ${product.allergyOrIntolerance.join(' ')}`,
  }));

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
