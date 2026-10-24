import type { MessageCard as MessageCardProps } from '@/lib/types/cards.ts'
import { Text, View } from 'react-native'
import BaseCard from './BaseCard'

const MessageCard = ({ id, text, sender, send_at}: MessageCardProps) =>
{
    return (
        <BaseCard
            className="bg-white self-start flex flex-col justify-between h-fit min-h-[150px] max-w-full p-4"
            id={id}
            head={
                <View>
                    <Text className="text-md">{sender}</Text>
                </View>
            }
            body={
                <Text className="text-lg">{text}</Text>
            }
            footer={
                <Text className="text-gray-300 self-end">{send_at}</Text>
            }
        />
    )
}

export default MessageCard