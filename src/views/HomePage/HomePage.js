import Container from "components/Container/Container";
import PageHeader from "components/PageHeader/PageHeader";
import { Outlet } from "react-router";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import s from "../HomePage/HomePage.module.css";


export default function HomePage() {

    return (<Container>
    <PageHeader>Welcome!</PageHeader>
    <p className={s.text}>This app is made to store contacts. Conveniently add and store contacts.</p>
    <Link to='/contacts'>
        <p className={s.text}>Go to Phonebook 
        <span className={s.phone}><BsFillPhoneVibrateFill/></span></p></Link>
    <Outlet/>
    </Container>
    )
    
}