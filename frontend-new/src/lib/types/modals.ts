export type EditMessageModal =
{
    isVisible: boolean,
    transparent: boolean,
    text: string,
    onClose: () => void,
    onSubmit: (text: string) => void
}

export type DeleteMessageModal =
{
    isVisible: boolean,
    transparent: boolean,
    onClose: () => void,
    onConfirm: () => void
}