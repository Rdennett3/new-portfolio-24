import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import AboutExtra from "../components/about-extra"
import AnimatedLines from "../components/intro-text"
import Intro from "../components/intro"
import StickyColorScroll from "../components/pinned-list"
import Logos from "../components/Logos"
import Work25 from "../components/work-sep-25"

const IndexPage = () => {
  return (
    <>
      <Header />
      <AnimatedLines />
      <Intro />
      <Logos />
      <Work25 />
      <AboutExtra />
      {/* <SlidingText /> */}
      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home | Bob Dennett | Web Developer | Schenectady, NY</title>
