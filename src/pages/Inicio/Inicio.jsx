import { Nosotros } from '../../home/Nosotros/Nosotros'
import { Noticias } from '../../home/Noticias/Noticias'
import { MainBanner } from '../../home/MainBanner/MainBanner'
import { Envios } from '../../home/Envios/Envios'

function Inicio() {
  return (
    <>
      <MainBanner />
      <Nosotros />
      <Noticias />
      <Envios />
    </>
  )
}

export { Inicio }
