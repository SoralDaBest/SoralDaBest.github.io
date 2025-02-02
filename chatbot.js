// Select the necessary DOM elements
const chatbotBody = document.getElementById('chatbot-body');
const chatbotInput = document.getElementById('chatbot-input');
const sendButton = document.getElementById('send-btn');

// Define the bot's response behavior
function botResponse(userMessage) {
    let botMessage = '';

    if (userMessage.toLowerCase().includes('hi') || userMessage.toLowerCase().includes('hello')) {
        botMessage = 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('how are you')) {
        botMessage = 'I\'m doing great, thank you for asking!';
    } else if (userMessage.toLowerCase().includes('chatgpt')) {
        botMessage = 'I was built using a custom model, but thank you for thinking of ChatGPT!';
    } else if (userMessage.toLowerCase().includes('bye')) {
        botMessage = 'Goodbye! Have a great day!';
    } else {
        botMessage = 'I\'m not sure how to respond to that. Can you try asking something else?';
    }

    return botMessage;
}

// Function to add a message to the chat window
function addMessage(message, sender = 'bot') {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;

    chatbotBody.appendChild(messageElement);

    // Scroll the chatbot body to the latest message
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

// Function to handle sending the user's message
function sendMessage() {
    const userMessage = chatbotInput.value.trim();

    if (userMessage) {
        // Add user's message to the chat
        addMessage(userMessage, 'user');
        chatbotInput.value = ''; // Clear the input field

        // Generate and add bot's response after a short delay (simulating typing)
        setTimeout(() => {
            const response = botResponse(userMessage);
            addMessage(response, 'bot');
        }, 1000);
    }
}

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Event listener for the Enter key to send the message
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
