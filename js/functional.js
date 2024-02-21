function showProducts() {
    for (let i = 0; i < products.length; i++) {
        console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
    }
}

function promptOrderProducts(maxValue, message) {
    let value;
    do {
        value = parseInt(prompt(message));
    } while (value < 1 || value > maxValue || isNaN(value));
    return value;
}

function calculatePrice() {
    return productToBuy.price * productAmount;
}

function calculateDiscount() {
    return price - price * discount;
}

function showFinalPrice(price, isValidDiscount) {
    if (isValidDiscount) {
        console.log(`Congrats! You get discount. Your final price is ${finalPrice}`)
    } else {
        console.log(`The final price is ${price}`);
    }
}