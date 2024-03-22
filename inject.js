document.addEventListener("retrievePageVariable", () => {
  console.log("retrievePageVariable")
  document.dispatchEvent(
    new CustomEvent("variableRetrieved", {
      detail: vs,
    })
  );
});


if (typeof olmap !== 'undefined') {


  console.log("inject.js loaded")
  let map = olmap.getOlMap();
  console.log(map)
  //map.removeLayer(map.getLayers().getArray()[0]);
  var layer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  layer.setZIndex(4);
  map.addLayer(layer);
  //map.getView().setZoom(10);
  //map.getView().setCenter(ol.proj.fromLonLat([10.6261, 53.9607]));


  //10.0030358,53.4980626
  let f = new ol.Feature({
    geometry: new ol.geom.Point([566603, 5928089]),
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
  vl.setZIndex(5);
  map.addLayer(vl);
} else {
  console.log("olmap not found")
}