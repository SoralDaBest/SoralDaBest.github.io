document.getElementById('send-btn').addEventListener('click', function() {
    let inputField = document.getElementById('chatbot-input');
    let userMessage = inputField.value.trim();
    let chatBody = document.getElementById('chatbot-body');
    let typingIndicator = document.getElementById('chatbot-typing');

    if (userMessage !== "") {
        // Display user's message
        chatBody.innerHTML += `<div class="user-message">${userMessage}</div>`;
        inputField.value = "";

        // Show typing indicator
        typingIndicator.style.display = "flex";
        chatBody.scrollTop = chatBody.scrollHeight;

        // Simulate bot response delay
        setTimeout(() => {
            typingIndicator.style.display = "none"; // Hide typing indicator
            
            // Example bot response (You can replace this with dynamic responses)
            let botResponse = generateBotResponse(userMessage);
            chatBody.innerHTML += `<div class="bot-message">${botResponse}</div>`;

            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1500); // 1.5-second delay before response
    }
});

// Simple function to return bot responses
function generateBotResponse(userMessage) {
    let responses = {
        "hi": "Hello! How can I help you?",
        "how are you": "I'm just a chatbot, but I'm doing great!",
        "who made you": "I was created by the amazing team at SoralDaBest!",
        "bye": "Goodbye! Have a great day!"
    };

    return responses[userMessage.toLowerCase()] || "I'm not sure how to respond to that.";
}
