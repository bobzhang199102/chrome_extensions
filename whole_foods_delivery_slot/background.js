chrome.runtime.onMessage.addListener(slot => {
    chrome.notifications.create({
        type: "basic",
        title: "Delivery Window Found",
        iconUrl: "icon.svg",
        message: slot,
    });
});