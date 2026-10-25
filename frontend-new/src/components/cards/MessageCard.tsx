import type { MessageCard as MessageCardProps } from '@/lib/types/cards.ts'
import { Text, View } from 'react-native'
import BaseCard from './BaseCard'
import MessageActionButtonsContainer from '../containers/MessageActionButtonsContainer'

const MessageCard = ({ id, text, sender, send_at, onEdit }: MessageCardProps) =>
{
    return (
        <BaseCard
            className="bg-white self-start flex flex-col justify-between min-h-[150px] w-full p-4"
            id={id}
            head={
                <View className="flex flex-row items-center justify-between mb-4">
                    <Text className="text-md">{sender}</Text>
                    <MessageActionButtonsContainer messageId={id} onPress={onEdit} />
                </View>
            }
            body={
                <Text className="text-lg flex-shrink">{text}</Text>
            }
            footer={
                <Text className="text-gray-300 self-end">{send_at}</Text>
            }
        />
    )
}

export default MessageCard