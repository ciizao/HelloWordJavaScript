// Add an event listener to the button
document.getElementById('change-text').addEventListener('click', () => {
    // Get the greeting element
    const greeting = document.getElementById('greeting');
    
    // Toggle the text between two messages
    greeting.textContent = greeting.textContent === 'Hello World!' 
        ? 'Hello from JavaScript!' 
        : 'Hello World!';
});
