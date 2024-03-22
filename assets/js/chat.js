// JavaScript for Chat Page
document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const message = messageInput.value;
        if (message.trim() !== '') {
            appendMessage('You', message);
            // Here you can add logic to send the message to your customer service system
            // For demo purposes, we'll just clear the input field
            messageInput.value = '';
        }
    });

    // Function to append a message to the chat
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        // Scroll to the bottom of the chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

