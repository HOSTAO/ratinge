import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { destination: '/support', permanent: true } }
}

export default function Help() {
  return null
}
