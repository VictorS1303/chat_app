
import { TextInput } from 'react-native'
import type { MessageInput as MessageInputProps } from '@/lib/types/inputs'

const MessageInput = ({ placeholder, placeholderTextColor, className, value, onChangeText, onSubmitEditing }: MessageInputProps) =>
{
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            className={className}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    )
}

export default MessageInput
