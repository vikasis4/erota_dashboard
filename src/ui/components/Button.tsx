import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as style from '../../ui/styles'
import { colors } from '../../theme'

const Button = ({ fxn, txt, type }: { fxn: () => void, txt: string, type: string }) => {

  const customStyles = {
    small: {
      cont: {
        backgroundColor: colors.primary,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 6,
        elevation: 3,
      },
      txt: {
        ...style.text('light', 'center', 'md', 'md')
      }
    },
    medium: {
      cont: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6,
        elevation: 4,
      },
      txt: {
        ...style.text('light', 'center', '2xl', 'md')
      }
    },
    big: {
      cont: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        elevation: 4,
      },
      txt: {
        ...style.text('light', 'center', '4xl', 'lg')
      }
    },

  }

  var newType = type as keyof typeof customStyles;

  return (
    <TouchableOpacity onPress={fxn} activeOpacity={0.8} style={customStyles[newType].cont}>
      <Text style={customStyles[newType].txt}>{txt}</Text>
    </TouchableOpacity>
  )
}

export default Button