import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "1rem", fontSize: "0.8rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          <a href="https://beian.miit.gov.cn/" target="_blank" style={{ color: "var(--gray)", textDecoration: "none" }}>
            粤ICP备2026023313号-1
          </a>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030002011147" target="_blank" style={{ color: "var(--gray)", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
            <img src="/static/beian.png" style={{ width: "14px", height: "14px", marginRight: "4px" }} alt="公安备案图标" />
            粤公网安备44030002011147号
          </a>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
