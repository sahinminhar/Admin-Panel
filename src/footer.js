import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer id="footer">
            <ul className="footer-links">
                <li className="footer-item">
                    <Link to="#" className="footer-link">
                        Copyright © Your Website 2024
                    </Link>
                </li>
                <li className="footer-item privacy">
                    <Link to="#" className="footer-link">
                        Privacy Policy
                    </Link>
                </li>
                <li className="footer-item separator">·</li>
                <li className="footer-item">
                    <Link to="#" className="footer-link">
                        Terms & Conditions
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
