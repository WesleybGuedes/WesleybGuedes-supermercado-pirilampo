const stockProducts = require('./data.json');

const searchProductsByBrand = (searchBrand) => {
   for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
      if (searchBrand === elemento.brand) {
      return [{
        description: elemento.description,
        formattedPrice: `R$ ${elemento.price}`
      }];      
    };
  };
    return [];
};
/* console.log(searchProductsByBrand("Hortifruti")); */
module.exports = { searchProductsByBrand };
