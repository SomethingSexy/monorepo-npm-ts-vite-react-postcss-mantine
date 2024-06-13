import { createTheme, MantineProvider } from '@mantine/core'
import { type PropsWithChildren } from 'react'
import '@mantine/core/styles.css'

// Your theme configuration is merged with default theme
const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
})

export type ApplicationProps = PropsWithChildren<{}>

export const Application = ({ children }: ApplicationProps) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
