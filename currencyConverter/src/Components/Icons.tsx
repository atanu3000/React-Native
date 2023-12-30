import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name: string
}>

const Icons = ({name} : IconProps) => {
  switch (name) {
    case 'box':
        return <Icon name="th-large" size={28} color="#000" />
    case 'bar':
        return <Icon name="bars" size={28} color="#000"/>
  }
}

export default Icons