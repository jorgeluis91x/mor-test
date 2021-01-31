import {styled} from '../../theme';

type ContainerIconProps = {
  bgColor: string;
  size: number;
  marginHorizontal: number;
};

export const Container = styled.View`
padding-vertical: 10px;
border-bottom-width: 1;
border-color: ${(props) => props.theme.colors.lightGrey}
flex-direction: row;
justify-content: space-between;
margin-vertical:5
`;

export const ContainerIcon = styled.View<ContainerIconProps>`
align-self: center;
justify-content: center;
align-items: center;
width: ${(props) => props.size}px;
height: ${(props) => props.size}px;
border-radius:  ${(props) => props.size / 2}px;
background-color:  ${(props) => props.bgColor}
margin-horizontal: ${(props) =>
  props.marginHorizontal ? props.marginHorizontal : 0}px;
`;

export const PressIcon = styled.TouchableOpacity<ContainerIconProps>`
align-self: center;
justify-content: center;
align-items: center;
width: ${(props) => props.size}px;
height: ${(props) => props.size}px;
border-radius:  ${(props) => props.size / 2}px;
background-color:  ${(props) => props.bgColor}
margin-horizontal: ${(props) =>
  props.marginHorizontal ? props.marginHorizontal : 0}px;
`;

export const Info = styled.View`
  margin-left: 10px;
`;
export const InsideContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h1}px;
`;
