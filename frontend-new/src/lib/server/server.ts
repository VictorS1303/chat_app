import type { MessageCard } from '@/lib/types/cards'

const API_URL = 'http://192.168.0.236:3000'

// Create Message
export const createMessage = async (message: string) =>
{

   const response = await fetch(`${API_URL}/messages`,
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ message })
    })

    if (!response.ok)
    {
        const errorText = await response.text()
        console.error('Create message failed:', response.status, errorText)

        throw new Error('Failed to create message')
    }
    
    return response.json()
}


// Get Messages
export const getMessages = async (): Promise<MessageCard[]> =>
{
    const response = await fetch(`${API_URL}/messages`)

    if(!response.ok)
    {
        throw new Error('Failed to fetch messages')
    }

    return response.json()
}


// Update Message
export const updateMessage = async (id: string | number, text: string): Promise<{ message: string }> =>
{
    const response = await fetch(`${API_URL}/messages/${id}`,
    {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    })

    if (!response.ok)
    {
        throw new Error('Failed to update message')
    }

    return response.json()
}

// Delete Message
export const deleteMessage = async (id: string | number): Promise<{message: string}> =>
{
    const response = await fetch(`${API_URL}/messages/${id}`,
    {
        method: 'DELETE',
    })

    if (!response.ok)
    {
        throw new Error('Failed to delete message')
    }

    return response.json() 
}