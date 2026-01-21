import { Button } from 'primereact/button'
import type { ReactElement } from 'react'
import type { BasicButtonProps } from './BasicButton.types'

/**
 * BasicButton - Custom button component wrapping PrimeReact Button
 *
 * This component provides a standardized button interface for the entire application,
 * based on PrimeReact's Button component. It supports all PrimeReact Button features including:
 * - Multiple severity levels (primary, secondary, success, info, warning, danger, help)
 * - Different styles (raised, rounded, text, outlined, link)
 * - Icons with customizable positioning
 * - Loading states
 * - Badges
 * - Size variants (small, normal, large)
 * - Full accessibility support
 *
 * @example
 * ```tsx
 * // Primary button with icon
 * <BasicButton label="Submit" icon="pi pi-check" />
 *
 * // Secondary outlined button
 * <BasicButton label="Cancel" severity="secondary" outlined />
 *
 * // Text button with icon on the right
 * <BasicButton label="Delete" icon="pi pi-trash" iconPos="right" text />
 *
 * // Loading state
 * <BasicButton label="Save" loading={isLoading} />
 *
 * // Icon-only button
 * <BasicButton icon="pi pi-search" rounded aria-label="Search" />
 * ```
 */
export function BasicButton(props: Readonly<BasicButtonProps>): ReactElement {
  const {
    onClick,
    title,
    badge,
    badgeClassName,
    children,
    disabled = false,
    icon,
    iconPos = 'left',
    text = false,
    rounded = false,
    raised = false,
    outlined = false,
    link = false,
    severity,
    size,
    label,
    loading = false,
    loadingIcon,
    plain = false,
    tooltip,
    tooltipOptions,
    visible = true,
    pt,
    ptOptions,
    unstyled = false,
    ...rest
  } = props

  return (
    <Button
      badge={badge}
      badgeClassName={badgeClassName}
      data-testid={`${title?.toLowerCase().replaceAll(' ', '-')}-button`}
      disabled={disabled}
      icon={icon}
      iconPos={iconPos}
      label={label}
      link={link}
      loading={loading}
      loadingIcon={loadingIcon}
      onClick={onClick}
      outlined={outlined}
      plain={plain}
      pt={pt}
      ptOptions={ptOptions}
      raised={raised}
      rounded={rounded}
      severity={severity}
      size={size}
      text={text}
      title={title}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      unstyled={unstyled}
      visible={visible}
      {...rest}
    >
      {children}
    </Button>
  )
}
