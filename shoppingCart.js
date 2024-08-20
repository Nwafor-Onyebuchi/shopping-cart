const cart = [
  { name: "Shoe", price: 12.99, quantity: 2 },
  { name: "Cap", price: 8.99, quantity: 3 },
  { name: "T-shirt", price: 10.99, quantity: 1 },
];

// calculate subvalue
function calculateSubtotal(cartArray) {
  let subtotal = 0;
  for (let i = 0; i < cartArray.length; i++) {
    subtotal += cartArray[i].price * cartArray[i].quantity;
  }
  return subtotal;
}

function applyDiscount(subtotal, discaountPercent) {
  const discount = subtotal * (discaountPercent / 100);
  const discountedTotal = subtotal - discount;
  return discountedTotal;
}

function calculateTax(discountedTotal, taxRate) {
  let tax = discountedTotal * (taxRate / 100);
  const taxedTotal = discountedTotal + tax;
  return taxedTotal;
}

function calculateTotal() {
  const subtotal = calculateSubtotal(cart);
  const discountedTotal = applyDiscount(subtotal, 10);
  const taxedTotal = calculateTax(discountedTotal, 7.5);

  return `$${taxedTotal.toFixed(2)}`;
}

console.log(calculateTotal()) // 61.86195000000001
