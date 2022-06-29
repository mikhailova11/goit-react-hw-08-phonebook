import { useState} from "react";
import s from "../Editor/Editor.module.css";
import { updateContact} from '../../redux/operaitions'
import { useDispatch } from "react-redux";




export default function Editor (idCurrentContact) {
    const dispatch = useDispatch()

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const id = idCurrentContact.id
 
    
    

    const handleChange = (e) => {
        const {value, name} = e.target

        switch (name) {
            case 'name':
                setNewName(value)
                break;

            case 'number':
                setNewNumber(value)
                break;
        
            default:
                return;
        }
    }

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateContact({id,  newName, newNumber}))

        
    } 


    return (

        <form className={s.form} onSubmit = {handleSubmit}>
            <label className={s.label}>
            
                <input className={s.input}
                placeholder='Enter a new name'
                value={newName}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange} 
                />
            </label>
            <label className={s.label}>
            
                <input className={s.input}
                placeholder='Enter a new number'
                value={newNumber}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                />
            </label>

            <button className={s.button} type="submit" title='save'>Save</button>
        </form>

    )
}
