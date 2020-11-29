/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'
import { light } from './theme'

export type Theme = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
