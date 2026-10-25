
import { useState } from 'react'
import { Text, ScrollView } from 'react-native'
import type { MessageCardsContainer as MessageCardsContainerProps } from '@/lib/types/containers'
import { formatTimeStamp } from '@/lib/formatters/formatters'

import MainView from '../views/MainView'
import MessageCard from '@/components/cards/MessageCard'
import EditMessageModal from '../modals/EditMessageModal'
import DeleteMessageModal from '../modals/DeleteMessageModal'
import { updateMessage, deleteMessage } from '@/lib/server/server'

const MessageCardsContainer = ({ messages }: MessageCardsContainerProps) =>
{
    const [selectedMessageId, setSelectedMessageId] = useState<number | string | null>(null)
    const [messageToDeleteId, setMessageToDeleteId] = useState<number | string | null>(null)

    const selectedMessage = messages.find((message) => message.id === selectedMessageId)

    const handleEditMessage = (messageId: number | string) =>
    {
        setSelectedMessageId(messageId)
    }

    const handleEditMessageSubmit = async (text: string) =>
    {
        if (selectedMessageId === null)
        {
            return
        }

        try
        {
            await updateMessage(selectedMessageId, text)
            setSelectedMessageId(null)
        }
        catch (error)
        {
            console.error('Failed to update message:', error)
        }
    }

    const handleDeleteMessage = (messageId: number | string) =>
    {
        setMessageToDeleteId(messageId)
    }

    const handleDeleteMessageSubmit = async () =>
    {
        if (messageToDeleteId === null)
        {
            return
        }

        try
        {
            await deleteMessage(messageToDeleteId)
            setMessageToDeleteId(null)
        }
        catch (error)
        {
            console.error('Failed to delete message:', error)
        }
    }

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
                                send_at={formatTimeStamp(message.send_at)}
                                onEdit={handleEditMessage}
                                onDelete={handleDeleteMessage}
                            />
                        ))
                    ) : (
                        <Text>No messages yet.</Text>
                    )
                }
            </ScrollView>

            <EditMessageModal
                isVisible={selectedMessage !== undefined}
                transparent={true}
                text={selectedMessage?.text ?? ''}
                onSubmit={handleEditMessageSubmit}
                onClose={() => setSelectedMessageId(null)}
            />

            <DeleteMessageModal
                isVisible={messageToDeleteId !== null}
                transparent={true}
                onConfirm={handleDeleteMessageSubmit}
                onClose={() => setMessageToDeleteId(null)}
            />
        </MainView>
    )
}

export default MessageCardsContainer
