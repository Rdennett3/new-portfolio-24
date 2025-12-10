import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import AnimatedLines from "../components/intro-text"
import Intro from "../components/intro"
import Logos from "../components/Logos"
import HorizontalScroll from "../components/horizontal-work"
import ContactForm from "../components/ContactForm"
import WeatherWidget from "../components/WeatherWidget"
// import ImgExpand from "../components/old-unused/img-expand"


const IndexPage = () => {
  return (
    <>
      {/* <Header /> */}
      <WeatherWidget />
      <AnimatedLines />
      <Intro />
      <Logos />
      <HorizontalScroll />
      <ContactForm />
      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home | Bob Dennett | Web Developer | Schenectady, NY</title>
