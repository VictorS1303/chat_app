import { MessageCard as MessageCardProps } from '@/lib/types/cards'

export type MessageCardsContainer =
{
    messages: MessageCardProps[]
}

export type MessageActionButtonsContainer =
{
    messageId: string | number,
    onPress: (messageId: string | number) => void   
}