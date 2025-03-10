// Add simple search functionality
document.querySelector("input[type='text']").addEventListener("input", function(event) {
    console.log("Searching for:", event.target.value);
});
document.addEventListener("DOMContentLoaded", function () {
    const chatbotBtn = document.getElementById("chatbot-btn");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChatbot = document.getElementById("close-chatbot");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatbotMessages = document.getElementById("chatbot-messages");

    // Show chatbot
    chatbotBtn.addEventListener("click", () => {
        chatbotContainer.style.display = "flex";
    });

    // Close chatbot
    closeChatbot.addEventListener("click", () => {
        chatbotContainer.style.display = "none";
    });

    // Predefined robotic responses
    const responses = {
        "hello": "Hello, human! 🤖",
        "how are you": "I am just a bot, but I'm functioning optimally!I'm Fine...What about you?",
        "who are you": "I am RoboChat, your friendly AI assistant!",
        "bye": "Goodbye, human! Come back soon! 👋",
        "default": "I'm sorry, I do not understand that command."
    };

    // Function to send message
    function sendMessage() {
        let userMessage = userInput.value.trim().toLowerCase();
        if (!userMessage) return;

        // Display user message
        let userMsgDiv = document.createElement("div");
        userMsgDiv.textContent = "You: " + userMessage;
        chatbotMessages.appendChild(userMsgDiv);
        userInput.value = "";

        // Determine response
        let botResponse = responses[userMessage] || responses["default"];

        // Display bot message
        setTimeout(() => {
            let botMsgDiv = document.createElement("div");
            botMsgDiv.textContent = "🤖 " + botResponse;
            chatbotMessages.appendChild(botMsgDiv);

            // Speak response
            speakResponse(botResponse);
        }, 500);
    }

    // Text-to-Speech (Robotic voice)
    function speakResponse(text) {
        let speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.voice = window.speechSynthesis.getVoices()[0]; // Default voice
        speech.rate = 0.9; // Slower speed for robotic effect
        window.speechSynthesis.speak(speech);
    }

    // Send message on button click
    sendBtn.addEventListener("click", sendMessage);

    // Send message on Enter key press
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const chatbotBtn = document.getElementById("chatbot-btn");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChatbot = document.getElementById("close-chatbot");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatbotMessages = document.getElementById("chatbot-messages");

    // Show chatbot
    chatbotBtn.addEventListener("click", () => {
        chatbotContainer.style.display = "flex";
    });

    // Close chatbot
    closeChatbot.addEventListener("click", () => {
        chatbotContainer.style.display = "none";
    });

    // Predefined Questions and Answers
    const responses = {
        "how can chatgpt help in software development": "ChatGPT can assist in generating code snippets, debugging, explaining complex concepts, and automating documentation.",
        "can chatgpt be used for devops tasks like kubernetes automation": "Yes, it can generate YAML configurations, help with Helm charts, and provide guidance on Kubernetes deployment strategies.",
        "how do i integrate chatgpt into a full-stack web application": "You can use OpenAI’s API with Node.js/Express for backend processing and React.js for the frontend.",
        "what are the limitations of chatgpt in backend development": "While ChatGPT can generate code, it lacks real-time debugging capabilities and sometimes produces incorrect or outdated syntax.",
        "is chatgpt useful for aws cloud architecture planning": "It can help by providing architectural diagrams, best practices, and sample Terraform or CloudFormation scripts.",
        "can chatgpt assist in seo for my tech blog": "Yes, it can generate SEO-optimized meta descriptions, blog outlines, and keyword suggestions.",
        "how do i use chatgpt for open-source project documentation": "You can use it to generate structured README files, API documentation, and usage guides.",
        "does chatgpt help in debugging java, python, or c++ code": "It can suggest solutions based on errors, explain code behavior, and offer alternative implementations.",
        "how can i create a chatbot using chatgpt on my website": "You can use OpenAI's API with Next.js or a serverless function to integrate a chatbot on your site.",
        "what are the ethical concerns of using chatgpt for content creation": "Issues like bias, misinformation, and lack of originality should be considered, ensuring human review before publishing.",
        "default": "I'm sorry, I don't have an answer for that. Please ask something related to ChatGPT and software development!"
    };

    // Function to send user message
    function sendMessage() {
        let userMessage = userInput.value.trim().toLowerCase();
        if (!userMessage) return;

        // Display user message
        let userMsgDiv = document.createElement("div");
        userMsgDiv.textContent = "You: " + userMessage;
        chatbotMessages.appendChild(userMsgDiv);
        userInput.value = "";

        // Determine bot response
        let botResponse = responses[userMessage] || responses["default"];

        // Display bot message
        setTimeout(() => {
            let botMsgDiv = document.createElement("div");
            botMsgDiv.textContent = "🤖 " + botResponse;
            chatbotMessages.appendChild(botMsgDiv);
        }, 500);
    }

    // Send message on button click
    sendBtn.addEventListener("click", sendMessage);

    // Send message on Enter key press
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
    });
});
