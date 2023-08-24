import React from "react"
import "../style/footer.css"

function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer className="footer">
            <h5>© {year} Shu Chuan Hsu. All Rights Reserved.</h5>
        </footer>
    )
}

export default Footer;