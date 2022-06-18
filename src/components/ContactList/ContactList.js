
import {React } from "react";
import s from "./ContactList.module.css";
import { deleteContact, fetchContacts} from '../../redux/operation'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const getVisible = state => {

    const items =  state.contacts.items;
    const filter = state.contacts.filter;

   const normalizedFilter = filter.toLowerCase();
 
   return items.filter(({ name }) =>
     name.toLowerCase().includes(normalizedFilter))
}

export default function ContactList () {

    const contacts = useSelector( getVisible);
    const dispatch = useDispatch();
    
    useEffect(()=>{
      return dispatch(fetchContacts())
      
    },[dispatch])

        return ( 
        <form>
        <ul className={s.list}>
            {contacts.map(({name, id, number}) => ( 
                <li key={id} className={s.item}>
                    <span>{name}</span>
                    <span>{number}</span>
                    
                    <div className={s.btn}>
                        <button className={s.button} type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
        </form>
   )
}
