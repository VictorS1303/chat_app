
import type { BaseToastProps } from 'react-native-toast-message'

export type CustomToast = BaseToastProps &
{
    type: 'success' | 'error' | 'info' | 'warning',
}
