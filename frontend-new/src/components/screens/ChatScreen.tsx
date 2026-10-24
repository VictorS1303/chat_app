
import SendMessageLayout from '@/components/layouts/SendMessageLayout'
import MessageCard from '@/components/cards/MessageCard'
import { KeyboardAvoidingView, Platform, View, Pressable, Keyboard } from 'react-native'
import MessageCardsContainer from '../containers/MessageCardsContainer'

const ChatScreen = () =>
{
    const messages = [
        {
            id: 1,
            text: 'Hey, how are you?',
            sender: 'Victor',
            send_at: '10:30'
        },
        {
            id: 2,
            text: 'I am doing well, thanks! How about you? youyouyouyouyouyou',
            sender: 'Alex',
            send_at: '10:31'
        },
        {
            id: 3,
            text: 'Doing great!',
            sender: 'Victor',
            send_at: '10:32'
        },
        {
            id: 4,
            text: 'Doing great!',
            sender: 'Victor',
            send_at: '10:32'
        },
        {
            id: 5,
            text: 'Doing great!',
            sender: 'Victor',
            send_at: '10:32'
        }
    ]

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
                    <MessageCardsContainer messages={messages} />

                </Pressable>

                <SendMessageLayout />
            </View>
        </KeyboardAvoidingView>
    )
}

export default ChatScreen
