
import MessageInput from '@/components/inputs/MessageInput'
import SendMessageButton from '@/components/buttons/SendMessageButton'
import { View } from 'react-native'
import { useState } from 'react'

import { createMessage } from '@/lib/server/server'

const SendMessageLayout = () =>
{
    const [messageInputValue, setMessageInputValue] = useState('')

    const handleMessageSubmit = async () =>
    {
        const message = messageInputValue.trim()

        if (!message)
        {
            // Ultimately insert a toast here//
            return
        }

        try
        {
            const response = await createMessage(message)
            console.log('Message sent!')
            setMessageInputValue('')
        }
        catch (error)
        {
            console.error('Failed to send message:', error)
        }


    }

    return (
        <View className="flex-row items-center border-t-2 border-white">

            <View className="relative flex-1">
                <MessageInput
                    placeholder="Enter message"
                    placeholderTextColor="white"
                    className="ml-3 text-white h-[80px] w-full pr-12"
                    value={messageInputValue}
                    onChangeText={setMessageInputValue}
                    onSubmitEditing={handleMessageSubmit}
                />

                <View className="absolute right-3 top-0 h-full justify-center mr-3">
                    <SendMessageButton
                        onPress={handleMessageSubmit}
                    />
                </View>
            </View>
        </View>
    )
}

export default SendMessageLayout
