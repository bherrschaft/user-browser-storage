// Function to initialize the cart in localStorage if it doesn't exist
function initializeCart() {
    // Check if there is no cart in localStorage
    if (!localStorage.getItem('cart')) {
        // If there is no cart, create an empty one and save it in localStorage
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

// Function to add an item to the cart
function addItem(item) {
    // Get the current cart from localStorage and convert it from a JSON string to an array
    const cart = JSON.parse(localStorage.getItem('cart'));
    // Add the new item to the cart array
    cart.push(item);
    // Save the updated cart back to localStorage as a JSON string
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to remove an item from the cart by id
function removeItem(id) {
    // Get the current cart from localStorage and convert it from a JSON string to an array
    const cart = JSON.parse(localStorage.getItem('cart'));
    // Create a new array with all items except the one with the matching id
    const updatedCart = cart.filter(item => item.id !== id);
    // Save the updated cart back to localStorage as a JSON string
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

// Function to display the current cart contents
function displayCart() {
    // Get the current cart from localStorage and convert it from a JSON string to an array
    const cart = JSON.parse(localStorage.getItem('cart'));
    // Log the cart contents to the console
    console.log(cart);
}

// Event listener for form submission to add item to cart
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    // Prevent the form from actually submitting and refreshing the page
    event.preventDefault();
    // Get the name of the item from the input field
    const itemName = document.getElementById('itemName').value;
    // Get the price of the item from the input field and convert it to a number
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    // Generate a unique id for the item using the current timestamp
    const itemId = Date.now();
    // Create a new item object with the id, name, and price
    const newItem = { id: itemId, name: itemName, price: itemPrice };
    
    // Add the new item to the cart
    addItem(newItem);
    // Clear the input fields after adding the item
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
});

// Event listener for display cart button to log cart contents
document.getElementById('displayCartButton').addEventListener('click', function() {
    // Call the function to display the cart contents
    displayCart();
});

// Initialize the cart when the script is first loaded
initializeCart();
