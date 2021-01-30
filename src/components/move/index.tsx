import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Title } from './style';


type MoveProps = {
  /** Titulo de la caja */
  title?: string;

  /** Color de fondo de la caja */
  bgColor: string;
};

function Move(props: MoveProps) {
  return (
    <Container bgColor={props.bgColor}>
      <TouchableOpacity
        onPress={() => {
          // eslint-disable-next-line no-console
          console.info(':v', 'ola k ase?');
        }}>
        <Title>{props.title}</Title>
      </TouchableOpacity>
    </Container>
  );
}

Move.defaultProps = {
  title: 'Sample text',
};

export default Move;
