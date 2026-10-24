import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import type { Icon as IconProps } from '@/lib/types/icons'

const Icon = ({ icon, size = 24, color="#fff"}: IconProps) =>
{
    return (
        <FontAwesomeIcon
            color={color}
            icon={icon}
            size={size}
        />
    )
}

export default Icon