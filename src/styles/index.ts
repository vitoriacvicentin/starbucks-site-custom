import * as Colors from './Colors'
import * as theme from './theme'
// Default
export default {
  ColorsModule: Colors,
  Colors: Colors.default,
  ThemeModule: theme,
  Theme: theme.default
}
// Unit
export { default as ColorsStyle } from './Colors'
export { default as ThemeStyle } from './theme'
