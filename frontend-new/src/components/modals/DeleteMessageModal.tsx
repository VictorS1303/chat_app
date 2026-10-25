
import { Modal, Pressable, Text, View } from 'react-native'
import type { DeleteMessageModal as DeleteMessageModalProps } from '@/lib/types/modals'
import Icon from '@/components/icons/Icon'
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeleteMessageModal = ({ isVisible, transparent, onConfirm, onClose }: DeleteMessageModalProps) =>
{
    return (
        <Modal
            visible={isVisible}
            animationType="fade"
            transparent={transparent}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-center bg-black/50 px-6">
                <View className="gap-6 rounded-xl bg-white p-5">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-semibold text-red-500">
                            Delete message
                        </Text>

                        <Pressable
                            onPress={onClose}
                            className="rounded-md bg-red-500 p-3"
                        >
                            <Icon icon={faTimes} />
                        </Pressable>
                    </View>

                    <Text className="text-base text-gray-700">
                        Are you sure you want to delete this message? This action cannot be undone.
                    </Text>


                    <Pressable
                        onPress={onConfirm}
                        className="rounded-md bg-red-500 px-4 py-3"
                    >
                        <Text className="uppercase tracking-wider text-center text-white text-lg font-semibold">
                            Delete
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteMessageModal
