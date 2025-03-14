// init socket.io
const socket = io();
 
// Get the input and button elements
const messageInput = document.querySelector('#message-input');
const button = document.querySelector('button');

const nameInput = document.querySelector('#name-input');

// Function to handle sending a message
function sendMessage() {
    // Get the message text from the input
    const message = messageInput.value;
    const name = nameInput.value;

    // TODO send message to server
    socket.emit('new_message', { name, message })
    console.log({name, message })

    // Clear the input field
    messageInput.value = '';
}

// Add event listener to the button for sending a message
button.addEventListener('click', sendMessage);

// add event listener for new messages
socket.on('dispense_message', data => {
    console.log(data);

    message = data.message;
    name = data.name;
    // alternatively, destructure: const {name,message} = data;

    const messageElement = document.createElement('div');

    messageElement.classList.add('message');
    messageElement.textContent = name + ': ' + message;

    const messageContainer = document.querySelector('.message-container')
    messageContainer.appendChild(messageElement)
})