import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "redux/operaitions";
import selectors from "redux/selectors";
import defaultAvatar from "../UserMenu/default-avatar.png";
import s from "../UserMenu/UserMenu.module.css";

export default function UserMenu() {
    const dispatch = useDispatch();
    const avatar = defaultAvatar;
    const name = useSelector(selectors.getUserName)

    const onLogOut = useCallback(() => {
        dispatch(logoutUser());
    }, [dispatch]);

    return <div className={s.container}>

        <span className={s.span}>Welcome, {name}!</span>
        <img src={avatar} alt="avatar" width="30" className={s.img}/>
        
        <button className={s.btn} type="button" onClick={onLogOut}>Log out</button>
    </div>
}