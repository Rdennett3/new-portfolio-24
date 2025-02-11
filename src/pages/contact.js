import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactForm from '../components/ContactForm'
import ContactHeader from '../components/contact-header'
import Desk from "../images/desk.webp"
const Contact = () => {
    return (
        <>
            <Header />
            <ContactHeader />
            <div className="contact-container">
                <div className="contact-wrapper">
                    <div className="contact-item">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />

        </>)
}

export default Contact
export const Head = () => <title>Contact</title>