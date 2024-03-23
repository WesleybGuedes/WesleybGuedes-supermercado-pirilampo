const stockProducts = require('./data.json');

const searchProductByName = (searchProduct) => {
  const foundProduct = stockProducts.find((product) => product.productName === searchProduct);
  return foundProduct ? {
    description: foundProduct.description,
    formattedPrice: `R$ ${foundProduct.price.toFixed(2)}`,
  } : null;
};

module.exports = { searchProductByName };
