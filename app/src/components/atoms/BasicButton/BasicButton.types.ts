import type { ButtonProps as PrimeButtonProps } from 'primereact/button'

/**
 * BasicButton component props.
 *
 * Extends PrimeReact Button props, excluding the 'pt' (passthrough) prop
 * to maintain consistent styling through the design system.
 *
 * @see https://primereact.org/button/ for complete API documentation
 */
export type BasicButtonProps = PrimeButtonProps
