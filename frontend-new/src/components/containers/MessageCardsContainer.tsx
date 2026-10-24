import MainView from '../views/MainView'
import MessageCard from '@/components/cards/MessageCard'
import { ScrollView, Text } from 'react-native'
import type { MessageCardsContainer as MessageCardsContainerProps } from '@/lib/types/containers'

const MessageCardsContainer = ({ messages }: MessageCardsContainerProps) =>
{
    return (
        <MainView
            className="flex-1 px-4 py-4 justify-center"
            isSafeViewArea={true}
        >
            <ScrollView
                style={{ flex: 1, maxHeight: '80%' }}
                contentContainerStyle={{
                    flexGrow: 1,
                    gap: 16,
                    justifyContent: 'center'
                }}
                showsVerticalScrollIndicator={true}
            >
                {
                    messages && messages.length > 0 ? (
                        messages.map((message) => (
                            <MessageCard
                                key={message.id}
                                id={message.id}
                                text={message.text}
                                sender={message.sender}
                                send_at={message.send_at}
                            />
                        ))
                    ) : (
                        <Text>No messages yet.</Text>
                    )
                }
            </ScrollView>
        </MainView>
    )
}

export default MessageCardsContainer