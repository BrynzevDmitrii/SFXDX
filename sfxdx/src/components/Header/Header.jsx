import style from "./Header.module.scss"

export const Header=()=> {
    return ( 
    <div className={style.header_wrapper}>
        <div className={style.info_block} >
            <div className={style.info_block__logo} />
            <div className={style.info_block__connect} >
                Connect Wallet
            </div>
        </div>
    
    </div> 
    )
}
