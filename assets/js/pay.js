document.addEventListener('DOMContentLoaded', function () {
  const paymentForm = document.getElementById('payment-form');

  paymentForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
      
      // Validate payment information (e.g., card number, expiration date, CVV)

      // If payment information is valid, process the payment
      // Example: You can use a payment processing service or API here
      alert('Payment processed successfully!');
      paymentForm.reset(); // Reset the form after successful payment
  });
});
