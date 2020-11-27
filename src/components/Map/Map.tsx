/* eslint-disable react/self-closing-comp */
import React, { useEffect, useRef } from 'react';
import { MapView } from '@here/harp-mapview';
import { GeoCoordinates } from '@here/harp-geoutils';
import {
  APIFormat,
  AuthenticationMethod,
  VectorTileDataSource,
} from '@here/harp-vectortile-datasource';
import { MapControls } from '@here/harp-map-controls';
import { Wrapper, MapCanvas } from './Map.style';

type Props = {
  // Define possible props here
  className?: string;
};

const Map: React.FC<Props> = ({ className }) => {
  const mapCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const dataSource = new VectorTileDataSource({
    baseUrl: 'https://vector.hereapi.com/v2/vectortiles/base/mc',
    apiFormat: APIFormat.XYZOMV,
    styleSetName: 'tilezen',
    authenticationCode: 'FmlPWPLcRBBePhEKjh99vvz4omDoLfXvvsb-YNCisU4',
    authenticationMethod: {
      method: AuthenticationMethod.QueryString,
      name: 'apikey',
    },
  });

  useEffect(() => {
    if (mapCanvasRef.current) {
      const mapView = new MapView({
        canvas: mapCanvasRef.current,
        theme: 'node_modules/@here/harp-map-theme/resources/berlin_tilezen_night_reduced.json',
        // note, this URL may vary depending on configuration of webpack
        // for this example, it is assumed that app is server from project root
        decoderUrl: 'harp-gl-decoders.bundle.js',
        // note, this URL may vary depending on configuration of webpack
        // for this example, it is assumed that webpack emits bundles to project root
      });
      mapView.camera.position.set(0, 0, 800);
      mapView.geoCenter = new GeoCoordinates(40.70398928, -74.01319808, 0);
      mapView.resize(mapCanvasRef.current.clientWidth, mapCanvasRef.current.clientHeight);
      mapView.addDataSource(dataSource);
      MapControls.create(mapView);
    }
  });

  return (
    <Wrapper className={className}>
      <MapCanvas ref={mapCanvasRef} id="mapCanvas"></MapCanvas>
    </Wrapper>
  );
};

export default Map;
