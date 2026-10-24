
import SendMessageLayout from '@/components/layouts/SendMessageLayout'
import MessageCard from '@/components/cards/MessageCard'
import { KeyboardAvoidingView, Platform, View, Pressable, Keyboard } from 'react-native'

const ChatScreen = () =>
{
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
                    <MessageCard
                        id="1"
                        sender="Victor"
                        text="Hello! This is a test message. \n Hello! This is a test message. \n Hello! This is a test message. \n Hello! This is a test message. \n Hello! This is a test message. \n"
                        send_at="24-10-2026"
                    />

                </Pressable>

                <SendMessageLayout />
            </View>
        </KeyboardAvoidingView>
    )
}

export default ChatScreen
