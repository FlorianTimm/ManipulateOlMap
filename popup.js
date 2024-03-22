document.getElementById("file-input").addEventListener("change", (e) => {
    console.log(e)
    console.log(chrome)
    chrome.tabs.sendMessage(tab.id, { code: "INJECT_SCRIPT" });
}
);
console.log("popup.js loaded");