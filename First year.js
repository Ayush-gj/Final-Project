let cart = [];

// Update cart display function
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartDetails = document.getElementById('cart-details');

    // Update the number of items in the cart
    cartCount.textContent = cart.length;

    if (cart.length > 0) {
        cartDetails.innerHTML = `You have ${cart.length} item(s) in your cart: <br> ${cart.join(', ')}`;
    } else {
        cartDetails.textContent = 'Your cart is empty.';
    }
}

// Add event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.dataset.product;
        cart.push(productName);
        updateCart();
        alert(`${productName} has been added to your cart.`);
    });
});