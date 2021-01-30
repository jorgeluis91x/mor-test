import React, {useContext} from 'react';
import {StatusBar, Text, TouchableOpacity} from 'react-native';
import {
  Container,
  ContainerImageHeader,
  TopHeader,
  BottomHeader,
  TitleName,
  ContainerBody,
  HeaderBody,
  TextMor,
} from './style';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import {ThemeContext} from '../../theme';

import Icon from 'react-native-vector-icons/Fontisto';

// Inside of a component's render() method:

function ProfileScreen() {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageHeaderScrollView
        maxHeight={theme.sizes.screenHeight / 2}
        minHeight={60}
        headerImage={require('../../../assets/imgs/profile.jpeg')}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderForeground={() => (
          <ContainerImageHeader>
            <TopHeader>
              <Text
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  textAlign: 'center',
                  color: 'white',
                }}>
                @jakelaz
              </Text>
              <TouchableOpacity onPress={() => console.log('tap!!')}>
                <Text style={{backgroundColor: 'transparent', color: 'white'}}>
                  Icon Camera!
                </Text>
              </TouchableOpacity>
            </TopHeader>
            <BottomHeader>
              <TitleName
                style={{backgroundColor: 'transparent', color: 'white'}}>
                Jake Lazarus
              </TitleName>
              <TouchableOpacity onPress={() => console.log('tap!!')}>
                <Text style={{backgroundColor: 'transparent', color: 'white'}}>
                  In 75 People's calendars
                </Text>
              </TouchableOpacity>
            </BottomHeader>
          </ContainerImageHeader>
        )}>
        <ContainerBody>
          <HeaderBody>
            <TextMor flex={3}>Your Public Calendar!</TextMor>
            <TextMor size={theme.fontSize.h5}>Private</TextMor>
            <TextMor size={theme.fontSize.h5}>Public</TextMor>
          </HeaderBody>
          <TriggeringView onHide={() => console.log('text hidden')}>
            <Text>Scroll Me!</Text>
            <Icon name="world" size={30} color="#900" />
          </TriggeringView>
        </ContainerBody>
      </ImageHeaderScrollView>
    </Container>
  );
}

export default ProfileScreen;
