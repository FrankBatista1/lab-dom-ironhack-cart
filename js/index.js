// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML//gueting de price from the HTML 
  const quantity = product.querySelector('.quantity input').value//guetting the quantity from the HTML
  const subtotalIs = price * quantity
  const defaultSubtotal = product.querySelector('.subtotal span').innerHTML = subtotalIS
  defaultSubtotal = subtotalIs
  
  product.querySelector('subtotal span').innerHTML
  return defaultSubtotal;
}
function calculateAll(product) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  products.forEach(product) => {
    updateSubtotal(product);//apllies the function no every index
  }


  

  // ITERATION 3
  let total = 0 
  products.forEach(product) => {
    subtotal = product.childNodes[7].childNodes[1].innerHTML
    console.log('Subtotal:',subtotal);
    total += Number(subtotal)
  }
  document.getElementsById('total-value')
  document.getelem
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('click', (() => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
}));
