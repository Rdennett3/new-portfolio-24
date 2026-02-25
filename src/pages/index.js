import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import AnimatedLines from "../components/intro-text"
import Intro from "../components/intro"
import Logos from "../components/Logos"
import ContactForm from "../components/ContactForm"
import WeatherWidget from "../components/WeatherWidget"
import WorkGrid from "../components/work-grid"

const IndexPage = () => {

  return (
    <>
      <WeatherWidget />
      <AnimatedLines />
      <Intro />
      <Logos />
      <WorkGrid />
      <ContactForm />
      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home | Bob Dennett | Web Developer | Schenectady, NY</title>
