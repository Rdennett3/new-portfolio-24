import * as React from "react"
import "../styles/style.css"
import HomeHeader from "../components/home-header"
import Header from "../components/header"
import Footer from "../components/footer"
import AboutExtra from "../components/about-extra"
import SlidingText from "../components/sliding-text"
import NewWork from "../components/new-work"
import IntroText from "../components/intro-text"
const IndexPage = () => {
  return (
    <>
      <Header />
      <IntroText />
      <HomeHeader />
      <AboutExtra />
      <SlidingText />
      <NewWork />
      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home | Bob Dennett | Web Developer | Schenectady, NY</title>
