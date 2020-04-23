import React from 'react';
import * as S from './styles';

interface SegmentControlProps {
  options: string[];
}

const SegmentControl: React.FunctionComponent<SegmentControlProps> = ({
  options,
}) => {
  return (
    <S.Container>
      {options.map((item, index) => (
        <S.Button key={item} index={index}>
          <S.Text>{item}</S.Text>
        </S.Button>
      ))}
    </S.Container>
  );
};

export default SegmentControl;
