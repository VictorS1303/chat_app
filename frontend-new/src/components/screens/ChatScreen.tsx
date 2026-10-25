
import SendMessageLayout from '@/components/layouts/SendMessageLayout'
// import MessageCard from '@/components/cards/MessageCard'
import { KeyboardAvoidingView, Platform, View, Pressable, Keyboard } from 'react-native'
import MessageCardsContainer from '../containers/MessageCardsContainer'
import { useEffect, useState } from 'react'
import { getMessages } from '@/lib/server/server'
import type { MessageCard } from '@/lib/types/cards'


const ChatScreen = () =>
{
    const [messages, setMessages] = useState<MessageCard[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchMessages = async () =>
    {
        try
        {
            setLoading(true)
            const response = await getMessages()

            setMessages(response)
        }
        catch (error)
        {
            console.error('Failed to fetch messages:', error)
        }
        finally
        {
            setLoading(false)
        }
    }

    useEffect(() =>
    {
        fetchMessages()
    }, [])

    return (
        <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
        >
            <View className="flex-1 bg-blue-500">
                <Pressable
                    className="flex-1"
                    onPress={Keyboard.dismiss}
                >
                    {/* Chat messages go here */}
                    <MessageCardsContainer
                        messages={messages}
                        onMessageChanged={fetchMessages}
                    />

                </Pressable>

                <SendMessageLayout />
            </View>
        </KeyboardAvoidingView>
    )
}

export default ChatScreen
