// init socket.io
const socket = io();
 
// Get the input and button elements
const input = document.querySelector('input');
const button = document.querySelector('button');

// Function to handle sending a message
function sendMessage() {
    // Get the message text from the input
    const message = input.value;   

    socket.emit('newMessage', message);

    // Clear the input field
    input.value = '';
}

function createNewMessage() {
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = data;

    // Append the new message element to the chat container
    const chatContainer = document.querySelector('.message-container');
    chatContainer.appendChild(messageElement);
}

// Add event listener to the button for sending a message
button.addEventListener('click', sendMessage);

// Add event listener to the input for sending a message when Enter key is pressed
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

socket.on('dispenseMessage', (data) => {   
    createNewMessage(data)
});