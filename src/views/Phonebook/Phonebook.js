import ContactForm from "components/ContactForm"
import ContactList from "components/ContactList"
import Container from "components/Container/Container"
import Filter from "components/Filter"
import PageHeader from "components/PageHeader/PageHeader"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "redux/operaitions"
import s from "../Phonebook/Phonebook.module.css";


export default function Phonebook() {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(fetchContacts())},[dispatch])

    return (

         <Container>
                    <PageHeader>Phonebook</PageHeader>
                    <ContactForm/>
                    
                    {contacts.length  > 0 && 
                    <>
                    <PageHeader>List of contacts</PageHeader>
                    <Filter/>
                    <div className={s.container}>
                        <ContactList/>
                    </div>
                    </>}
        </Container>)
  
} 

