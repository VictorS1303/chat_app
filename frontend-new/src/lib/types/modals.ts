export type EditMessageModal =
{
    isVisible: boolean,
    transparent: boolean,
    text: string,
    onClose: () => void,
    onSubmit: (text: string) => void
}