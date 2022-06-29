import Container from "components/Container/Container";
import PageHeader from "components/PageHeader/PageHeader";
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
    ?<><p className={s.text}>Go to use the application <Link to='/contacts'><span className={s.register}>Phonebook</span></Link>
    <Link to='/contacts'><span className={s.register}>  <BsFillPhoneVibrateFill/></span></Link>
    </p></>

    :<><p className={s.text}>Go to 
    <Link to='/register'> <span className={s.register}> register </span> </Link>
    or<Link to='/login'> <span className={s.register}> log in </span> </Link>
     and use the application Phonebook
    <span className={s.phone}><BsFillPhoneVibrateFill/></span></p></>}
 
    </Container>
    )
    
}