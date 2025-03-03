// Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("***** Created Revenue Metric Card *****");
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
//Task 2
console.log("Task 2");
console.log("=".repeat(20));
//Creating Scenario with Profit and expense cards

const profitCard = document.createElement("div"); //div creation
const expenseCard = document.createElement("div");

profitCard.setAttribute("class", "metric-card"); //set attributes
expenseCard.setAttribute("class", "metric-card");

profitCard.innerHTML = "<h3>Profit</h3> <p>$0</p>" 
expenseCard.innerHTML = "<h3>Expenses</h3> <p>$0</p>"

metricDiv.appendChild(profitCard); //Both cards are adopted by metricDiv
metricDiv.appendChild(expenseCard);
//Task 2 Requirements

allMetrics = document.querySelectorAll(".metric-card")
console.log(allMetrics); //Collecting all metric cards

nodeListArray = Array.from(allMetrics)
console.log(nodeListArray); //converting nodelist to array

nodeListArray.forEach(card => {
    card.style.background = "lightpurple"; //changing background color of cards
});
