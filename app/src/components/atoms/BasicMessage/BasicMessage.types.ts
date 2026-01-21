import type { ReactNode } from 'react'

export type BasicMessageProps = {
  readonly title: string
  readonly icon?: string
  readonly iconStyle?: string
  readonly titleStyle?: string
  readonly contentStyle?: string
  readonly children?: ReactNode
  readonly severity?: 'info' | 'success' | 'warn' | 'error' | 'secondary'
  readonly confirmAction?: () => void
  readonly closeAction?: () => void
  readonly image?: string
  readonly imagePosition?: 'left' | 'right'
  readonly imageClassName?: string
  readonly messagePt?: string
  readonly bordered?: boolean
  readonly tagMessage?: string
}
