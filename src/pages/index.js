import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import AboutExtra from "../components/about-extra"
import SlidingText from "../components/sliding-text"
import AnimatedLines from "../components/intro-text"
import Intro from "../components/intro"
import StickyColorScroll from "../components/pinned-list"
import Logos from "../components/Logos"

const IndexPage = () => {
  return (
    <>
      <Header />
      <AnimatedLines />
      <Intro />
      <AboutExtra />
      {/* <SlidingText /> */}
      <Logos />
      <StickyColorScroll />
      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home | Bob Dennett | Web Developer | Schenectady, NY</title>
