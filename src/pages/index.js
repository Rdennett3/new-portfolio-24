import * as React from "react"
import "../styles/style.css"
import HomeHeader from "../components/home-header"
import Header from "../components/header"
import BrokenWork from "../components/work-broken"
import LowerAbout from "../components/lower-about"
import Footer from "../components/footer"
import SlideOverLayout from "../components/slide-over"
import HorizontalScroll from "../components/horizontal-about"

const IndexPage = () => {
  return (
    <>
      {/* will pin this section so the about area slides over it */}
      <div className="pinned-section">
        <Header />
        <HomeHeader />
        <BrokenWork />
      </div>
      {/* <HorizontalScroll /> */}
      <LowerAbout />
      {/* <Footer /> */}
      {/* <SlideOverLayout /> */}

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home | Bob Dennett | Web Developer | Schenectady, NY</title>
