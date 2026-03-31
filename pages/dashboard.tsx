import { useEffect } from "react"
import { useRouter } from "next/router"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import { useIsMobile } from "../hooks/useIsMobile"
import { useAuth, signOut } from "../lib/auth"

const PRIMARY = "#7C3AED"
const ACCENT = "#06B6D4"
const BG = "#0B0F14"
const CARD = "#111827"
const TEXT = "#F9FAFB"
const MUTED = "#9CA3AF"

export default function Dashboard() {
  const isMobile = useIsMobile()
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login")
    }
  }, [loading, user, router])

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  if (loading) {
    return (
      <div style={{ background: BG, color: TEXT, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: MUTED, fontSize: 16 }}>Loading…</p>
      </div>
    )
  }

  if (!user) return null

  const card: React.CSSProperties = {
    background: CARD, borderRadius: 12, padding: 28,
    border: "1px solid rgba(255,255,255,0.06)",
  }

  const stats = [
    { label: "Total Reviews", value: "—", color: PRIMARY },
    { label: "Avg Rating", value: "—", color: ACCENT },
    { label: "Review Requests", value: "—", color: "#10B981" },
    { label: "Response Rate", value: "—", color: "#F59E0B" },
  ]

  return (
    <>
      <SEO title="Dashboard — RatingE" description="Manage your reviews and reputation from your RatingE dashboard." canonical="https://ratinge.com/dashboard" />
      <div style={{ background: BG, color: TEXT, fontFamily: "system-ui, -apple-system, sans-serif", minHeight: "100vh" }}>
        <Nav />

        <section style={{ padding: isMobile ? "40px 20px" : "60px 24px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <h1 style={{ fontSize: isMobile ? 24 : 32, fontWeight: 800 }}>Welcome, {user.name || "there"}</h1>
              <p style={{ color: MUTED, fontSize: 15, marginTop: 4 }}>{user.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              style={{
                padding: "10px 24px", background: "transparent", color: MUTED,
                border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8,
                fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >
              Sign Out
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: 20, marginBottom: 40 }}>
            {stats.map(s => (
              <div key={s.label} style={card}>
                <p style={{ color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{s.label}</p>
                <p style={{ fontSize: 32, fontWeight: 800, color: s.color }}>{s.value}</p>
              </div>
            ))}
          </div>

          <div style={card}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Getting Started</h2>
            <p style={{ color: MUTED, lineHeight: 1.7 }}>
              Your dashboard is ready. Add your first business to start collecting and managing reviews.
              Use the Appwrite backend to manage businesses, send review requests, and track your reputation.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
