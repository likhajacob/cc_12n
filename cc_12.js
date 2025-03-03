// Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("Created Revenue Metric Card");

// Select The Dashboard Container:
const dashboardContainer = document.getElementById("dashboard");

if (dashboardContainer) {
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

// Append profit and expense cards
metricDiv.appendChild(profitCard);
metricDiv.appendChild(expenseCard);

// Task 2 Requirements
const allMetrics = document.querySelectorAll(".metric-card");
console.log(allMetrics); // Collecting all metric cards

const nodeListArray = Array.from(allMetrics);
console.log(nodeListArray); // Converting NodeList to array

nodeListArray.forEach(card => {
    card.style.background = "lightpink"; //background color of cards
});

// Task 3: Dynamic Inventory Management
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

    // Add event listener to remove item when clicked
    listItem.addEventListener("click", function () {
        removeInventoryItem(listItem);
    });

    // Append product item
    inventoryList.appendChild(listItem);
}

function removeInventoryItem(item) {
    if (inventoryList && item) {
        inventoryList.removeChild(item);
    }
}
//Task 4: Business Customer Section – Handling Event Bubbling
const customerSection = document.getElementById("customerSection"); //Create a parent container with the id "customerSection".

//Attach click event listeners to the parent container.
customerSection.addEventListener("click", (event) => {
  console.log("Customer section clicked"); //Logs a message.
});

//Adds event listeners to each customer card
const customerCards = document.querySelectorAll(".customer-card"); //Create multiple child elements with the class "customer-card".
  card.addEventListener("click", (event) => {
    console.log("Customer card clicked"); //Logs a message.

    // Prevent event handler from triggering
    event.stopPropagation();
});


