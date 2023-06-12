const stockProducts = require('./data.json');

const searchProductByName = (searchProduct) => {
    for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
    let formattedPrice = elemento.price;
      if (searchProduct === elemento.productName) {
      return (`${elemento.description} R$ ${formattedPrice}`);
      
    }
        else if (searchProduct != elemento.productName) {
          return null;
    }
  }
};
console.log(searchProductByName('Cenoura'));

module.exports = { searchProductByName };