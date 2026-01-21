import type { UseMutationResult } from '@tanstack/react-query'
import type {
  ChatModelSummary,
  DeleteChatApiV1TasksTaskIdChatsChatIdDeleteError,
  DeleteChatApiV1TasksTaskIdChatsChatIdDeleteVariables,
} from 'app/src/services/hal-api'
import type { OverlayPanel } from 'primereact/overlaypanel'

type DeleteChatMenuActionProps = {
  chat?: ChatModelSummary | null
  deleteChatMutation: UseMutationResult<
    undefined,
    DeleteChatApiV1TasksTaskIdChatsChatIdDeleteError,
    DeleteChatApiV1TasksTaskIdChatsChatIdDeleteVariables
  >
  overlayPanelRef: React.RefObject<OverlayPanel | null>
}

export type { DeleteChatMenuActionProps }
