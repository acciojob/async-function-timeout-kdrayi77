// Wait function using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the button click
async function handleDelayMessage() {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;
  const outputDiv = document.getElementById('output');

  // Clear previous output
  outputDiv.textContent = '';

  // Convert delay to number
  const delay = parseInt(delayInput);

  // Simple validation
  if (!textInput || isNaN(delay) || delay < 0) {
    outputDiv.textContent = 'Please enter a valid message and delay.';
    return;
  }

  // Wait for the specified delay
  await wait(delay);

  // Show the message after the delay
  outputDiv.textContent = textInput;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', handleDelayMessage);
