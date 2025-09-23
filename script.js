// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("✅ Service Worker registered"))
    .catch(err => console.error("❌ Service Worker failed:", err));
}

// Function to ask for notification permission
function askNotificationPermission() {
  if ("Notification" in window && navigator.serviceWorker) {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("Thanks for subscribing! 🎉", {
          body: "You will now get updates from Aadarsh.div",
          icon: "/icon.png"
        });
      } else {
        alert("You denied notifications ❌");
      }
    });
  } else {
    alert("Notifications are not supported in this browser.");
  }
}

// Attach function to button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("notify-btn");
  if (btn) {
    btn.addEventListener("click", askNotificationPermission);
  }
});
