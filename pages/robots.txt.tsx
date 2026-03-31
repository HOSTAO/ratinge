import { GetServerSideProps } from "next"

function Robots() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ratinge.com/sitemap.xml`

  res.setHeader("Content-Type", "text/plain")
  res.write(robots)
  res.end()

  return { props: {} }
}

export default Robots
