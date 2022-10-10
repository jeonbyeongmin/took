import React, {useEffect, useState} from 'react';
import {Box} from 'native-base';
import {Marker} from 'react-native-maps';
import {getTrashCans} from '@api/trashCanAPI';
import {TrashCanType} from 'types/TrashCanType';
import useCurrentLocation from '@hooks/useCurrentLocation';
import trashCanImage from '@images/trashCan.png';
import MapViewWrapper from '@components/MapViewWrapper';

interface MapContainerProps {
  onClickMarker: (id: string) => void;
}

function MapContainer({onClickMarker}: MapContainerProps) {
  const [trashCanList, setTrashCanList] = useState<TrashCanType[]>([]);
  const {location} = useCurrentLocation();

  useEffect(() => {
    const fetchTrashCans = async () => {
      try {
        const response = await getTrashCans();
        setTrashCanList(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrashCans();
  }, []);

  return (
    <Box flex="1">
      {location && (
        <MapViewWrapper location={location}>
          {trashCanList?.map((item, index) => {
            const percentage = ((item.count_yes/(item.count_yes+item.count_no))*100)
            if (percentage >= 80) {
            return (
                <Marker
                  key={index}
                  title={item.name}
                  identifier={item.id}
                  coordinate={item.coordinate}
                  pinColor={'red'}
                  //onPress={() => onClickMarker(item.id)}
                />
            );}
            else {
              return (
                <Marker
                  key={index}
                  title={item.name}
                  identifier={item.id}
                  coordinate={item.coordinate}
                  pinColor={'green'}
                  onPress={() => onClickMarker(item.id)}
                />
            );}
          })}
        </MapViewWrapper>
      )}
    </Box>
  );
}

export default MapContainer;
