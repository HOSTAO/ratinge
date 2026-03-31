import Nav from "../components/Nav"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

export default function CookiePolicy() {
  return (
    <>
      <SEO title="Cookie Policy | RatingE" description="RatingE Cookie Policy - Learn about how we use cookies on our website." canonical="https://ratinge.com/cookie-policy/" />
      <div style={{ fontFamily: "'Poppins', sans-serif", color: "#000" }}>
        <Nav />
        <section style={{ background: "linear-gradient(135deg, #5F39FF 0%, #20D9A1 100%)", padding: "140px 20px 60px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 700, color: "#fff" }}>Cookie Policy</h2>
        </section>
        <section style={{ padding: "80px 20px", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, marginBottom: 16 }}>
              This website uses cookies to enhance your browsing experience. By using our website, you consent to our use of cookies in accordance with this Cookie Policy.
            </p>
            <h3 style={{ fontWeight: 600, marginBottom: 12, marginTop: 24 }}>What are cookies?</h3>
            <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, marginBottom: 16 }}>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
            </p>
            <h3 style={{ fontWeight: 600, marginBottom: 12, marginTop: 24 }}>How we use cookies</h3>
            <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, marginBottom: 16 }}>
              We use cookies to understand how you use our website and to improve your experience. This includes personalizing content, providing social media features, and analyzing our traffic.
            </p>
            <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8 }}>
              For more information, please contact us at <a href="mailto:support@ratinge.com" style={{ color: "#5F39FF" }}>support@ratinge.com</a>.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
