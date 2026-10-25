
import type { EditMessageModal as EditMessageModalProps } from '@/lib/types/modals'
import EditMessageForm from '@/components/forms/EditMessageForm'
import { KeyboardAvoidingView, Modal, Platform, Pressable, Text, View, ScrollView } from 'react-native'

const EditMessageModal = ({ isVisible, text, onClose, onSubmit }: EditMessageModalProps) =>
{
    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                className="flex-1 justify-center"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={0}
            >
                <Pressable
                    className="flex-1 justify-center bg-black/50 px-4"
                    onPress={onClose}
                >
                    <Pressable
                        className="rounded-xl bg-white p-4"
                        onPress={(event) => event.stopPropagation()}
                    >
                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                            style={{ flexGrow: 0, maxHeight: '100%' }}
                        >
                            <View className="gap-4">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-lg font-bold text-black">
                                        Edit message
                                    </Text>
                                </View>

                                <EditMessageForm
                                    text={text}
                                    onSubmit={onSubmit}
                                    onClose={onClose}
                                />
                            </View>
                        </ScrollView>
                    </Pressable>
                </Pressable>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default EditMessageModal
