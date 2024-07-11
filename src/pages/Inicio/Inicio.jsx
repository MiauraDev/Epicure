import { Nosotros } from '../../home/Nosotros/Nosotros'
import { Galeria } from '../../home/Galeria/Galeria'
import { MainBanner } from '../../home/MainBanner/MainBanner'

function Inicio() {
  return (
    <>
      <MainBanner />
      <Galeria />
      <Nosotros />
    </>
  )
}

export { Inicio }
