document.addEventListener("DOMContentLoaded", function () {
    const chatbotBody = document.getElementById("chatbot-body");
    const inputField = document.getElementById("chatbot-input");
    const sendBtn = document.getElementById("send-btn");
    const typingIndicator = document.getElementById("typing-indicator");

    function addMessage(text, sender) {
        const message = document.createElement("div");
        message.classList.add(sender === "user" ? "user-message" : "bot-message");
        message.textContent = text;
        chatbotBody.appendChild(message);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    function botResponse(userInput) {
        typingIndicator.classList.remove("hidden");

        setTimeout(() => {
            typingIndicator.classList.add("hidden");

            let response;
            if (userInput.toLowerCase() === "hi") {
                response = "Hello! How can I assist you today?";
            } else if (userInput.toLowerCase().includes("chatgpt")) {
                response = "Yes, I was created with ChatGPT! 😊";
            } else {
                response = "I'm still learning! Try asking something else.";
            }

            addMessage(response, "bot");
        }, 2000);
    }

    sendBtn.addEventListener("click", () => {
        const userInput = inputField.value.trim();
        if (userInput !== "") {
            addMessage(userInput, "user");
            inputField.value = "";
            botResponse(userInput);
        }
    });
});
