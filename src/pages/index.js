import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import AboutExtra from "../components/about-extra"
import SlidingText from "../components/sliding-text"
import WorkMay from "../components/work-may-2025"
import AnimatedLines from "../components/intro-text"
import Intro from "../components/intro"
import HomepageAboutText from "../components/homepage-about-text"
import StickyColorScroll from "../components/pinned-list"

const IndexPage = () => {
  return (
    <>
      <Header />
      <AnimatedLines />
      <Intro />
      <HomepageAboutText />
      <AboutExtra />
      <SlidingText />
      <StickyColorScroll />
      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home | Bob Dennett | Web Developer | Schenectady, NY</title>
