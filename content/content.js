console.log("Content Script Loaded");

chrome.runtime.sendMessage({
    type: "PAGE_LOADED",
    url: window.location.href
});