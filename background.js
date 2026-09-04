chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log("Request detected:", details.url);
  },
  { urls: ["<all_urls>"] }
);

