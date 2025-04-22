// Write your code here!


// Initial shopping list array with items (name + price)
const shoppingList = [{name: "Chicken Breast", price: 10.50}, {name: "Paparika", price: 3.20}, {name: "Chips", price: 6.50}, {name: "Eggs", price: 4.00}, {name: "Milk", price: 7.80}]


// Function to display a single cart item in the HTML list
function displayCartItem(item) {
    // Get the <ul> element with id="cart".HTML: <ul id="cart"></ul>
    const shoppingCart = document.querySelector("#cart") 

    // Create a new list item and two <p> elements for name and price
    const newItem = document.createElement("li");
    const itemName = document.createElement("p");
    const itemPrice = document.createElement("p");

    // Set the text content for the name and price
    itemName.textContent = item.name
    itemPrice.textContent = "$"+item.price

    // Append name and price to the list item
    newItem.append(itemName, itemPrice)
    // Append the list item to the shopping cart list
    shoppingCart.append(newItem)
}


// Loop through each item in shoppingList and display it
shoppingList.forEach(item => {
    displayCartItem(item);
})

// Get the form element for adding new items
const form = document.querySelector("#new-cart-item-form")

// This function will run when the form is submitted
function handleSubmit(event){
    // Prevent the default form submission (which would reload the page)
    event.preventDefault()

    // Get the values typed by the user from the input fields
    const newName = event.target.name.value
    const newPrice = event.target.price.value

    // Create a new item object
    const newItem = {
        name: newName,
        price: newPrice
    }
    //console.log(newItem)

    // Add the new item to the shopping list array
    shoppingList.push(newItem)
    // Display the new item in the cart visually
    displayCartItem(newItem)
}

// Attach the submit event listener to the form
// When the form is submitted, run handleSubmit
form.addEventListener("submit", (event) => {
    handleSubmit(event)
})







