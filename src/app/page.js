import Image from 'next/image'
import Layout from './components/Layout'
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Layout />
      <div className="mx-auto container">
       Hello world
      </div>
    </main>
  )
}
