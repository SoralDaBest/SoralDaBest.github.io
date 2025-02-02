// Handle dropdown change event
const modelSelector = document.getElementById('model-selector');
let selectedModel = modelSelector.value;

modelSelector.addEventListener('change', function() {
    selectedModel = modelSelector.value;
});

// Simple chatbot interaction with custom responses
document.getElementById('chatbot-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const message = event.target.value.trim().toLowerCase();  // Normalize input
        const chatbotBody = document.getElementById('chatbot-body');

        // Display user's message
        const userMessage = document.createElement('p');
        userMessage.textContent = `You: ${event.target.value}`;
        chatbotBody.appendChild(userMessage);

        let botResponseText = "I'm not sure what you mean. Could you rephrase that?";

        // Handle responses based on selected model
        if (selectedModel === 'default') {
            // Default model responses
            if (message === 'hi' || message === 'hello') {
                botResponseText = "Hello! How can I assist you today?";
            } else if (message === 'how are you') {
                botResponseText = "I'm just a bot, but I'm doing great! How can I help you?";
            } else if (message === 'bye') {
                botResponseText = "Goodbye! Have a great day!";
            } else if (message === 'help') {
                botResponseText = "Sure! How can I assist you? You can ask about our services, pricing, or anything else.";
            } else if (message === 'thanks' || message === 'thank you') {
                botResponseText = "You're welcome! Let me know if you need anything else.";
            } else if (message.includes('chatgpt') || message.includes('made with chatgpt')) {
                botResponseText = "I am powered by AI, but I wasn't specifically built with ChatGPT. I do have some similar capabilities though!";
            }
        } else if (selectedModel === 'custom') {
            // Custom AI model responses
            if (message === 'hi' || message === 'hello') {
                botResponseText = "Hello, welcome to the custom model! How can I help you today?";
            } else if (message === 'how are you') {
                botResponseText = "I'm doing great, powered by our custom AI model!";
            } else if (message === 'bye') {
                botResponseText = "Goodbye from the custom model! Take care!";
            } else if (message === 'help') {
                botResponseText = "This is a custom AI model! Let me know what you need assistance with.";
            } else if (message.includes('chatgpt')) {
                botResponseText = "This custom model is a unique AI, and not ChatGPT specifically, but both can assist you!";
            }
        }

        // Display bot's response
        const botResponse = document.createElement('p');
        botResponse.textContent = `Bot: ${botResponseText}`;
        chatbotBody.appendChild(botResponse);

        // Clear input field
        event.target.value = '';
        chatbotBody.scrollTop = chatbotBody.scrollHeight;  // Scroll to the bottom
    }
});
