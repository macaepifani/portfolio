import Tateti from './ta-te-ti'
import ToDo from './ToDo'
import AppMeteorologica from './app-meteor'
import BuscadorPeliculas from './buscapelis'

export default function Proyectos(){
    return(
        <section className="flex w-full h-full mb-4">
           <div>
            <div className="flex items-center justify-center p-3">
                <h1 className=" mt-10 text-5xl">PROYECTOS</h1>
            </div>
            <div>
                <ul>
                    <Tateti/>
                    <BuscadorPeliculas/>
                    <AppMeteorologica/>
                    <ToDo/>
                </ul>
            </div>
        </div> 
        </section>
        
    )
}