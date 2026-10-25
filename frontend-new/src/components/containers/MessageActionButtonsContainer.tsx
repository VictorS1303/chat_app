import EditMessageButton from '@/components/buttons/message_action_buttons/EditMessageButton'
import DeleteMessageButton from '@/components/buttons/message_action_buttons/DeleteMessageButton'
import { View } from 'react-native'
import type { MessageActionButtonsContainer as MessageActionButtonsContainerProps } from '@/lib/types/containers'

const MessageActionButtonsContainer = ({ messageId, onPress }: MessageActionButtonsContainerProps) =>
{
    const handleEditMessage = () =>
    {
        onPress(messageId)
    }

    const handleDeleteMessage = () =>
    {
        console.log('Delete message!')
    }

    return (
        <View className="flex-row items-center justify-center gap-4">
            <EditMessageButton onPress={handleEditMessage} />
            <DeleteMessageButton onPress={handleDeleteMessage} />
        </View>
    )
}

export default MessageActionButtonsContainer