import { useEffect, useState } from "react";
import style from "./AccountButton.module.scss"

export const AccountButton=({userAccountHash})=>{
    const [abbreviatedAccount, setAbbreviatureAccount] = useState('')

    useEffect(()=>{
        abbreviatedHandle(userAccountHash)
    },[])

    const abbreviatedHandle=(userAcc)=>{
        const fisrt = userAcc.slice(0,9)
        const second = userAcc.slice(-4)
        // constfisrt + '...' + second
        setAbbreviatureAccount(fisrt + '...' + second)
    }
    return ( 
    <div className={style.wrapper_btn}>
        <div className={style.meta_logo} />
        <div className={style.meta_acc}>{abbreviatedAccount}</div>
        <div className={style.link_icon} />
    </div>
     );
}