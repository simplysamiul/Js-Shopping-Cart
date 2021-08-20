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