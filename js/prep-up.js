
function showTable() {
 var table = document.getElementById("myTable");
  if (table.style.display === "none") {
  table.style.display = "table";
 } else {
  table.style.display = "none";
}
}

const buyButton = document.getElementById("buy-button");
const planSelection = document.getElementById("plan-selection");

buyButton.addEventListener("click", () => {
  if (planSelection.style.display === "none") {
    planSelection.style.display = "block";
  } else {
    planSelection.style.display = "none";
  }
});
const scheduleButton = document.getElementById("schedule-button");
const scheduleForm = document.getElementById("schedule-form");

scheduleButton.addEventListener("click", () => {
  scheduleForm.style.display = "block";
});


const planButtons = document.querySelectorAll(".plan-button");

planButtons.forEach(button => {
  button.addEventListener("click", () => {
    const plan = button.getAttribute("data-plan");
    // Here you would add the code to redirect the user to the payment page with the selected plan.
    //you could use window.location.href to redirect the user to a payment page with a query parameter indicating the selected plan and amount.
    if (plan === "7days") {
      window.location.href = "https://paytm.com/payment?plan=7days&amount=10";
    } else if (plan === "15days") {
      window.location.href = "https://example.com/payment?plan=15days&amount=20";
    } else if (plan === "30days") {
      window.location.href = "https://example.com/payment?plan=30days&amount=30";
    }
  });
});


function scheduleCall() {
window.location.href = "/schedule.html";
}
function knowmore() {
window.location.href = "/prep+.html";
}
function goBack() {
  window.history.back();
}

function redirectToTestimonial() {
  window.location.href = "testimonial.html";
}

