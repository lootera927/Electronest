let cart = [];

function addToCart(name,price){

cart.push({name,price});

alert(name + " added to cart");

}

function checkout(){

alert("Payment will connect to Razorpay");

}