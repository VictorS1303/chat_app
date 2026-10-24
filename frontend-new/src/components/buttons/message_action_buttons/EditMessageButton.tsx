import type { BaseButton as BaseButtonProps } from '@/lib/types/buttons.ts'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Pressable } from 'react-native'

const EditMessageButton = ({ onPress }: BaseButtonProps) =>
{
   
    return (
        <Pressable
            onPress={onPress}
            className="h-8 w-8 items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel="Edit message"
        >
            <FontAwesomeIcon
                icon={faPencilAlt}
                size={20}
                color="#3B82F6"
            />
        </Pressable>
    )
}

export default EditMessageButton