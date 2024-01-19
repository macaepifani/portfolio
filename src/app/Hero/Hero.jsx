import Link from "next/link";
import React from "react";


export default function Hero(){
    return(
        <section className='bg-white flex flex-row h-screen w-full items-center'>
        <div className="flex flex-col text-violet-400 ml-14 flex-grow">
            <div>
                <h1 className="text-7xl font-extralight">Hola, soy</h1>
                <h1 className="text-7xl font-extralight">Macarena Epifani</h1>
                <br />
                <h2 className='text-5xl'>actualmente una pasante de RST.</h2>
            </div>
            <div className="mt-4">
                <Link href="#sobremi" type="button" class="text-violet-400 hover:text-white border border-violet-400 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Know More</Link>
            </div> 
        </div>
        </section>
        
    )
}