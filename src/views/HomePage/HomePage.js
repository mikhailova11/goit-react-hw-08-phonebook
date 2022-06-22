import Container from "components/Container/Container";
import PageHeader from "components/PageHeader/PageHeader";
import { Outlet } from "react-router";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import s from "../HomePage/HomePage.module.css";
import { useSelector } from "react-redux";
import selectors from "redux/selectors";


export default function HomePage() {
    const isLogIn = useSelector(selectors.getIsLogIn)

    return (<Container>
    <PageHeader>Welcome!</PageHeader>
    <p className={s.text}>This app is made to store contacts. Conveniently add and store contacts.</p>
    
    {isLogIn 
    ?<><p className={s.text}>Go to use the application <Link to='/contacts'><p className={s.register}>Phonebook</p></Link>
    <Link to='/contacts'><p className={s.register}>  <BsFillPhoneVibrateFill/></p></Link>
    </p></>

    :<><p className={s.text}>Go to 
    <Link to='/register'> <p className={s.register}> register </p> </Link>
    or<Link to='/login'> <p className={s.register}> log in </p> </Link>
     and use the application Phonebook
    <span className={s.phone}><BsFillPhoneVibrateFill/></span></p></>}
    
    <Outlet/>
    </Container>
    )
    
}