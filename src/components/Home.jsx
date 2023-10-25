import { Carrusele } from "./Carrusele.jsx"
import '../css/main.css';


export const Home = ({URI}) => {
  return (
    <main className="bg-dark main">
      <Carrusele URI={URI} className="carruselRespuestas"/>
      <div className="copyrightContainer">
        <p className="text-center textoCopyright font-weight-bold m-0">© 2023 Copyright: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/emiigonzalez33/">Emiliano Gonzalez</a> Creado para la carrera de Analista de Sistemas ISFDyT n°66</p>
      </div>
    </main>
  )
}
