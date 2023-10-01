import style from "./Footer.module.scss"

export const Footer = () => {
    return (
        <div className={style.footer_wrapper}>
            <div className={style.footer_top}>
                <div className={style.blok_docs}>
                    <p className={style.blok_docs__text}>Privacy</p>
                    <p className={style.blok_docs__text}>Policy Terms & Conditions</p>
                    <p className={style.blok_docs__text}> Cookie Policy</p>
                </div>
                <div className={style.footer_left}>
                    <div className={style.footer_left__logo} />
                    <div className={style.footer_left__contact} >
                        <img src ='../../../public/facebookIcon.svg'className={style.footer_left__icon} />
                        <img src ='../../../public/twitterIcon.svg' className={style.footer_left__icon} />
                        <img src ='../../../public/yotubeIcon.svg' className={style.footer_left__icon} />
                        <img src ='../../../public/instagramIcon.svg' className={style.footer_left__icon} />
                    </div>
                </div>
            </div>
            <div className={style.footer_bottom}>
                <p className={style.footer_copyrate}>©2022 All rights reserved. Powered by Atla</p>
            </div>
        </div>
      );
}
