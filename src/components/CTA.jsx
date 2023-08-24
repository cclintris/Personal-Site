import React from "react"
import "../style/header.css"
import CV from "../assets/CV_1_page_CS.pdf"

function CTA() {
    return (
        <div className="cta">
            <a className="btn" href={CV} download>Download CV</a>
            <a className="btn btn-primary" href="#contact">Let's Talk</a>
        </div>
    )
}

export default CTA;