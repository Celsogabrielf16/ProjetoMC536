import React from 'react';

interface Props {
  works: string[];
}

import * as Styled from './styles';

const List: React.FC<Props> = ({ works }) => {
  return (
    <>
      {works.map((work) => (
        <Styled.Card>
          <Styled.NameAndDescription>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dignissim bibendum libero id congue. Vestibulum et lacus purus.
              Mauris cursus laoreet risus, a laoreet lectus. Vestibulum non ex
              eu orci posuere luctus at eget est. Morbi maximus neque nec sapien
              finibus elementum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas dignissim bibendum libero id congue.
              Vestibulum et lacus purus. Mauris cursus laoreet risus, a laoreet
              lectus. Vestibulum non ex eu orci posuere luctus at eget est.
              Morbi maximus neque nec sapien finibus elementum.
            </p>
          </Styled.NameAndDescription>
          <Styled.TypeAndStatus>
            <h3>Tipo</h3>
            <p>Acessibilidade</p>
            <h3>Status</h3>
            <p>Em andamento</p>
          </Styled.TypeAndStatus>
        </Styled.Card>
      ))}
    </>
  );
};

export default List;
