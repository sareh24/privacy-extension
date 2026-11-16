console.log("Background Started");

chrome.runtime.onMessage.addListener((message, sender) => {

    console.log("Received Message");

    console.log(message);

});