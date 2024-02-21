let discount = 0.2;
let discountStartsFrom = 10000;

showProducts();

let productNumber = promptOrderProducts(products.length, 'Enter product number');

let productToBuy = products[productNumber - 1];
let productAmount = promptOrderProducts(productToBuy.availability, 'Enter amount of products you wanna buy');

let price = calculatePrice();

let isValidDiscount = price >= discountStartsFrom;
let finalPrice = isValidDiscount ? calculateDiscount(price) : price;

showFinalPrice(finalPrice, isValidDiscount);