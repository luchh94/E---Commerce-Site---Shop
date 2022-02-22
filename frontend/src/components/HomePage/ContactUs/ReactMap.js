import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MapContainer } from "./ReactMap.styles";

mapboxgl.accessToken =
  "pk.eyJ1IjoibHVjaGg5NCIsImEiOiJja3poMmo3bXUzODdvMm9uOWt2N3l4MjVmIn0.wfPxpiiHSZKNy8rll_kr6w";

const ReactMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 9.989;
  const lat = 53.5483;
  const zoom = 15;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <MapContainer ref={mapContainer}></MapContainer>
    </div>
  );
};

export default ReactMap;
