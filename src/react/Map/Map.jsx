import PropTypes from 'prop-types';
import React from 'react';
import GoogleMap from 'google-map-react';

import Marker from './Marker.jsx';

const MarkerHOC = ({ title, text }) => <Marker title={title} text={text} />;

const Map = props => {
  const markers = props.mapData.markers;
  const markersIds = props.mapData.markersIds;
  return (
    <GoogleMap bootstrapURLKeys={{ key: 'AIzaSyApjk_AdVABnyN0PWIjr52lx5Gg_GZRMgc' }} defaultCenter={props.center} defaultZoom={props.zoom}>
      {markersIds.map(markerId => {
        const marker = markers[markerId];
        return <MarkerHOC key={marker.id} lat={marker.lat} lng={marker.lng} title={marker.title} text={marker.text} />;
      })}
    </GoogleMap>
  );
};

Map.propTypes = {
  center: PropTypes.object,
  mapData: PropTypes.object.isRequired,
  zoom: PropTypes.number,
};

Map.defaultProps = {
  center: { lat: 54.5189, lng: 18.5305 },
  zoom: 15,
};

export default Map;
