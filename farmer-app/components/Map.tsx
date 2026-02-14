'use client';

import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';
import { Style, Icon, Fill, Stroke, Text } from 'ol/style';

interface MapComponentProps {
  fields?: any[]; // Replace with specific Field type if shared
}

export default function MapComponent({ fields = [] }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstance.current) {
      // Initialize Map
      const vectorSource = new VectorSource();
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      // Default center: Salem, Tamil Nadu, India
      const center = fromLonLat([78.1460, 11.6643]);

      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        view: new View({
          center: center,
          zoom: 13,
        }),
        controls: [], // Remove default controls for cleaner look or customize
      });

      // Add dummy fields if no real geojson data provided
      // Creating some mock polygons relative to center for demonstration
      const addMockField = (offsetX: number, offsetY: number, color: string, label: string) => {
        const p1 = fromLonLat([78.1460 + offsetX, 11.6643 + offsetY]);
        const p2 = fromLonLat([78.1460 + offsetX + 0.01, 11.6643 + offsetY]);
        const p3 = fromLonLat([78.1460 + offsetX + 0.01, 11.6643 + offsetY - 0.01]);
        const p4 = fromLonLat([78.1460 + offsetX, 11.6643 + offsetY - 0.01]);

        const feature = new Feature({
          geometry: new Polygon([[p1, p2, p3, p4, p1]]),
        });

        feature.setStyle(new Style({
          fill: new Fill({
            color: color,
          }),
          stroke: new Stroke({
            color: '#ffffff',
            width: 2,
          }),
          text: new Text({
            text: label,
            font: 'bold 12px Inter, sans-serif',
            fill: new Fill({ color: '#fff' }),
            stroke: new Stroke({ color: '#000', width: 2 }),
          })
        }));

        vectorSource.addFeature(feature);
      };

      // Mock Fields Visualization
      addMockField(0, 0, 'rgba(19, 236, 55, 0.4)', 'Field A'); // Healthy
      addMockField(0.015, 0.005, 'rgba(250, 204, 21, 0.4)', 'Field B'); // Check
      addMockField(-0.015, -0.005, 'rgba(19, 236, 55, 0.4)', 'Field C'); // Healthy
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapRef} className="w-full h-full relative" style={{ backgroundColor: '#e5e7eb' }}>
      {/* Map is rendered here */}
    </div>
  );
}
