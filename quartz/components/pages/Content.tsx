import { htmlToJsx } from "../../util/jsx"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"

function Content({ fileData, tree }: QuartzComponentProps) {
  const content = htmlToJsx(fileData.filePath!, tree)
  return <article>{content}</article>
  // return <article class="popover-hint">{content}</article> Habilitar para mostrar contenido en popovers.
}

export default (() => Content) satisfies QuartzComponentConstructor
