import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "redux/operaitions";
import { getUserName } from "redux/selectors";
import defaultAvatar from "../UserMenu/default-avatar.png";
import s from "../UserMenu/UserMenu.module.css";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    const avatar = defaultAvatar;
    
    return <div className={s.container}>

        <span className={s.span}>Welcome, {name}!</span>
        <img src={avatar} alt="avatar" width="30" className={s.img}/>
        
        <button className={s.btn} type="button" onClick={()=>{dispatch(logoutUser())}}>Log out</button>
    </div>
}