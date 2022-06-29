import { NavLink } from "react-router-dom";
import s from "../AuthNav/AuthNav.module.css";


export default function AuthNav() {
    
    return <div>
        <NavLink to="/register" className={s.navLink}>Register</NavLink>
        <NavLink to="/login" className={s.navLink}>Log in</NavLink>
    </div>
    
}