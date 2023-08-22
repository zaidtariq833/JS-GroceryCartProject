// let peach = document.getElementById("peach");
// let orange = document.getElementById("orange");
// let apple = document.getElementById("apple");
// let totalPrice = document.getElementById("totalPrice");
// let displaCartProducts = document.getElementById("displayCartProducts");
// let applePrice = document.getElementById("applePrice");
// let appleCalPrice = document.getElementById("productPriceCart");
// let appleCount = document.getElementById("productsCount");
// let peachPrice = document.getElementById("peachPrice");
// let peachCalPrice = document.getElementById("productPriceCart");
// let peachCount = document.getElementById("productsCount");
// let orangePrice = document.getElementById("orangePrice");
// let orangesCalPrice = document.getElementById("productPriceCart");
// let orangesCount = document.getElementById("productsCount");
// let total = 0

// function clearCart() {
//   displaCartProducts.style.display = "none";
//   total = 0
//   totalPrice.innerHTML = `$` + total;
// }

// function addApple() {
//   let name = "Apples";
//   let apples = apple.value;
//   if (apples === "" || isNaN(apples)) {
//     alert("Please Add Value to proceed to cart" || "Not a Number");
//   } else {
//     let appleCalc = apples * 2;
//     applePrice.innerHTML = "$" + appleCalc;
//     displaCartProducts.style.display += "block";
//     appleCalPrice.innerHTML += `<p>Price for ${name} : $ ${appleCalc}</p>`;
//     appleCount.innerHTML += `<p>No. of ${name}: ${apples}</p>`;
//     totalPrice.innerHTML = `$ ${total += appleCalc}`;
//   }
//   let removeApple = document.getElementById("removeApple");
//   removeApple.classList.add("blockingDisplay");
// }

// function addPeach() {
//   let name = "Peaches";
//   let peaches = peach.value;
//   if (peaches === "") {
//     alert("Please Add Value to proceed to cart");
//     displaCartProducts.style.display = "none";
//   } else {
//     let peachCalc = peaches * 1.5;
//     peachPrice.innerHTML = "$" + peachCalc;
//     displaCartProducts.style.display = "block";
//     peachCalPrice.innerHTML += `<p>Price for ${name} : $ ${peachCalc}</p>`;
//     peachCount.innerHTML += `<p>No. of ${name}: ${peaches}</p>`;
//     totalPrice.innerHTML = `$ ${total += peachCalc}`;
//   }
//   let removePeach = document.getElementById("removePeach");
//   removePeach.classList.add("blockingDisplay");
// }

// function addOrange() {
//   let name = "Oranges";
//   let oranges = orange.value;
//   if (oranges === "") {
//     alert("Please Add Value to proceed to cart");
//     displaCartProducts.style.display = "none";
//   } else {
//     let orangeCalc = oranges * 1.75;
//     orangePrice.innerHTML = "$" + orangeCalc;
//     displaCartProducts.style.display = "block";
//     orangesCalPrice.innerHTML += `<p>Price for ${name} : $ ${orangeCalc}</p>`;
//     orangesCount.innerHTML += `<p>No. of ${name}: ${oranges}</p>`;
//     totalPrice.innerHTML = `$ ${total += orangeCalc}`;
//   }
//   let removeOrange = document.getElementById("removeOrange");
//   removeOrange.classList.add("blockingDisplay");
// }

let pricesOfItems = document.getElementById("prices");
let totalPrice = document.getElementById("totalPrice");
let priceOfSingleItem = document.getElementById("priceOfSingleItems");
let total = 0;
let fruitPrice = 1.5;

const addToCart = () => {
  let input = Array.from(document.getElementsByClassName("count"));
};

// Grocery Cart Project
// 1) You have to make sure that the user doesn't enter empty input
// 2) You have to target each items add to cart through index so that all of them can't be targeted except the items which are targeted
// 3) You have to write price of every individual item so that they all are with different prices
// 4) the total price should be updated with every click on addToCart
// 5) lastly each item should be displayed in with card that this item has been entered
