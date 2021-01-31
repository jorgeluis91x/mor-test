import {styled} from '../../theme';

type TextMorProps = {
  textColor?: string;
  size?: number;
  marginVertical?: number;
  marginHorizontal?: number;
};

export const Container = styled.View`
    flex:1
    background-color: ${(props) => props.theme.colors.morOrange};
`;

export const ContainerBody = styled.View`
  background-color: ${(props) => props.theme.colors.linen};
  padding-horizontal: 16px;
`;

export const HeaderBody = styled.View`
  flex-direction: row;
  padding-vertical: 16px;
  justify-content: space-between;
`;

export const ContainerImageHeader = styled.View`
  height: ${(props) => props.theme.sizes.screenHeight / 2}px;
  justify-content: space-between;
`;

export const TopHeader = styled.View`
  padding-top: 80px;
  flex-direction: row;
`;

export const RowView = styled.View`
  flex-direction: row;
`;
export const BottomHeader = styled.View`
  justify-content: space-between;
  padding-bottom: 30px;
  padding-left: 20px;
`;

export const TitleName = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h1 + 5}px;
  color: white;
`;

export const TextMor = styled.Text<TextMorProps>`
  font-size: ${(props) =>
    props.size ? props.size : props.theme.fontSize.h3}px;
  color: ${(props) =>
    props.textColor ? props.textColor : props.theme.colors.primaryText};

  margin-vertical: ${(props) =>
    props.marginVertical ? props.marginVertical : 0}px;
  margin-horizontal: ${(props) =>
    props.marginHorizontal ? props.marginHorizontal : 0}px;
`;
