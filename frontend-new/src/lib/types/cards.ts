import { ReactNode } from "react"

export type BaseCard =
{
    id: number,
    className?: string,
    head: NonNullable<ReactNode>,
    body: NonNullable<ReactNode>,
    footer: NonNullable<ReactNode>,
    children?: ReactNode
}

export type MessageCard = Omit<BaseCard, 'head' | 'body' | 'footer' | 'children'> &
{
    text: string,
    sender: string,
    send_at: string,
}