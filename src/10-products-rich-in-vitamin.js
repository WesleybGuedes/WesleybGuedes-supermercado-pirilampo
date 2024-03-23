const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => stockProducts
  .filter((product) => product.nutritionalInfo.vitamins)
  .map((product) => ({
    description: product.description,
    formattedPrice: `R$ ${product.price}`,
    vitaminsInformation: Object.entries(product.nutritionalInfo.vitamins)
      .map(([vitamin, amount]) => `${vitamin}: ${amount}`),
  }));

module.exports = { getProductsRichInVitamin };
