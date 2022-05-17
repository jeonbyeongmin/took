import {
  Box,
  Avatar,
  Progress,
  Text,
  ChevronRightIcon,
  HStack,
  Pressable,
} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';

interface IProfile {
  onPress: () => void;
}

const ProfileBox = ({onPress}: IProfile) => {
  return (
    <Box
      w="100%"
      bg="coolGray.100"
      rounded="md"
      shadow={3}
      flex={1.2}
      paddingX={8}
      paddingY={5}>
      <Pressable onPress={onPress}>
        <HStack space={2} justifyContent="space-between">
          <ProfileImage
            size={20}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/49177223?v=4',
            }}>
            Sumi
          </ProfileImage>
          <HStack
            alignContent="center"
            space={3}
            justifyContent="space-evenly"
            marginTop={3}
            h={25}>
            <Text fontSize="md" bold minW={150}>
              수미님 안녕하세요! 😚
            </Text>
            <ChevronRightIcon size="5" />
          </HStack>
        </HStack>
        <Progress value={45} size="lg" marginY={5} colorScheme="tertiary" />
      </Pressable>
    </Box>
  );
};
const ProfileImage = styled(Avatar)``;
export default ProfileBox;
