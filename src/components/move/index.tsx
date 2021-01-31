import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {useDispatch} from 'react-redux';
import {ThemeContext} from 'styled-components';
import {useTypedSelector} from '../../hooks/use-type-selector';
import {changeMovePrivacity} from '../../redux/app';
import {RowView, TextMor} from '../../screens/profile/style';

import {
  Container,
  InsideContainer,
  ContainerIcon,
  Info,
  PressIcon,
} from './style';

type MoveProps = {
  /** Titulo de la caja */
  moves: any;
};

function Move(props: MoveProps) {
  const theme = useContext(ThemeContext);
  const categories = useTypedSelector((state) => state.app.categories);
  const dispatch = useDispatch();
  return props.moves.map((move: any) => {
    return (
      <Container>
        <InsideContainer>
          <ContainerIcon
            bgColor={categories[move.category_id].colors.dark}
            size={50}>
            <Icon color="white" name={move.icon_name} size={20} />
          </ContainerIcon>
          <Info>
            <TextMor>{move.name}</TextMor>
            <RowView>
              <TextMor
                textColor={theme.colors.secondaryText}
                size={theme.fontSize.h5}>
                {move.repeat_type === 'repeat_day' ? 'Daily' : 'Weekly'}
              </TextMor>
              <ContainerIcon
                bgColor={theme.colors.secondaryText}
                size={3}
                marginHorizontal={2}
              />
              <TextMor
                style={{textDecorationLine: 'underline'}}
                textColor={theme.colors.secondaryText}
                size={theme.fontSize.h5}>
                {move.duration_minutes + ' Minutes'}
              </TextMor>
            </RowView>
          </Info>
        </InsideContainer>
        <InsideContainer>
          <PressIcon
            onPress={() => {
              if (move.public) dispatch(changeMovePrivacity({id: move.id}));
            }}
            bgColor={!move.public ? theme.colors.lightGrey : 'transparent'}
            size={40}>
            <Icon
              color={
                move.public
                  ? theme.colors.secondaryText
                  : theme.colors.primaryText
              }
              name={'locked'}
              size={20}
            />
          </PressIcon>
          <PressIcon
            onPress={() => {
              if (!move.public) dispatch(changeMovePrivacity({id: move.id}));
            }}
            bgColor={move.public ? theme.colors.lightGrey : 'transparent'}
            size={40}
            marginHorizontal={10}>
            <Icon
              color={
                !move.public
                  ? theme.colors.secondaryText
                  : theme.colors.primaryText
              }
              name={'world-o'}
              size={20}
            />
          </PressIcon>
        </InsideContainer>
      </Container>
    );
  });
}

export default Move;
