
import {React, useCallback, useEffect, useState } from "react";
import s from "./ContactList.module.css";
import { deleteContact, fetchContacts} from '../../redux/operaitions'
import { useDispatch, useSelector } from "react-redux";
import { GoTrashcan, GoPencil, GoX } from 'react-icons/go';
import { IconContext } from 'react-icons';
import Modal from "components/Modal";
import Editor from "components/Editor/Editor";

const getVisible = state => {

    const items =  state.contacts.items;
    const filter = state.contacts.filter;

   const normalizedFilter = filter.toLowerCase();

   return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter))
}

export default function ContactList () {

    const contacts = useSelector( getVisible);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(showModal){
            return
        } 
            return dispatch(fetchContacts())
        
    }, [showModal, dispatch])

    const toggleModal = useCallback(() => {
        setShowModal(prevShowModal => !prevShowModal);
    }, []);

  
        return ( 
            
        <div className={s.span}>
        <ul className={s.list}>
            {contacts.map(({name, id, number}) => ( 
                <li key={id} className={s.item}>
                    <span>{name}</span>
                    <span>{number}</span>
                    
                    <div className={s.btn}>
                        <button className={s.button} title='delete' type="reset" onClick={() => dispatch(deleteContact(id))}>
                        <IconContext.Provider value={{ className: `${s.icon}` }}>
                        <GoTrashcan/>
                        </IconContext.Provider>
                        </button>

                        {showModal && (
                        <Modal onClose={toggleModal}>
                            <button className={s.buttonClose} title='close' type="button" onClick={toggleModal}>
                            <IconContext.Provider value={{ className: `${s.iconGo}`}} >
                                <GoX/>
                                </IconContext.Provider>
                            </button>
                            <Editor id={id}/>
                        </Modal> )}

                        <button className={s.button} title='update' type="button" onClick={toggleModal}>
                        <IconContext.Provider value={{ className: `${s.icon}` }}>
                        <GoPencil/>
                        </IconContext.Provider>
                        </button>
                        
                    </div>
                </li>
            ))}
        </ul>
        </div>
        
   )
}
