// Firebase configuration and initialization
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD973DOB5cFx0ZiIjfQI8toUHHbaT70UeQ",
    authDomain: "soraldabest.firebaseapp.com",
    projectId: "soraldabest",
    storageBucket: "soraldabest.firebasestorage.app",
    messagingSenderId: "1046107389807",
    appId: "1:1046107389807:web:755e4724322ba618dcb29a",
    measurementId: "G-K6ZC913ET0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check user authentication state
onAuthStateChanged(auth, user => {
    if (user) {
        document.getElementById("login-link").style.display = "none";
        document.getElementById("signup-link").style.display = "none";
        document.getElementById("user-info").style.display = "inline";
        document.getElementById("user-greeting").innerText = `Hello, ${user.email}`;
    } else {
        document.getElementById("login-link").style.display = "inline";
        document.getElementById("signup-link").style.display = "inline";
        document.getElementById("user-info").style.display = "none";
    }
});

// Logout function
window.logout = function() {
    signOut(auth).then(() => {
        location.reload();
    });
};

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

        // Simple keyword responses
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
