// init socket.io
const socket = io();
 
// Get the input and button elements
const input = document.querySelector('input');
const button = document.querySelector('button');

// Function to handle sending a message
function sendMessage() {
    // Get the message text from the input
    const message = input.value;

    // TODO send message to server

    // Clear the input field
    input.value = '';
}

// TODO create function to add a new message to the chat

// Add event listener to the button for sending a message
button.addEventListener('click', sendMessage);

// TODO add event listener for new messages