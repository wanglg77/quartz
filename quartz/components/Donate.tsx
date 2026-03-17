import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    const Donate: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
        return (
            <div class={`side-donate ${displayClass ?? ""}`} style={{
                marginTop: "2rem",
                textAlign: "center",
                border: "1px solid var(--lightgray)",
                padding: "1rem",
                borderRadius: "8px"
            }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.5rem", color: "var(--dark)" }}>支持狼叔</p>
                <img src="/static/wechat_mp.png" style={{ width: "100%", maxWidth: "150px", borderRadius: "5px" }} alt="公众号二维码" />
                <p style={{ fontSize: "0.8rem", color: "var(--gray)", marginTop: "0.5rem", lineHeight: "1.5" }}>
                    扫码关注公众号<br />
                    <b>医质管</b>
                </p>
                <a href="/donate" style={{ fontSize: "0.8rem", color: "var(--secondary)", textDecoration: "none" }}>☕ 请我喝杯咖啡</a>
            </div>
        )
    }

    return Donate
}) satisfies QuartzComponentConstructor