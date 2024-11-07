// script.js

// Function to get Indian Standard Time
function updateClock() {
  const date = new Date();
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const currentTime = new Intl.DateTimeFormat("en-US", options).format(date);
  document.getElementById("clock").textContent = currentTime;
  updateGreeting();
}

function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hello!";
  if (hour >= 5 && hour < 12) greeting = "Good Morning!";
  else if (hour >= 12 && hour < 18) greeting = "Good Afternoon!";
  else if (hour >= 18 && hour < 22) greeting = "Good Evening!";
  else greeting = "Good Night!";
  document.getElementById("greeting").textContent = greeting;
}

// Dynamic Background Change
function changeBackground() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18)
    document.body.style.backgroundImage =
      "https://images8.alphacoders.com/614/614833.jpg"; // Daytime
  else
    document.body.style.backgroundImage =
      "https://www.fabionodariphoto.com/wp-content/uploads/2022/11/how-to-make-money-selling-pictures-as-nft.jpg"; // Nighttime
}

// Theme Switcher
document.getElementById("change-theme").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "black" ? "#87CEFA" : "black";
});

// Display random time facts
const facts = [
  "Did you know? A year on Venus is shorter than a day on Venus!",
  "The Doomsday Clock is a symbol that represents the likelihood of a man-made global catastrophe.",
  "There are 31,536,000 seconds in a year!",
  "Did you know? There is no 24-hour clock in the universe; time is relative!",
];
function showRandomFact() {
  document.getElementById("fact").textContent =
    facts[Math.floor(Math.random() * facts.length)];
}

// Timezone Converter
document.getElementById("timezone").addEventListener("click", () => {
  const date = new Date();
  const utcString = date.toUTCString();
  document.getElementById(
    "timezone-display"
  ).textContent = `UTC Time: ${utcString}`;
});

// Initialize and update every second
setInterval(() => {
  updateClock();
  changeBackground();
  showRandomFact();
}, 1000);
