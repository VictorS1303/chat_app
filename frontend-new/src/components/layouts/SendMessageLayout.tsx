
import MessageInput from '@/components/inputs/MessageInput'
import SendMessageButton from '@/components/buttons/SendMessageButton'
import { View } from 'react-native'
import { useState } from 'react'

const SendMessageLayout = () =>
{
    const [messageInputValue, setMessageInputValue] = useState('')

    const handleMessageSubmit = () =>
    {
        if (!messageInputValue.trim())
        {
            // Ultimately insert a toast here//
            return
        }

        console.log('Message sent!')


        setMessageInputValue('')
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
