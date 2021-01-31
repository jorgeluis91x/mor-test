import React, {useContext, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {
  Container,
  ContainerImageHeader,
  TopHeader,
  BottomHeader,
  TitleName,
  ContainerBody,
  HeaderBody,
  TextMor,
  RowView,
} from './style';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import {ThemeContext} from '../../theme';

import {useDispatch} from 'react-redux';
import {getCategories, getMoves, getMovesToShow} from '../../redux/app';
import {useTypedSelector} from '../../hooks/use-type-selector';
import Move from '../../components/move';
import {ContainerIcon, PressIcon} from '../../components/move/style';
import Icon from 'react-native-vector-icons/Fontisto';

// Inside of a component's render() method:

function ProfileScreen() {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const movesToShow = useTypedSelector(getMovesToShow);

  const renderMoves = () => {
    return movesToShow.map((item) => {
      return (
        <View>
          <TextMor marginVertical={15} size={theme.fontSize.h1 - 5}>
            {item.timeofDay}
          </TextMor>
          <Move moves={item.moves} />
        </View>
      );
    });
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getMoves());
  }, []);
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageHeaderScrollView
        maxHeight={theme.sizes.screenHeight / 2}
        minHeight={100}
        headerImage={require('../../../assets/imgs/profile.jpeg')}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderForeground={() => (
          <ContainerImageHeader>
            <TopHeader>
              <TextMor
                style={{
                  flex: 1,
                  textAlign: 'center',
                }}
                textColor={'white'}>
                @jakelaz
                <TextMor
                  style={{
                    flex: 1,
                    textAlign: 'center',
                  }}
                  textColor={theme.colors.secondaryText}>
                  (me)
                </TextMor>
              </TextMor>
              <PressIcon
                onPress={() => {
                  console.log('open camera');
                }}
                bgColor={'white'}
                size={40}
                marginHorizontal={10}>
                <Icon color={'#6787A3'} name={'camera'} size={20} />
              </PressIcon>
            </TopHeader>
            <BottomHeader>
              <TitleName>Jake Lazarus</TitleName>
              <RowView>
                <ContainerIcon
                  bgColor={'white'}
                  size={10}
                  marginHorizontal={6}
                />
                <TextMor textColor={'white'}>In 75 People's calendars</TextMor>
              </RowView>
            </BottomHeader>
          </ContainerImageHeader>
        )}>
        <ContainerBody>
          <HeaderBody>
            <View>
              <TextMor flex={3}>Your Public Calendar!</TextMor>
            </View>
            <RowView>
              <TextMor marginHorizontal={5} size={theme.fontSize.h5}>
                Private
              </TextMor>
              <TextMor marginHorizontal={10} size={theme.fontSize.h5}>
                Public
              </TextMor>
            </RowView>
          </HeaderBody>
          <TriggeringView onHide={() => console.log('text hidden')}>
            {renderMoves()}
          </TriggeringView>
        </ContainerBody>
      </ImageHeaderScrollView>
    </Container>
  );
}

export default ProfileScreen;
