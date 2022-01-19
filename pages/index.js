import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Portfolio Site!" />
        <p className="description">
          This website was made exclusively, explicitly, completely, and wholly for Carlos-Rodriguez-Munoz.<br/>
          <em>ALL HAIL OUR LORD CARLOS</em>
        </p>
      </main>

      <Footer />
    </div>
  )
}
