import { useState } from "react"
import style from "./Header.module.scss"
import { AccountButton } from "../AccountButton/AccountButton"

export const Header=()=> {
    const [userAccount, setUserAccount] = useState('')

    const handlerConnect=async ()=>{
        if(window.ethereum){
            window.ethereum.request({method:"eth_requestAccounts"}).then((account)=>setUserAccount(account[0]))
            window.ethereum.on("accountsChanged",handleAccountsChanged)
            
            window.ethereum.on('chainChanged', handleChainChanged);
            
        }else{
            alert('Установите Metomask');
        }
    }
    const handleAccountsChanged =(accounts)=> {
        if (accounts.length === 0) {
          console.log('Please connect to MetaMask.');
        } else if (accounts[0] !== userAccount) {
            userAccount = accounts[0];
        }
      }

    const handleChainChanged =() =>{
        window.location.reload();
        alert('новая сеть')
    }
    return ( 
    <div className={style.header_wrapper}>
        <div className={style.info_block} >
            <div className={style.info_block__logo} />
            <div onClick={()=>handlerConnect()}  >
                {userAccount?<AccountButton userAccountHash={userAccount} />:
                <p className={style.info_block__connect}>Connect Wallet</p>}
                
            </div>
        </div>
    
    </div> 
    )
}
