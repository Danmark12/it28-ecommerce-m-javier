let currentStatusIndex = 0;

function updateStatus() {
  const statusElements = document.querySelectorAll('.content p');
  statusElements.forEach((element, index) => {
    if (index === currentStatusIndex) {
      element.innerHTML = `<span class="status">${element.textContent}</span>`;
    }
  });
}

function nextStatus() {
  if (currentStatusIndex < 4) {
    currentStatusIndex++;
    updateStatus();
  } else {
    alert("Your order has been delivered! Thank you for shopping with us.");
  }
}
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve ordered product details from localStorage
    const orderedProduct = JSON.parse(localStorage.getItem('orderedProduct'));

    // Check if there are ordered product details available
    if (orderedProduct) {
        // Display the ordered product details on the logistic.html page
        const productContainer = document.getElementById('ordered-product-container');
        const productDetails = `
            <p>Product ID: ${orderedProduct.id}</p>
            <p>Product Name: ${orderedProduct.name}</p>
            <p>Product Price: $${orderedProduct.price}</p>
            <!-- Add any other necessary product details here -->
        `;
        productContainer.innerHTML = productDetails;
    } else {
        // Handle case where there are no ordered product details available
        console.log('No ordered product details found.');
    }
});
