const stockProducts = require('./data.json');

const searchProductsByBrand = (searchBrand) => {
   for ( index = 0; index < stockProducts.length; index += 1 ) {
    let arrayObjects = [];
    const elemento = stockProducts[index];
      if (searchBrand === elemento.brand) {
      arrayObjects.push(
        arrayObjects.description = elemento.description,
        arrayObjects.formattedPrice = `R$ ${elemento.price}`
      );      
    };
  };
   return arrayObjects;
};
/* console.log(searchProductsByBrand("Hortifruti")); */
module.exports = { searchProductsByBrand };
