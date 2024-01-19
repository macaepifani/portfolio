import Image from 'next/image'
import persona from '../../../public/assets/persona.svg'
import descarga from '../../../public/assets/descarga.svg'
export default function About () {
    return (
        <section id='sobremi' className='bg-violet-400  flex h-screen w-full items-center'>
            <div m-6>
            <div className="flex items-center justify-center p-3">
                <h1 className="text-5xl">SOBRE MI</h1>
            </div>
            <div className='flex p-10 m-3 items-center'>
                <Image src={persona} width={800} height={1200} alt='foto maca?' className='float-left m-4'/>
                <p className='flex p-8 m-10 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptates repudiandae eligendi dolorum quibusdam ipsam, officia consequatur, laudantium, obcaecati placeat qui amet veritatis. Vitae placeat quos voluptates quo deserunt ab molestias laboriosam, ex iusto perferendis illum blanditiis voluptatum provident unde excepturi inventore. Nihil nesciunt, perferendis asperiores blanditiis repudiandae non itaque!</p>
            </div>
            <div className='flex justify-center'>
                <button type="button" className="px-5 py-2.5 text-sm font-medium text-black inline-flex items-center bg-white hover:bg-violet-800  rounded-lg text-center">
                    <Image src={descarga} width={20} height={20} alt='descarga' />
                     Descargar CV
                </button>
            </div>
        </div>
        </section>
        
    )
}