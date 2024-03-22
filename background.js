const allowedUrl = "https://florian-timm.de/geoportal/";

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith(allowedUrl)) {
    chrome.tabs.sendMessage(tab.id, { code: "INJECT_SCRIPT" });
  }
});