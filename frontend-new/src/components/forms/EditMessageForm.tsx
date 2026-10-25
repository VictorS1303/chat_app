import type { EditMessageForm as EditMessageFormProps } from '@/lib/types/forms'
import { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

import Icon from '@/components/icons/Icon'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const EditMessageForm = ({ text, onSubmit, onClose }: EditMessageFormProps) =>
{
    const [editedText, setEditedText] = useState(text)

    const handleEditSubmit = () =>
    {
        onSubmit(editedText)
    }

    return (
        <View className="gap-4">
            <View className="flex-row items-center justify-between">
                <Text className="text-lg font-semibold text-blue-500">Edit message</Text>

                <Pressable
                    onPress={onClose}
                    className="rounded-md bg-blue-500 p-3"
                >
                    <Icon icon={faTimes} />
                </Pressable>
            </View>

            <TextInput
                value={editedText}
                onChangeText={setEditedText}
                multiline
                textAlignVertical="top"
                placeholder="Enter your message"
                className="min-h-[120px] rounded-md border border-gray-300 p-3 transition-border duration-150 ease-in focus:border-blue-500"
            />

            <Pressable
                onPress={handleEditSubmit}
                className="self-end rounded-md bg-blue-500 px-4 py-2"
            >
                <Text className="text-center font-semibold text-lg text-white uppercase tracking-wide">
                    Update
                </Text>
            </Pressable>
        </View>
    )
}

export default EditMessageForm