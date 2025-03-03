// Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("Created Revenue Metric Card");

// Select The Dashboard Container:
const dashboardContainer = document.getElementById("dashboard"); // Removed duplicate declaration

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
if (dashboardContainer) {
    dashboardContainer.appendChild(revenueCard);
} else {
    console.warn("Dashboard container not found!");
}

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
let metricDiv = document.getElementById("metrics");
if (!metricDiv) {
    metricDiv = document.createElement("div");
    metricDiv.setAttribute("id", "metrics");
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

// Task 3: Dynamic Inventory Management
// selects inventory list container
const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(productName) {
    if (!inventoryList) {
        console.warn("Inventory list container not found!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.setAttribute("class", "product-item");
    listItem.setAttribute("data-product", productName);
    listItem.textContent = productName;

    listItem.addEventListener("click", function () {
        removeInventoryItem(listItem);
    });

    inventoryList.appendChild(listItem);
}

function removeInventoryItem(item) {
    if (inventoryList) {
        inventoryList.removeChild(item);
    }
}

// Task 4: Business Customer Section – Handling Event Bubbling
console.log("********** Demonstrated Event Bubbling in Customer Section **********");

// Create A Nested Structure
const customerSection = document.getElementById("customerSection");

if (customerSection) {
    customerSection.addEventListener("click", () => {
        console.log("Customer Section Clicked");
    });

    const customerCards = document.querySelectorAll(".customer-card");
    customerCards.forEach((card) => {
        card.style.backgroundColor = "#bcbcde"; // Lavender 
        card.addEventListener("click", (event) => {
            console.log(`User clicked: ${event.target.textContent}`);
            event.stopPropagation(); // Ensure Parent's Event Handler Does Not Trigger.
        });
    });
} else {
    console.warn("Customer section not found!");
}
