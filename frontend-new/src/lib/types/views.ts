import type { ReactNode } from 'react'
import type { StyleProp, ViewProps, ViewStyle } from 'react-native'

export type MainView = Omit<ViewProps, 'style' | 'children'> &
{
    style?: StyleProp<ViewStyle>
    children?: ReactNode
    className?: string
    isSafeViewArea?: boolean
    props?: ReactNode,
}