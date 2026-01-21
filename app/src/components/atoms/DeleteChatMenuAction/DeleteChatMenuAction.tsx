import { MenuAction } from 'app/src/components/atoms/MenuAction'
import { getErrorMessageFromApi } from 'app/src/helpers/utils'
import { useChats } from 'app/src/providers/ChatsProviders'
import { useConfirmModal } from 'app/src/providers/ConfirmModalProvider'
import { useTasks } from 'app/src/providers/TasksProvider'
import { useToast } from 'app/src/providers/ToastProvider'
import type { ReactElement } from 'react'
import { useNavigate } from 'react-router'
import type { DeleteChatMenuActionProps } from './DeleteChatMenuAction.types'

export function DeleteChatMenuAction(props: Readonly<DeleteChatMenuActionProps>): ReactElement {
  const { chat, deleteChatMutation, overlayPanelRef } = props
  const { selectedTask } = useTasks()
  const { deselectChat } = useChats()
  const { showSuccess, showError } = useToast()
  const { showDeleteConfirm } = useConfirmModal()
  const navigate = useNavigate()

  const handleDelete = (): void => {
    overlayPanelRef.current?.hide()
    try {
      deleteChatMutation.mutate(
        {
          pathParams: { taskId: selectedTask?.id ?? '', chatId: chat?.id ?? '' },
        },
        {
          onSuccess: () => {
            deselectChat()
            showSuccess('Intervista eliminata con successo')
            void navigate(`/${selectedTask?.id}/details`)
          },
          onError: (error) => {
            showError(getErrorMessageFromApi(error))
          },
        },
      )
    } catch {
      showError("Errore durante l'eliminazione dell'intervista")
    }
  }

  const handleShowConfirm = (): void => {
    showDeleteConfirm({
      header: "Elimina l'intervista",
      firstText: "Confermi di voler eliminare l'intervista?",
      secondText:
        chat?.status === 'open'
          ? "L'intervista sarà eliminata e non sarà più possibile recuperarla in seguito."
          : "Eliminando l'intervista anche i requisiti associati verranno cancellati definitivamente e non sarà possibile recuperarli.",
      onConfirm: handleDelete,
    })
  }

  return <MenuAction icon='trash' label='Elimina' onClick={handleShowConfirm} overlayPanelRef={overlayPanelRef} />
}
