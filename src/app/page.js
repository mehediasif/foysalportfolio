import Image from 'next/image'
import Layout from './components/Layout'
import AboutSection from './components/About'
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full">
      <Layout />
      <AboutSection />
    </main>
  )
}
