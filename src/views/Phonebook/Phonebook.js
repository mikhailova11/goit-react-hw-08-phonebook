import ContactForm from "components/ContactForm"
import ContactList from "components/ContactList"
import Container from "components/Container/Container"
import Filter from "components/Filter"
import PageHeader from "components/PageHeader/PageHeader"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { fetchContacts } from "redux/operaitions"
import s from "../Phonebook/Phonebook.module.css";
import selectors from '../../redux/selectors';

export default function Phonebook() {
    const isLoggedIn = useSelector(selectors.getIsLogIn);
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(fetchContacts())},[dispatch])


    return (
        isLoggedIn
         ? <Container>
                    <PageHeader>Phonebook</PageHeader>
                    <p className={s.title}>Add your new contact, please</p>
                    <ContactForm/>
                    
                    {contacts.length  > 0 && 
                    <div className={s.center}>
                    <PageHeader>List of contacts</PageHeader>
                    <Filter/>
                    <div className={s.container}>
                        <ContactList/>
                    </div>
                    </div>}
        </Container>
        :  <Navigate to={'/login'} replace />)
  
} 

