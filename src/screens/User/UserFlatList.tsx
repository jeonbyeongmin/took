import TCCard from '@components/TCCard';
import {FlatList} from 'native-base';
import React, {useCallback} from 'react';
import {ITrashCanInfo} from 'types/TrashCan';

function UserFlatList({data}: {data: ITrashCanInfo[] | undefined}) {
  const renderItem = useCallback(
    ({item}) => (
      <TCCard
        id={item.id}
        name={item.name}
        tags={item.tags}
        trashImage={item.trashImage}
        onRemove={() => console.log('!')}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id + item.name, []);

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      maxToRenderPerBatch={8}
      windowSize={12}
      initialNumToRender={7}
      removeClippedSubviews={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default UserFlatList;