import s from "../PageHeader/PageHeader.module.css";

export default function PageHeader ({children}) {
    return (
    <h2 className={s.header}>
        {children}
    </h2>)

}