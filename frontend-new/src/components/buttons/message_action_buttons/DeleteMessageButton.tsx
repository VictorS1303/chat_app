import type { BaseButton as BaseButtonProps } from '@/lib/types/buttons.ts'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Pressable } from 'react-native'
import { Text } from 'react-native'
const DeleteMessageButton = ({ onPress }: BaseButtonProps) =>
{

    return (
        <Pressable
            onPress={onPress}
            className="items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel="Delete message"
        >
            <FontAwesomeIcon
                icon={faTrashAlt}
                size={20}
                color="#3B82F6"
            />
        </Pressable>
    )
}

export default DeleteMessageButton