// sw.js - Service Worker for Notifications
self.addEventListener("push", event => {
  const data = event.data ? event.data.json() : {};

  const title = data.title || "New Notification!";
  const options = {
    body: data.body || "You’ve got a message.",
    icon: data.icon || "/icon.png",
    badge: data.badge || "/badge.png"
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://aadarsh.dev") // change to your website URL
  );
});
