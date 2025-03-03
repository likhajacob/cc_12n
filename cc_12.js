// Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("Created Revenue Metric Card");
// Select The Dashboard Container:
const dashboardContainer = document.getElementById("dashboard");
const dashboardContainerQuery = document.querySelector("#dashboard");
// Create <div> Element To Represent The Metric Card
const revenueCard = document.createElement("div");
// Use setAttribute To Assign A Class And An Id To The New Element
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
// Populate The Card With A Title And A Placeholder Value
revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$50,000</p>
`;
// Append The New Metric Card To The Dashboard Container
dashboardContainer.appendChild(revenueCard);
console.log("Task 2");
console.log("=".repeat(20));

// Creating Scenario with Profit and Expense Cards
const profitCard = document.createElement("div"); // div creation
const expenseCard = document.createElement("div");

profitCard.setAttribute("class", "metric-card"); // Set attributes
expenseCard.setAttribute("class", "metric-card");

profitCard.innerHTML = "<h3>Profit</h3> <p>$0</p>"; 
expenseCard.innerHTML = "<h3>Expenses</h3> <p>$0</p>";

// Define or select metricDiv
const metricDiv = document.getElementById("metrics") || document.createElement("div");

// If metricDiv is newly created, append it to the body
if (!document.getElementById("metrics")) {
    document.body.appendChild(metricDiv);
}

metricDiv.appendChild(profitCard); // Both cards are adopted by metricDiv
metricDiv.appendChild(expenseCard);

// Task 2 Requirements
const allMetrics = document.querySelectorAll(".metric-card");
console.log(allMetrics); // Collecting all metric cards

const nodeListArray = Array.from(allMetrics);
console.log(nodeListArray); // Converting NodeList to array

nodeListArray.forEach(card => {
    card.style.background = "lightpink"; // Changing background color of cards
});
// Task 3 Dynamic Inventory Management
// selects inventory list container
const inventoryList = document.getElementById("inventoryList");
// function to add a new inventory item
function addInventoryItem(productName) {
    const listItem = document.createElement("li");
    // sets class
    listItem.setAttribute("class", "product-item");
    // sets custom attribute for product name
    listItem.setAttribute("data-product", productName); 
    listItem.textContent = productName;
// added event listener to remove item when clicked
    listItem.addEventListener("click", function () {
        removeInventoryItem(listItem); // removes item
    });
// appends product item
    inventoryList.appendChild(listItem);
};
// removes item when clicked on
function removeInventoryItem(item) {
    inventoryList.removeChild(item);
};
