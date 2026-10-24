import { Pressable } from 'react-native'
import type { BaseButton as BaseButtonProps } from '@/lib/types/buttons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const SendMessageButton = ({ onPress }: BaseButtonProps) =>
{
    return (
        <Pressable
            onPress={onPress}
            className="items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel="Send message"
        >
            <FontAwesomeIcon
                icon={faPaperPlane}
                size={20}
                color="white"
            />
        </Pressable>
    )    
}

export default SendMessageButton