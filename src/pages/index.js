import * as React from "react"
import "../styles/style.css"
import HomeHeader from "../components/home-header"
import Header from "../components/header"
import BrokenWork from "../components/work-broken"
import LowerAbout from "../components/lower-about"
import Footer from "../components/footer"
import AboutExtra from "../components/about-extra"

const IndexPage = () => {
  return (
    <>
      <Header />
      <HomeHeader />
      <AboutExtra />
      <BrokenWork />
      <LowerAbout />
      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home | Bob Dennett | Web Developer | Schenectady, NY</title>
