const allowedUrl = "http://lverkpw002.fhhnet.stadt.hamburg.de/";

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith(allowedUrl)) {
    chrome.tabs.sendMessage(tab.id, { code: "INJECT_SCRIPT" });
  }
});