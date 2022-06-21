import ContactForm from "components/ContactForm"
import ContactList from "components/ContactList"
import Container from "components/Container/Container"
import Filter from "components/Filter"
import PageHeader from "components/PageHeader/PageHeader"
import { useSelector } from "react-redux"
import s from "../Phonebook/Phonebook.module.css";


export default function Phonebook() {
    const contacts = useSelector(state => state.contacts.items);

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

