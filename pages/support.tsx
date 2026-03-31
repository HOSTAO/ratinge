import { useState } from "react"

const quickLinks = [
  { icon: "🚀", title: "Getting Started", description: "Set up your account and start collecting reviews" },
  { icon: "⭐", title: "Review Collection", description: "SMS, email, and QR code review requests" },
  { icon: "📍", title: "Google Reviews", description: "Connect Google Business and boost your rating" },
  { icon: "🧩", title: "Review Widgets", description: "Embed review widgets on your website" },
  { icon: "📊", title: "Analytics", description: "Track reputation score and review trends" },
  { icon: "💳", title: "Billing", description: "Plans, payments, and subscription management" }
]
const topQuestions = [
  { q: "How do I start collecting reviews?", a: "Sign up, add your business, and create a review campaign. Send review requests via SMS, email, or share your unique review link and QR code.", category: "Getting Started" },
  { q: "How do I connect my Google Business Profile?", a: "Go to Settings → Integrations → Google. Sign in with the Google account that manages your Business Profile. Reviews will sync automatically.", category: "Google" },
  { q: "How do I embed a review widget?", a: "Go to Widgets → Create Widget → Choose style. Copy the embed code and paste it into your website HTML.", category: "Widgets" },
  { q: "How is the reputation score calculated?", a: "It combines your average rating, total review count, review recency, and response rate across all platforms.", category: "Analytics" },
  { q: "Can I manage multiple locations?", a: "Yes! Business and Enterprise plans support multi-location management from one dashboard.", category: "Features" },
  { q: "What plans do you offer?", a: "Starter (free), Pro, and Business plans. Pro includes advanced widgets and analytics. Business adds multi-location and white-label.", category: "Billing" }
]
const categories = [
  { icon: "🚀", name: "Getting Started", count: "8 articles" },
  { icon: "⭐", name: "Reviews", count: "12 articles" },
  { icon: "📍", name: "Google Integration", count: "6 articles" },
  { icon: "🧩", name: "Widgets", count: "5 articles" },
  { icon: "📊", name: "Analytics", count: "7 articles" },
  { icon: "💳", name: "Billing", count: "4 articles" }
]

export default function SupportPage() {
  const [search, setSearch] = useState("")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const filtered = topQuestions.filter(q => q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase()))
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "#f1f5f9", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 10 }}>How can we help you?</h1>
          <p style={{ color: "#94a3b8", fontSize: 16, marginBottom: 24 }}>Find answers or contact our support team directly.</p>
          <div style={{ maxWidth: 500, margin: "0 auto" }}><input type="text" placeholder="🔍 Search for help..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: "100%", padding: "14px 18px", borderRadius: 12, border: "1px solid #334155", background: "#1e293b", color: "#f1f5f9", fontSize: 15, outline: "none" }} /></div>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Quick links</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12, marginBottom: 40 }}>{quickLinks.map((l, i) => (<div key={i} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: "16px 18px" }}><div style={{ fontSize: 24, marginBottom: 6 }}>{l.icon}</div><div style={{ fontWeight: 700, fontSize: 14 }}>{l.title}</div><div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>{l.description}</div></div>))}</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Frequently asked questions</h2>
        <div style={{ marginBottom: 40 }}>{filtered.map((faq, i) => (<div key={i} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 10, marginBottom: 8 }}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: "none", border: "none", color: "#f1f5f9", cursor: "pointer", fontSize: 14, fontWeight: 600, textAlign: "left" }}><span>{faq.q}</span><span style={{ color: "#64748b", fontSize: 18, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span></button>{openFaq === i && (<div style={{ padding: "0 18px 14px", color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}><span style={{ display: "inline-block", background: "#334155", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600, marginBottom: 8, color: "#f59e0b" }}>{faq.category}</span><p>{faq.a}</p></div>)}</div>))}</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Browse by category</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12, marginBottom: 40 }}>{categories.map((c, i) => (<div key={i} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: "16px 18px" }}><div style={{ fontSize: 24, marginBottom: 6 }}>{c.icon}</div><div style={{ fontWeight: 700, fontSize: 14 }}>{c.name}</div><div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>{c.count}</div></div>))}</div>
        <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 14, padding: "28px", textAlign: "center" }}><div style={{ fontSize: 32, marginBottom: 10 }}>💬</div><h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Still need help?</h2><p style={{ color: "#94a3b8", fontSize: 14, marginBottom: 16 }}>Our support team responds within a few hours during business hours.</p><a href="mailto:support@ratinge.com" style={{ display: "inline-block", background: "#f59e0b", color: "white", padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Contact Support</a><p style={{ color: "#475569", fontSize: 12, marginTop: 12 }}>Business hours: Monday–Friday, 9 AM – 6 PM IST</p></div>
      </div>
    </div>
  )
}
