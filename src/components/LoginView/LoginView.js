import Container from "components/Container/Container";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/operaitions";
import PageHeader from "../PageHeader/PageHeader";
import s from "../LoginView/LoginView.module.css";

export default function LogInView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange =({target: {name, value}}) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }
    
    const reset = () => {
        setEmail('');
        setPassword('');
    }
    const handleSubmit = e => {
        e.preventDefault();

        dispatch(loginUser({email, password}))
        reset()
    }

    return (
    <Container>
        <div className={s.container}>
            <PageHeader>Log in to account</PageHeader>
            <form onSubmit={handleSubmit} className={s.form}>

                <label className={s.label}>Email
                    <input className={s.input} type="text" name="email" value={email} onChange={handleChange} />
                </label>

                <label className={s.label}>Password
                    <input className={s.input} type="password" name="password" value={password} onChange={handleChange} />
                </label>

                <button className={s.button} type="submit" >Log in</button>

            </form>
        </div>
    </Container>
    )
}