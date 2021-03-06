import Container from "components/Container/Container";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newUser } from "redux/operaitions";
import PageHeader from "../PageHeader/PageHeader";
import s from "../RegisterView/RegisterView.module.css";


export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange =({target: {name, value}}) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    
    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    }
    const handleSubmit = e => {
        e.preventDefault();

        dispatch(newUser({name, email, password}))
        reset()
    }

    return (
       
            <Container>
                 <div className={s.container}>
                    <PageHeader>Register</PageHeader>
                    <form onSubmit={handleSubmit} className={s.form}>
                        <label className={s.label}>Name
                            <input className={s.input} type="text" name="name" value={name} onChange={handleChange} />
                        </label>

                        <label className={s.label}>Email
                            <input className={s.input} type="email" name="email" value={email} onChange={handleChange} />
                        </label>

                        <label className={s.label}>Password
                            <input className={s.input} type="password" name="password" value={password} onChange={handleChange} />
                        </label>

                        <button className={s.button} type="submit">Register</button>

                    </form>
                </div>
            </Container>
         
         )
}