document.addEventListener('DOMContentLoaded', function () {
  // Retrieve order data from localStorage
  let orders = JSON.parse(localStorage.getItem('orders')) || [];

  // Get the table body element
  const orderTableBody = document.getElementById('order-body');

  // Function to delete an order
  function deleteOrder(index) {
      orders.splice(index, 1); // Remove the order from the array
      localStorage.setItem('orders', JSON.stringify(orders)); // Update localStorage

      // Re-render the table to reflect the changes
      renderOrders();
  }

  // Function to update the quantity of an order
  function updateQuantity(index, newQuantity) {
      orders[index].quantity = newQuantity; // Update the quantity
      localStorage.setItem('orders', JSON.stringify(orders)); // Update localStorage

      // Re-render the table to reflect the changes
      renderOrders();
  }

  // Function to render orders in the table
  function renderOrders() {
      orderTableBody.innerHTML = ''; // Clear the table body

      let totalPrice = 0; // Initialize total price

      // Populate the order history table
      orders.forEach((order, index) => {
          const row = document.createElement('tr');
          const subtotal = order.price * order.quantity;
          totalPrice += subtotal; // Add subtotal to total price
          row.innerHTML = `
              <td>${order.product}</td>
              <td>
                  <input type="number" min="1" value="${order.quantity}" onchange="updateQuantity(${index}, this.value)">
              </td>
              <td>$${subtotal.toFixed(2)}</td>
              <td><button onclick="deleteOrder(${index})">Delete</button></td>
          `;
          orderTableBody.appendChild(row);
      });

      // Add row for total price
      const totalRow = document.createElement('tr');
      totalRow.innerHTML = `
          <td colspan="2"><strong>Total:</strong></td>
          <td><strong>$${totalPrice.toFixed(2)}</strong></td>
          <td></td>
      `;
      orderTableBody.appendChild(totalRow);
  }

  renderOrders(); // Initial rendering when page loads
});
// Function to confirm GCash payment
function confirmGCashPayment() {
    // Assuming you have retrieved the product details from somewhere
    const orderedProduct = {
        id: '123456', // Example product ID
        name: 'Example Product',
        price: 100 // Example product price
        // Add any other necessary product details
    };
    localStorage.setItem('orderedProduct', JSON.stringify(orderedProduct)); // Store product details in localStorage
    window.location.href = 'logistic.html'; // Redirect to logistic.html
}

// Function to confirm PayPal payment
function confirmPayPalPayment() {
    // Similar to confirmGCashPayment, store product details and redirect
    const orderedProduct = {
        id: '123456', 
        name: 'Example Product',
        price: 100 
    };
    localStorage.setItem('orderedProduct', JSON.stringify(orderedProduct));
    window.location.href = 'logistic.html';
}
