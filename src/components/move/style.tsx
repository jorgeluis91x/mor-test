import { styled } from '../../theme';

type ContainerProps = {
  /** Color de fondo de la caja */
  bgColor: string;
};

export const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  height: 200px;
  width: 200px;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h1}px;
`;
