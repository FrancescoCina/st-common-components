import type { Meta, StoryObj } from '@storybook/react-vite'
import parrotImg from 'app/src/assets/images/watermark_parrot_bottom_right.svg'
import { fn } from 'storybook/test'
import { BasicMessage } from './BasicMessage'

const meta: Meta<typeof BasicMessage> = {
  component: BasicMessage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'PrimeIcons class name (e.g., "pi-info-circle")',
    },
    severity: {
      control: 'select',
      options: ['info', 'success', 'warn', 'error', 'secondary'],
      description: 'Banner severity/color variant',
    },
    title: {
      control: 'text',
      description: 'Title of the informative banner',
    },
    children: {
      control: 'text',
      description: 'Optional additional content (can be text, HTML, or React elements)',
    },
    confirmAction: {
      control: 'object',
      description: 'Optional confirm action button props',
    },
    closeAction: {
      control: 'object',
      description: 'Optional close action button props',
    },
    image: {
      control: 'object',
      description: 'Optional image or SVG element to display',
    },
    imagePosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the image',
    },
    imageClassName: {
      control: 'text',
      description: 'Optional CSS classes for the image container',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Secondary: Story = {
  args: {
    icon: 'pi-sparkles',
    severity: 'secondary',
    title: 'Ho riscontrato 4 migliorie da applicare su di un totale di 8 requisiti. Ti guiderò nella risoluzione:',
    children: (
      <ul className='ml-14 list-disc'>
        <li className=''>3 requisiti incompleti</li>
        <li>1 conflitto con 2 requisiti incompatibili</li>
      </ul>
    ),
    closeAction: fn(),
    confirmAction: fn(),
  },
}

export const Info: Story = {
  args: {
    icon: 'pi-info-circle',
    severity: 'info',
    title: 'Suggerimento di Storyteller',

    children: (
      <p className='text-sm'>
        Specificare: orari disponibili, durata slot (es. 1h, 1.5h), politiche di cancellazione, gestione conflitti, e se sono
        previste prenotazioni ricorrenti
      </p>
    ),
    closeAction: fn(),
    confirmAction: fn(),
  },
}

export const TitleOnly: Story = {
  args: {
    icon: 'pi-check-circle',
    severity: 'success',
    title: 'Tutti i requisiti sono stati completati con successo!',
  },
}

export const Warning: Story = {
  args: {
    icon: 'pi-exclamation-triangle',
    severity: 'warn',
    title: 'Attenzione: alcuni requisiti potrebbero richiedere una revisione.',
    closeAction: fn(),
    confirmAction: fn(),
  },
}

export const Success: Story = {
  args: {
    icon: 'pi-check-circle',
    severity: 'success',
    title: 'Operazione completata con successo!',
    children: <p className='text-sm'>Tutti i requisiti sono stati applicati correttamente.</p>,
    closeAction: fn(),
  },
}

export const Error: Story = {
  args: {
    icon: 'pi-times-circle',
    severity: 'error',
    title: "Errore: impossibile completare l'operazione.",
    closeAction: fn(),
    confirmAction: fn(),
  },
}

export const WithHTMLContent: Story = {
  args: {
    icon: 'pi-info-circle',
    severity: 'info',
    title: 'Informazioni importanti',
    children: (
      <div>
        <p>Ecco alcuni dettagli:</p>
        <ul className='ml-4 list-disc'>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
      </div>
    ),
    closeAction: fn(),
    confirmAction: fn(),
  },
}

export const WithImageRight: Story = {
  args: {
    icon: 'pi-sparkles',
    severity: 'secondary',
    title: 'Riepilogo dei miglioramenti',
    children: (
      <div className='pl-6'>
        <p className='font-semibold'>Incompleti</p>
        <ul className='ml-4 list-disc p-2'>
          <li>2 requisiti ignorati</li>
          <li>1 requisito miglorato</li>
        </ul>
        <p className='mt-2 font-semibold'>Incompatibili</p>
        <ul className='ml-4 list-disc p-2'>
          <li>1 conflitto risolto</li>
        </ul>
      </div>
    ),
    image: parrotImg,
    imageClassName: 'absolute bottom-0 right-0 w-64 pr-5 opacity-80 pointer-events-none',
  },
}

export const NoBorder: Story = {
  args: {
    icon: 'pi-info-circle',
    severity: 'secondary',
    title: 'Suggerimento di Storyteller',
    children: <p className='text-sm'>Messaggio informativo in un box senza bordo</p>,
    bordered: false,
  },
}

export const WithTag: Story = {
  args: {
    icon: 'pi-info-circle',
    severity: 'info',
    title: 'Suggerimento di Storyteller',
    tagMessage: 'Nuovo',
    children: (
      <div>
        <p className='mb-2'>Ecco alcuni dettagli importanti:</p>
      </div>
    ),
  },
}
