import Head from 'next/head'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Rahul Roy - Web Developer</title>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicons/icons8-r-50.png" />
        <link rel="icon" main-sectiontype="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      </Head>
      <main className='full-page' id='content'>
        <LandingPage />
        <About />
        <Projects />
      </main>
      <div orientation="right" className="email-container">
        <div className="email-display">
          <a href="mailto:brigati.joshua@gmail.com">rahul.roybak@gmail.com</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
