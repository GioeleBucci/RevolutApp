import React from 'react';
import GenericButton from './GenericButton';
import Text from '../common/Text';

const DoubleTextBtn = ({title, rightText}) => {
  return (
    <GenericButton
      title={title}
      RightComponent={() => <Text content>{rightText}</Text>}
    />
  );
};

export default DoubleTextBtn;
