import { Header } from './components/Header/Header'

import style from './App.module.scss'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <div className={style.root_layout}>
      <div className={style.root_layout_elipse__1}/>
      <div className={style.root_layout_elipse__2}/>
      <div className={style.root_layout_elipse__3}/>
      <div className={style.root_layout_elipse__4}/>
    <Header />
    <div className={style.body_wrapper}></div>
    <Footer /> 
    </div>
  )
}

export default App
