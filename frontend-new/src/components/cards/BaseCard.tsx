import type { BaseCard as BaseCardProps } from '@/lib/types/cards.ts'
import { View } from 'react-native'

const BaseCard = ({ className = "flex flex-col justify-between", id, head, body, footer, children }: BaseCardProps) =>
{
    return (
        <View className={className} nativeID={id}>
            <View className="w-full">
                {head}
            </View>
            <View className="mt-2 mb-4">
                {body}
            </View>
            <View>
                {footer}
            </View>

            <View>
                {children}
            </View>
        </View>
    )
}

export default BaseCard