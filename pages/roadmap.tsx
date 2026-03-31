
import { useState } from "react"

const sections = [
  { status: "done", title: "Completed", items: [
    { title: "Review Collection", desc: "Via SMS, email, and links" },
    { title: "Google Reviews Integration", desc: "Sync with Google Business" },
    { title: "Review Widgets", desc: "Embed reviews on your website" },
    { title: "Dashboard & Analytics", desc: "Track reputation metrics" },
    { title: "Multi-Location Support", desc: "Manage multiple business locations" },
    { title: "QR Code Review Cards", desc: "Physical cards for easy reviews" }
  ]},
  { status: "progress", title: "In Progress", items: [
    { title: "AI Review Responses", desc: "Auto-generate professional replies" },
    { title: "Competitor Benchmarking", desc: "Compare your ratings vs competitors" },
    { title: "Social Media Aggregation", desc: "Pull reviews from Facebook, Yelp, etc." },
    { title: "WhatsApp Review Requests", desc: "Send requests via WhatsApp" },
    { title: "Advanced Sentiment Analysis", desc: "AI-powered review sentiment scoring" }
  ]},
  { status: "planned", title: "Planned", items: [
    { title: "Video Testimonials", desc: "Collect video reviews from customers" },
    { title: "Review Marketing Automation", desc: "Auto-showcase best reviews" },
    { title: "Industry Benchmarks", desc: "Compare against industry averages" },
    { title: "White-Label for Agencies", desc: "Rebrand RatingE for your clients" },
    { title: "Zapier & API Integration", desc: "Connect with 5000+ apps" },
    { title: "Review-to-Social Auto-Posting", desc: "Auto-share reviews on social media" }
  ]}
]

export default function RoadmapPage() {
  const [filter, setFilter] = useState("all")
  const filtered = filter === "all" ? sections : sections.filter(s => s.status === filter)

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "#f1f5f9", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 10 }}>Product Roadmap</h1>
          <p style={{ color: "#94a3b8", fontSize: 16, marginBottom: 24 }}>See what we have built, what we are working on, and what is coming next.</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {["all", "done", "progress", "planned"].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: "8px 18px", borderRadius: 20, border: filter === f ? "2px solid #f59e0b" : "1px solid #334155",
                background: filter === f ? "#f59e0b22" : "#1e293b", color: filter === f ? "#f59e0b" : "#94a3b8",
                fontWeight: 600, fontSize: 13, cursor: "pointer"
              }}>
                {{ all: "All", done: "✅ Completed", progress: "🚧 In Progress", planned: "📋 Planned" }[f]}
              </button>
            ))}
          </div>
        </div>

        {filtered.map((section, si) => (
          <div key={si} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
              <span>{{ done: "✅", progress: "🚧", planned: "📋" }[section.status]}</span>
              <span>{section.title}</span>
              <span style={{ background: "#334155", padding: "2px 10px", borderRadius: 12, fontSize: 12, fontWeight: 600, color: "#94a3b8" }}>{section.items.length}</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
              {section.items.map((item, i) => (
                <div key={i} style={{
                  background: "#1e293b", border: "1px solid #334155", borderRadius: 10, padding: "14px 16px",
                  borderLeft: `3px solid ${{ done: "#22c55e", progress: "#f59e0b", planned: "#64748b" }[section.status]}`
                }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                  <div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>{item.desc}</div>
                  {section.status === "planned" && (
                    <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
                      <span style={{ background: "#334155", padding: "2px 8px", borderRadius: 6, fontSize: 11, cursor: "pointer" }}>👍 Upvote</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 14, padding: "28px", textAlign: "center", marginTop: 20 }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>💡</div>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Suggest a Feature</h2>
          <p style={{ color: "#94a3b8", fontSize: 14, marginBottom: 16 }}>Have an idea that would make RatingE better? We would love to hear it.</p>
          <a href="mailto:support@ratinge.com?subject=Feature%20Suggestion" style={{ display: "inline-block", background: "#f59e0b", color: "white", padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Send Suggestion</a>
        </div>
      </div>
    </div>
  )
}
