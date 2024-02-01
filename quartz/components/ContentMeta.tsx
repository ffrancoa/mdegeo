import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: string[] = []

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!))
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { text: timeTaken, words: _words } = readingTime(text)
        // segments.push(timeTaken)
      }

      return <p class={classNames(displayClass, "content-meta")}>Una memoria del {segments} 🍂</p>
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0.1em;
    color: var(--gray);
    font-family: var(--bodyFont);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
