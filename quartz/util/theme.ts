export interface ColorScheme {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  midgray: string
  primary: string
  secondary: string
  tertiary: string
  selection: string
  misc_background: string
  misc_background2: string
  misc_header: string
  highlight: string
}

export interface Theme {
  typography: {
    header: string
    body: string
    code: string
  }
  colors: {
    lightMode: ColorScheme
    darkMode: ColorScheme
  }
}

const DEFAULT_SANS_SERIF =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
const DEFAULT_MONO = "ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace"

export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=block`
}

export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --light: ${theme.colors.lightMode.light};
  --lightgray: ${theme.colors.lightMode.lightgray};
  --gray: ${theme.colors.lightMode.gray};
  --darkgray: ${theme.colors.lightMode.darkgray};
  --dark: ${theme.colors.lightMode.dark};
  --midgray: ${theme.colors.lightMode.midgray};
  --primary: ${theme.colors.lightMode.primary};
  --secondary: ${theme.colors.lightMode.secondary};
  --tertiary: ${theme.colors.lightMode.tertiary};
  --selection: ${theme.colors.lightMode.selection};
  --misc_background: ${theme.colors.lightMode.misc_background};
  --misc_background2: ${theme.colors.lightMode.misc_background2};
  --misc_header: ${theme.colors.lightMode.misc_header};
  --highlight: ${theme.colors.lightMode.highlight};

  --headerFont: "${theme.typography.header}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${theme.typography.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.code}", ${DEFAULT_MONO};
}

:root[saved-theme="dark"] {
  --light: ${theme.colors.darkMode.light};
  --lightgray: ${theme.colors.darkMode.lightgray};
  --gray: ${theme.colors.darkMode.gray};
  --darkgray: ${theme.colors.darkMode.darkgray};
  --dark: ${theme.colors.darkMode.dark};
  --midgray: ${theme.colors.darkMode.midgray};
  --primary: ${theme.colors.darkMode.primary};
  --secondary: ${theme.colors.darkMode.secondary};
  --tertiary: ${theme.colors.darkMode.tertiary};
  --selection: ${theme.colors.darkMode.selection};
  --misc_background: ${theme.colors.darkMode.misc_background};
  --misc_background2: ${theme.colors.darkMode.misc_background2};
  --misc_header: ${theme.colors.darkMode.misc_header};
  --highlight: ${theme.colors.darkMode.highlight};
}
`
}
