// Function to handle buy button click
function handleBuyButtonClick(event) {
    const product = event.target.dataset.product;
    const price = parseFloat(event.target.dataset.price);
    const quantity = parseInt(event.target.previousElementSibling.value);

    // Check if quantity is valid
    if (quantity > 0) {
        // Create order object
        const order = {
            product: product,
            quantity: quantity,
            price: price
        };

        // Retrieve existing orders from localStorage
        let orders = JSON.parse(localStorage.getItem('orders')) || [];

        // Add new order to existing orders
        orders.push(order);

        // Save updated orders to localStorage
        localStorage.setItem('orders', JSON.stringify(orders));

        alert('Order placed successfully!');
    } else {
        alert('Please enter a valid quantity.');
    }
}

// Add event listener to all buy buttons
document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', handleBuyButtonClick);
    });
});
