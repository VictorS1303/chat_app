import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { ColorValue } from 'react-native'

export type Icon =
{
    color?: string,
    className?: string,
    icon: IconProp,
    size?: number,
}