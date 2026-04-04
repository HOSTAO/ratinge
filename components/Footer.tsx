import Link from "next/link"
import NewsletterSection from "./NewsletterSection"

export default function Footer() {
  return (
    <>
    <NewsletterSection />
    <footer style={{ background: "#111", color: "#fff", fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "60px 20px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <img src="/images/RatingE-Logo.png" alt="RatingE" style={{ width: 150, height: "auto", marginBottom: 16, filter: "brightness(0) invert(1)" }}
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.outerHTML = '<span style="font-family:Syne,sans-serif;font-weight:700;font-size:22px;color:#20D9A1;margin-bottom:16px;display:block">RatingE</span>'
              }}
            />
            <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.7, marginBottom: 20, maxWidth: 260 }}>
              Our software simplifies review management across multiple platforms.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { href: "https://facebook.com/Ratinge", label: "f", title: "Facebook" },
                { href: "https://twitter.com/ratinge", label: "𝕏", title: "X (Twitter)" },
                { href: "https://www.instagram.com/ratinge_official/", label: "📷", title: "Instagram" },
                { href: "https://www.linkedin.com/company/ratinge/", label: "in", title: "LinkedIn" },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff", fontWeight: 700, transition: "background 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #20D9A1, #5F39FF)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)" }}
                >{s.label}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 20, color: "#fff", fontFamily: "'Syne', sans-serif" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { href: "/features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact", label: "Contact Us" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blogs" },
              ].map(l => (
                <li key={l.href} style={{ marginBottom: 10 }}>
                  <Link href={l.href} style={{ color: "#aaa", fontSize: 14, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#20D9A1")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#aaa")}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 20, color: "#fff", fontFamily: "'Syne', sans-serif" }}>Useful Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { href: "/refund-policy", label: "Refund Policy" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms & Condition" },
                { href: "https://ec.europa.eu/consumers/odr", label: "Online Dispute Resolution", external: true },
              ].map(l => (
                <li key={l.href} style={{ marginBottom: 10 }}>
                  <a href={l.href} target={l.external ? "_blank" : undefined} rel={l.external ? "noopener noreferrer" : undefined}
                    style={{ color: "#aaa", fontSize: 14, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#20D9A1")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#aaa")}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "#666" }}>Copyright © 2024 ratinge.com All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}
