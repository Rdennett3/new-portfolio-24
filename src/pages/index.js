import * as React from "react"
import "../styles/style.css"
import HomeHeader from "../components/home-header"
import Header from "../components/header"
import Footer from "../components/footer"
import AboutExtra from "../components/about-extra"
import SlidingText from "../components/sliding-text"
import IntroText from "../components/intro-text"
import WorkMay from "../components/work-may-2025"
import AnimatedLines from "../components/intro-text"

const IndexPage = () => {
  return (
    <>
      <Header />
      <AnimatedLines />
      <HomeHeader />
      <AboutExtra />
      <SlidingText />
      <WorkMay />
      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home | Bob Dennett | Web Developer | Schenectady, NY</title>
