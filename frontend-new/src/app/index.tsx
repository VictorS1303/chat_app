
import '../global.css'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import Spacer from '@/components/spacers/Spacer'
import Icon from '@/components/icons/Icon'
import { faComments } from '@fortawesome/free-solid-svg-icons'


const HomeScreen = () =>
{
    return (
        <View className="flex-1 items-center justify-center bg-blue-500">
            <View className="flex flex-row items-center gap-2 text-white">
                <Icon className="text-white" icon={faComments} />
                <Text className="text-3xl font-semibold text-white">
                    ChatApp
                </Text>
            </View>

            <Spacer />

            <Link href="/login">
                <Text className="text-white text-2xl">
                    Login
                </Text>
            </Link>

            <Spacer height={15} />

            <Link href="/chat" >
                <Text className="text-white text-2xl">
                    Chat
                </Text>
            </Link>
        </View>
    )
}

export default HomeScreen