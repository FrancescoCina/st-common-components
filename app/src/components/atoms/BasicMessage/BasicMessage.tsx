/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { BasicButton } from 'app/src/components/atoms/BasicButton'
import { Message } from 'primereact/message'
import { Tag } from 'primereact/tag'
import type { ReactElement } from 'react'
import type { BasicMessageProps } from './BasicMessage.types'

export function BasicMessage(props: BasicMessageProps): ReactElement {
  const {
    icon = 'pi-info-circle',
    title,
    iconStyle = 'mr-2',
    titleStyle = 'text-base font-bold',
    contentStyle = 'mt-1 text-sm',
    children,
    severity = 'info',
    confirmAction,
    closeAction,
    image,
    imageClassName,
    messagePt,
    bordered = true,
    tagMessage,
  } = props

  const severityClasses = {
    info: {
      background: 'bg-poste-light-primary-70',
      text: 'text-poste-primary-100',
      border: 'border-l-[4px] border-poste-primary-100',
    },
    success: {
      background: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-l-[4px] border-green-700',
    },
    warn: {
      background: 'bg-yellow-50',
      text: 'text-yellow-700',
      border: 'border-l-[4px] border-yellow-700',
    },
    error: {
      background: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-l-[4px] border-red-700',
    },
    secondary: {
      background: 'bg-white',
      text: 'text-poste-secondary-100',
      border: 'border-l-[4px] border-r-[1px] border-t-[1px] border-b-[1px] border-gray-200',
    },
  }

  const classes = severityClasses[severity]

  const textContent = (
    <>
      <div className='flex w-full items-center justify-between gap-4'>
        <div className='flex items-center'>
          <i className={`pi ${icon} ${classes.text} ${iconStyle}`} />
          <div className={`${classes.text} ${titleStyle}`}>{title}</div>
          {tagMessage ? (
            <Tag className='ml-2' rounded severity='warning'>
              {tagMessage}
            </Tag>
          ) : null}
        </div>
        {closeAction !== undefined ? (
          <BasicButton
            icon='pi pi-times'
            onClick={closeAction}
            pt={{ root: { className: `${classes.text} hover:bg-${classes.text}/10` } }}
            rounded
            size='small'
            text
            title='Elimina sessione'
          />
        ) : null}
      </div>
      <div>{children ? <div className={`text-poste-secondary-100 ${contentStyle}`}>{children}</div> : null}</div>

      {confirmAction !== undefined ? (
        <BasicButton
          icon='pi pi-arrow-right'
          iconPos='right'
          label='Continua'
          link
          onClick={confirmAction}
          pt={{ root: { className: 'p-0 hover:bg-transparent mt-3' } }}
          title='Riprendi la sessione'
        />
      ) : null}
    </>
  )

  const content = (
    <div className='relative h-full w-full overflow-hidden p-3'>
      <div>{textContent}</div>
      {image ? (
        <div className={imageClassName}>
          <img alt='messageImage' src={image} />
        </div>
      ) : null}
    </div>
  )
  return (
    <Message
      content={content}
      pt={{
        root: {
          className: `justify-start ${classes.background} ${bordered ? classes.border : ''} ${messagePt}`,
        },
      }}
      severity={severity}
    />
  )
}
