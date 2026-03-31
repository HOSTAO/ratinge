import { useState, FormEvent } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import { useIsMobile } from "../hooks/useIsMobile"
import { signIn } from "../lib/auth"

const PRIMARY = "#7C3AED"
const BG = "#0B0F14"
const CARD = "#111827"
const TEXT = "#F9FAFB"
const MUTED = "#9CA3AF"

export default function Login() {
  const isMobile = useIsMobile()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await signIn(email, password)
      router.push("/dashboard")
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Invalid email or password"
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", background: "#1F2937",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
    color: TEXT, fontSize: 15, outline: "none",
  }

  return (
    <>
      <SEO
        title="Log In — RatingE"
        description="Log in to your RatingE account to manage reviews, track reputation, and grow your business."
        canonical="https://ratinge.com/login"
      />
      <div style={{ background: BG, color: TEXT, fontFamily: "system-ui, -apple-system, sans-serif", minHeight: "100vh" }}>
        <Nav />

        <section style={{ padding: isMobile ? "60px 20px" : "96px 24px", maxWidth: 480, margin: "0 auto" }}>
          <div style={{ background: CARD, borderRadius: 16, padding: isMobile ? 28 : 40, border: "1px solid rgba(255,255,255,0.06)" }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Welcome Back</h1>
            <p style={{ color: MUTED, textAlign: "center", marginBottom: 32, fontSize: 15 }}>
              Log in to your RatingE account
            </p>

            {error && (
              <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, padding: "12px 16px", marginBottom: 20, color: "#F87171", fontSize: 14 }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 8, color: MUTED }}>Email</label>
                <input
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@company.com" style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 8, color: MUTED }}>Password</label>
                <input
                  type="password" required value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password" style={inputStyle}
                />
              </div>
              <button
                type="submit" disabled={loading}
                style={{
                  width: "100%", padding: "14px 0", background: PRIMARY, color: "#FFF",
                  border: "none", borderRadius: 8, fontSize: 15, fontWeight: 700,
                  cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Logging in…" : "Log In"}
              </button>
            </form>

            <p style={{ textAlign: "center", marginTop: 24, color: MUTED, fontSize: 14 }}>
              Don&apos;t have an account?{" "}
              <Link href="/signup" style={{ color: PRIMARY, textDecoration: "none", fontWeight: 600 }}>Sign Up Free</Link>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
