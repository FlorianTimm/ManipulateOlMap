document.addEventListener("retrievePageVariable", () => {
  document.dispatchEvent(
    new CustomEvent("variableRetrieved", {
      detail: vs,
    })
  );
});



console.log("inject.js loaded")
console.log(map)
map.removeLayer(map.getLayers().getArray()[0]);
var layer = new ol.layer.Tile({
  source: new ol.source.OSM()
});
map.addLayer(layer);
map.getView().setZoom(10);
map.getView().setCenter(ol.proj.fromLonLat([7.6261, 51.9607]));



let f = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([7.6261, 51.9607])),
});

f.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
    src: "https://openlayers.org/en/latest/examples/data/icon.png",
    //scale: 0.1,
  }),
}));

let vs = new ol.source.Vector({ features: [f] });
console.log(vs.getFeatures());
let vl = new ol.layer.Vector({
  source: vs,
});
map.addLayer(vl);