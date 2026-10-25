import type { EditMessageModal as EditMessageModalProps } from '@/lib/types/modals'
import EditMessageForm from '@/components/forms/EditMessageForm'
import { Modal, View } from 'react-native'

const EditMessageModal = ({ isVisible, transparent, text, onClose, onSubmit }: EditMessageModalProps) =>
{
    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={transparent}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-center bg-black/50 px-6">
                <View className="gap-6 rounded-xl bg-white p-5">
                    <EditMessageForm
                        key={text}
                        text={text}
                        onClose={onClose}
                        onSubmit={onSubmit}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default EditMessageModal