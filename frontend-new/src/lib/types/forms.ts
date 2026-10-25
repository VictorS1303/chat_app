export type EditMessageForm =
{
    text: string,
    onClose: () => void,
    onSubmit: (text: string) => void
}