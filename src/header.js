import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="header">
            <ul className="ul">
                <li className="li"><Link to="/" className="link">Login</Link></li>
                <li className="li"><Link to="/dashboard" className="link">Dashboard</Link></li>
                <li className="li"><Link to="/users" className="link">Users</Link></li>
            </ul>
            <input type="button" value="Learn More" className="btn" />
        </div>
    )
}
export default Header;