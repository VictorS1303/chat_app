import { MessageCard as MessageCardProps } from '@/lib/types/cards'

export type MessageCardsContainer =
{
    messages: MessageCardProps[]
    onMessageChanged: () => Promise<void>
}

export type MessageActionButtonsContainer =
{
    messageId: number | string,
    onEdit: (messageId: number | string) => void,
    onDelete: (messageId: number | string) => void
}