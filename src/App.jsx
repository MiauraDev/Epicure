import './App.css'
import { MainHeader } from './common/MainHeader'
import { MainFooter } from './common/MainFooter'
import { Nosotros } from './Home/Nosotros'
import { Noticias } from './Home/Noticias'
import { MainBanner } from './Home/MainBanner'
import { Envios } from './Home/Envios'

function App() {
  return (
    <>
      <MainHeader />
      <MainBanner />
      <Nosotros />
      <Noticias />
      <Envios />
      <MainFooter />
    </>
  )
}

export default App
