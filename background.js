const allowedUrl = "https://florian-timm.de/geoportal/";

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith(allowedUrl)) {
    chrome.tabs.sendMessage(tab.id, {
      code: "INJECT_SCRIPT",
      script: `
        document.body.style.backgroundColor = "yellow";
        var layer = new ol.layer.Tile({
          source: new ol.source.OSM()
        });

        map.addLayer(layer);
      `
    });
  }
});