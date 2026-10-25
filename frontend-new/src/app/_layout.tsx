import '../global.css'
import { Stack } from 'expo-router'
import Toast, { ToastConfig } from 'react-native-toast-message'
import CustomToast from '@/components/toasts/Toast'

const toastConfig: ToastConfig =
{
    success: (props) => <CustomToast {...props} type="success" />,
    error: (props) => <CustomToast {...props} type="error" />,
    info: (props) => <CustomToast {...props} type="info" />,
    warning: (props) => <CustomToast {...props} type="warning" />,
}

const RootLayout = () =>
{
    return (
        <>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            />
            <Toast
                config={toastConfig}
                position="bottom"
                visibilityTime={5000}
                autoHide={true}
            />
        </>
    )
}

export default RootLayout