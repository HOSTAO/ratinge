import { useState, useEffect } from "react"
import Link from "next/link"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/images/RatingE-Logo.png" alt="RatingE" style={{ width: 170, height: "auto" }}
            onError={(e) => {
              const t = e.target as HTMLImageElement
              t.outerHTML = '<span style="font-family:Syne,sans-serif;font-weight:700;font-size:20px;color:#fff">RatingE</span>'
            }}
          />
        </Link>

        <nav style={{ display: "flex", alignItems: "center" }} className="nav-desktop">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 400, color: "#FFFFFF", padding: "0 25px 10px 25px", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#61CE70")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
            >{link.label}</Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="https://app.ratinge.com" target="_blank" rel="noopener noreferrer"
            style={{ backgroundImage: "linear-gradient(90deg, #20D9A1 0%, #5F39FF 100%)", color: "#FFFFFF", borderRadius: 30, padding: "10px 24px", fontWeight: 500, fontSize: 15, fontFamily: "'Syne',sans-serif", whiteSpace: "nowrap" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundImage = "linear-gradient(90deg, #5F39FF 0%, #20D9A1 100%)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundImage = "linear-gradient(90deg, #20D9A1 0%, #5F39FF 100%)" }}
          >Log In</a>
          <button onClick={() => setIsOpen(!isOpen)} className="nav-hamburger"
            style={{ background: "transparent", border: "none", cursor: "pointer", padding: 8 }} aria-label="Menu">
            <span style={{ display: "block", width: 24, height: 2, background: "#20D9A1", marginBottom: 5 }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#20D9A1", marginBottom: 5 }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#20D9A1" }} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{ background: "#fff", padding: "20px", borderTop: "1px solid #eee", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              style={{ display: "block", padding: "12px 16px", fontSize: 16, fontFamily: "'Syne',sans-serif", color: "#000", borderBottom: "1px solid #f0f0f0" }}
              onClick={() => setIsOpen(false)}>{link.label}</Link>
          ))}
          <a href="https://app.ratinge.com" target="_blank" rel="noopener noreferrer"
            style={{ display: "block", marginTop: 16, textAlign: "center", backgroundImage: "linear-gradient(90deg, #20D9A1 0%, #5F39FF 100%)", color: "#fff", borderRadius: 30, padding: "12px 24px", fontWeight: 500 }}>
            Log In
          </a>
        </div>
      )}

      <style jsx>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}
