let totalPrice = document.getElementById("totalPrice");
let displaCartProducts = document.getElementById("displayCartProducts");
let productCartPrice = document.getElementById("productPriceCart");
let total = 0;

let cardItem = [
  { id: 0, name: "Orange", price: 7 },
  { id: 1, name: "Apple", price: 10 },
  { id: 2, name: "Peach", price: 8 },
];

const addToCart = () => {
  total = 0;
  totalPrice.innerHTML = "";
  displaCartProducts.innerHTML = "";
  let input = Array.from(document.getElementsByClassName("count"));
  cardItem.forEach((product, index) => {
    // console.log(index);
    if (index === product.id) {
      let priceMultiply = product.price * input[index].value;
      total += priceMultiply;
      displaCartProducts.innerHTML +=
        `<div id="displayCartProducts" class="displayProducts">
      <h3 style="color: yellow;"> Product:${product.name}</h3>
      <p id="priceOfSingleItems"> Price:$${product.price}</p>
      <p id="priceOfSingleItems"> Cost:$${priceMultiply}</p>
      <p id="productsCount">Items: ${input[index].value}</p>
      </div>` +
        `<button onclick = "deleteCartProduct(${index})">Delete</button>` +
        `<br />`;
    }
  });

  totalPrice.innerHTML += `$${total}`;
};

const deleteCartProduct = (elem) => {
  cardItem.splice(elem, 1);
  addToCart();
};

const clearCart = () => {
  displaCartProducts.innerHTML = "";
  totalPrice.innerHTML = `$0`;
  totalPrice = 0;
};
