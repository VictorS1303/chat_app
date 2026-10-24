import { Spacer as SpacerProps } from '@/lib/types/spacers'
import { View } from 'react-native'

const Spacer = ({ width = "100%", height = 40 }: SpacerProps) =>
{
    return (
        <View style={{ width, height }} />
    )
}

export default Spacer