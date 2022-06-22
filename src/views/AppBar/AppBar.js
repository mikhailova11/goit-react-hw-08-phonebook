import Container from "components/Container/Container";
import { useSelector } from "react-redux";
import selectors from "../../redux/selectors";
import AuthNav from "views/AuthNav/AuthNav";
import Navigation from "views/Navigation/Navigation";
import UserMenu from "views/UserMenu/UserMenu";
import s from "../AppBar/AppBar.module.css";


export default function AppBar() {
    const isLogIn = useSelector(selectors.getIsLogIn)
    
    return  (
        <Container>
    <header className={s.header} >
        <Navigation/>

        {isLogIn ? <UserMenu/> : <AuthNav/> }
       
        
    </header>
    </Container>)
}

