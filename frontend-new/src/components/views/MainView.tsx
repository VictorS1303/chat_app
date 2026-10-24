import { View } from 'react-native'
import type { MainView as MainViewProps } from '@/lib/types/views.ts'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const MainView = ({ style, children, className="px-4", isSafeViewArea = false, ...props }: MainViewProps) =>
{
    if (!isSafeViewArea)
    {
        return (
            <View
                className={className}
                style={style}
                {...props}
            >
                {children}
            </View>
        )
    }

    const insets = useSafeAreaInsets()

    return (
        <View
            className={className}
            style={[
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                },
                style
            ]}
            {...props}
        >
            {children}
        </View>
    )
}

export default MainView