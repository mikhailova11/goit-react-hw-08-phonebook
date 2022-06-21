import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

export default function Navigation() {
    return <nav>
        <NavLink to="/" className={s.navLink}>Home</NavLink>
        <NavLink to="/contacts" className={s.navLink}>Contacts</NavLink>
        </nav>
}