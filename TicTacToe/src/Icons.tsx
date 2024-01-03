import React, { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';

type IconProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name}: IconProps) => {
  switch (name) {
    case 'circle':
        return <Icon name="circle" size={36} color="#FDBE5C" />;
    case 'cross':
        return <Icon name="xmark" size={44} color="#4BC69A" />;
  
    default:
        // return <Icon name="pencil" size={30} color="#900" />;
        break;
  }
}

export default Icons