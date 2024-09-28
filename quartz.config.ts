import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Memorias de \nGeotecnia",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "mdegeo.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lexend Giga", // 1. Rethink Sans 2. Young Serif 3. DM Serif Display
        body: "Lexend", // 1. DM Sans 2. Aleo
        code: "Red Hat Mono", // 1. DM Mono 2. Fira Code
      },
      colors: {
        lightMode: {
          light: "#F7F3EE",
          lightgray: "#E6DFD6",
          gray: "#928374",
          darkgray: "#504945",
          dark: "#45403D",
          midgray: "#635A52",
          primary: "#79740E",
          secondary: "#B4730E",
          tertiary: "#6C782E",
          selection: "#EBE2D4E0",
          misc_background: "#EEE7DD",
          misc_background2: "#FAF8F4",
          misc_header: "#BF616A",
          highlight: "rgba(243, 234, 199, 0.35)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1D2021",
          lightgray: "#3C3836",
          gray: "#928374",
          darkgray: "#D4BE98",
          dark: "#E2CCA9",
          midgray: "#C2B297",
          primary: "#B8BB26",
          secondary: "#E9B143",
          tertiary: "#B0B846",
          selection: "#4D4845EC",
          misc_background: "#282828",
          misc_background2: "#1B1B1B",
          misc_header: "#BF616A",
          highlight: "rgba(50, 48, 47, 0.35)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "vitesse-light",
          dark: "vitesse-dark",
        },
        keepBackground: false,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
