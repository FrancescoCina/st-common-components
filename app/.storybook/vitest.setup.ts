import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview'
import { setProjectAnnotations } from '@storybook/react-vite'
import { vis, visAnnotations } from 'storybook-addon-vis/vitest-setup'
import * as projectAnnotations from './preview'

setProjectAnnotations([a11yAddonAnnotations, projectAnnotations, visAnnotations])
vis.setup()
