function productQuantity(inIncreasing,product,price){
    const productQuantityNum = document.getElementById(product + '-number');
    let productQuantity = productQuantityNum.value;
    if(inIncreasing === true){
        productQuantity = parseInt(productQuantity) + 1;
    }
    else if(inIncreasing === false && productQuantity > 0){
        productQuantity = parseInt(productQuantity) - 1; 
    }
    productQuantityNum.value = productQuantity;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productQuantity * price;
    // Price calculate function
    calculatePrice();

}
// Calculate total price for product
function getInputValue(product){
    const quantityInput = document.getElementById(product + '-number');
    const quantityNum = parseInt(quantityInput.value);
    return quantityNum;
}
function calculatePrice(){
    const phoneTotalPrice = getInputValue("phone") * 1219;
    const caseTotalPrice = getInputValue("case") * 59;
    const subTotal = caseTotalPrice + phoneTotalPrice;
    const totalTax = subTotal/100 * 5; 
    const totalProducrPrice = subTotal + totalTax; 
    const productSubTotal = document.getElementById("sub-total");
    productSubTotal.innerText = subTotal;
    const productTotalTax = document.getElementById("total-tax");
    productTotalTax.innerText = totalTax.toFixed(2);
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = totalProducrPrice.toFixed(2);
}
// Phone area
document.getElementById('phone-plus').addEventListener('click', function(){
    productQuantity(true,'phone',1219);
    
});
document.getElementById('phone-minus').addEventListener('click', function(){
    productQuantity(false,'phone',1219);
});
// Casr area
document.getElementById('case-plus').addEventListener('click', function(){
    productQuantity(true,'case',59);
});
document.getElementById('case-minus').addEventListener('click', function(){
    productQuantity(false,'case',59);
});