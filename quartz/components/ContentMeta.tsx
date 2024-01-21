import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"

export default (() => {
  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    if (text) {
      const segments: string[] = []
      const { text: timeTaken, words: _words } = readingTime(text)

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!))
      }

      // segments.push(timeTaken)
      return <p class={`content-meta ${displayClass ?? ""}`}>Una memoria del {segments} 🍂</p>
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
