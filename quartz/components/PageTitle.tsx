import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <svg width="189" height="96" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden"><defs><clipPath id="clip0"><rect x="405" y="278" width="189" height="96" /></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-405 -278)">
          <path d="M136.068 71.1644C136.068 66.6533 139.703 62.9964 144.187 62.9964 148.672 62.9964 152.307 66.6533 152.307 71.1644 152.307 75.6755 148.672 79.3325 144.187 79.3325 139.703 79.3325 136.068 75.6755 136.068 71.1644Z" fill="var(--gray)" fill-rule="evenodd" transform="matrix(1.00189 0 0 1 331.006 215.004)" />
          <text fill="var(--darkgray)" font-family="Lexend Mega" font-weight="700" font-size="303" transform="matrix(0.0980053 0 0 0.0978205 502.646 329)">M</text>
          <text class="logotitle" fill="var(--gray)" font-family="Lexend Mega" font-weight="700" font-size="303" transform="matrix(0.0980053 0 0 0.0978205 535.043 329)">DE</text>
          <text fill="var(--darkgray)" font-family="Lexend Mega" font-weight="700" font-size="303" transform="matrix(0.0980053 0 0 0.0978205 502.646 364)">GEO</text>
          <path d="M120.537 84.1257C121.25 84.1257 121.827 84.7035 121.827 85.4164L121.806 85.5194 121.827 85.5252 121.827 141.545 157.247 84.8396 157.307 84.8562 157.545 84.5037C157.779 84.2701 158.1 84.1257 158.458 84.1257 159.17 84.1257 159.747 84.7035 159.747 85.4164L159.726 85.5194 159.747 85.5252 159.747 154.258 262.355 154.258 262.355 159.35 159.747 159.35 152.378 159.35 121.827 159.35 113.064 159.35 113.014 159.35 75.1445 159.35 75.0944 159.35 75.0796 159.323 74.2323 158.972C73.9989 158.738 73.8545 158.415 73.8545 158.059 73.8545 157.88 73.8906 157.711 73.9558 157.557L74.0399 157.431 74.0137 157.384 119.327 84.8396 119.388 84.8562 119.625 84.5037C119.859 84.2701 120.181 84.1257 120.537 84.1257Z" fill="var(--dark)" fill-rule="evenodd" transform="matrix(1.00189 0 0 1 331.006 215.004)" /></g>
        </svg>
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  margin-bottom: -1rem;
  white-space: nowrap;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
