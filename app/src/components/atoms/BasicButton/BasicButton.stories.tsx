import type { Meta, StoryObj } from '@storybook/react-vite'
import { BasicButton } from './BasicButton'

const meta: Meta<typeof BasicButton> = {
  component: BasicButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text', description: 'Label text to display on the button' },
    icon: { control: 'text', description: 'PrimeIcons class name (e.g., "pi pi-check")' },
    iconPos: { control: 'select', options: ['left', 'right'], description: 'Position of the icon' },
    severity: {
      control: 'select',
      options: ['secondary', 'success', 'danger'],
      description: 'Button color variant',
    },
    size: { control: 'select', options: ['small', 'large', undefined], description: 'Button size' },
    rounded: { control: 'boolean', description: 'Display button with rounded borders' },
    text: { control: 'boolean', description: 'Display as text-only button' },
    outlined: { control: 'boolean', description: 'Display with outlined style' },
    disabled: { control: 'boolean', description: 'Whether button is disabled' },
    loading: { control: 'boolean', description: 'Whether button is in loading state' },
  },
}

export default meta
type Story = StoryObj<typeof BasicButton>

// Varianti effettivamente utilizzate nell'applicazione
export const Primary: Story = {
  args: { label: 'Primary Button' },
}

export const WithIcon: Story = {
  args: { label: 'Submit', icon: 'pi pi-check' },
}

export const IconRight: Story = {
  args: { label: 'Next', icon: 'pi pi-arrow-right', iconPos: 'right' },
}

export const IconOnly: Story = {
  args: { icon: 'pi pi-search', 'aria-label': 'Search', text: true, rounded: true },
}

export const Secondary: Story = {
  args: { label: 'Secondary', severity: 'secondary' },
}

export const Success: Story = {
  args: { label: 'Success', severity: 'success' },
}

export const Danger: Story = {
  args: { label: 'Danger', severity: 'danger' },
}

export const Text: Story = {
  args: { label: 'Text Button', text: true },
}

export const Outlined: Story = {
  args: { label: 'Outlined', outlined: true },
}

export const Small: Story = {
  args: { label: 'Small Button', size: 'small' },
}

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
}

export const Loading: Story = {
  args: { label: 'Loading', loading: true },
}

export const TextWithIcon: Story = {
  args: { label: 'Delete', icon: 'pi pi-trash', text: true, severity: 'danger' },
}
