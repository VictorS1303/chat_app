import type {CustomToast as CustomToastProps } from '@/lib/types/toasts'
import { toastColors } from '@/constants/ToastColors'
import { View, Text } from 'react-native'

const CustomToast = ({ text1, text2, type}: CustomToastProps) =>
{
    const colors = toastColors[type]

    return (
        <View
            className="w-[90%] self-center bg-white rounded-lg border-l-[5px] p-3.5"
            isSafeViewArea={false}
            style={{
                borderLeftColor: colors.border,
            }}
        >
            {
                text1 && (
                    <Text
                        className="mb-1 text-[15px] font-semibold"
                    >
                        {text1}
                    </Text>
                )
            }

            {
                text2 && (
                    <Text
                        className="mt-[3px] text-sm"
                    >
                        {text2}
                    </Text>
                )
            }
        </View>
    )
}

export default CustomToast