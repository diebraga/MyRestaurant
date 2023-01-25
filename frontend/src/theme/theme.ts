import { extendTheme } from "native-base";
import { breakpoints } from "./index";

export const theme = extendTheme({
  breakpoints,
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}