import logo from '../assets/logoHero.jpg'
import Hero1 from '../assets/Hero1.png'
import Hero2 from '../assets/Hero2.png'

const HeroInicio = () => {
  return (
    <>
      <div className="px-4 pt-5 my-1 text-center border-bottom ">
        <img className="d-block mx-auto mb-4" src={logo} alt width={72} height={60} />
        <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">En un mundo donde el desarrollo web es una batalla constante por la eficiencia y la velocidad, surge un héroe llamado React. Con su poderoso escudo de componentes reutilizables y su habilidad para manejar grandes cantidades de datos de manera eficiente, React se ha convertido en el campeón indiscutible de la creación de interfaces de usuario interactivas.</p>
          <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
            <div className="container px-5">
              <img src={Hero1} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width={700} height={500} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={Hero2} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">React, con su enfoque basado en componentes</h1>
            <p className="lead">ofrece a los desarrolladores la capacidad de construir aplicaciones web de manera modular y escalable. Sus poderes para crear componentes independientes y reutilizables permiten un desarrollo ágil y rápido, lo que ahorra tiempo y esfuerzo en el campo de batalla del desarrollo web.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroInicio