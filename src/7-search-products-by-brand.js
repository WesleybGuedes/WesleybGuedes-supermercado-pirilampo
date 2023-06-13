const stockProducts = require('./data.json');

const searchProductsByBrand = (searchBrand) => {
  let arrayObjects = []; 
  for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
      if (searchBrand === elemento.brand) {
      let objectsBrand = {
        description : elemento.description,
        formattedPrice : `R$ ${elemento.price}`
      };
      arrayObjects.push(objectsBrand);      
    };
  };
   return(arrayObjects);
};
/* console.log(searchProductsByBrand("Hortifruti")); */
module.exports = { searchProductsByBrand };
