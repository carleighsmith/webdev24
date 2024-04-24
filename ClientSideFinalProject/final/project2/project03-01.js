
// Declare variables for menu item quantities
let menuQuantities = document.getElementsByClassName("menuQuantity");

// Event listener setup for each quantity input
for (let i = 0; i < menuQuantities.length; i++) {
    menuQuantities[i].addEventListener("input", calcTotal);
}

// Function to calculate the total order cost and update the order summary
function calcTotal() {
    let subtotal = 0;
    const taxRate = 0.07; // 7% tax rate

    // Loop through the quantity inputs and calculate the subtotal
    for (let i = 0; i < menuQuantities.length; i++) {
        let itemPrice = Number(menuQuantities[i].dataset.price);
        let itemQuantity = Number(menuQuantities[i].value);
        subtotal += itemPrice * itemQuantity; // Calculate the subtotal

        // Update the ordered quantity display at the end of the form
        document.getElementById("orderedQuantity" + (i + 1)).innerText = itemQuantity;
    }

    // Calculate tax and total cost
    let tax = subtotal * taxRate;
    let total = subtotal + tax;

    // Update the displayed values for subtotal, tax, and total
    document.getElementById("subtotal").innerText = formatCurrency(subtotal);
    document.getElementById("tax").innerText = formatCurrency(tax);
    document.getElementById("total").innerText = formatCurrency(total);
}

// Function to format numbers as currency
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}