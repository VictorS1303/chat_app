export type MessageInput =
{
    placeholder: string,
    placeholderTextColor: string,
    className?: string,
    value: string,
    onChangeText: (text: string) => void,
    onSubmitEditing: () => void
}