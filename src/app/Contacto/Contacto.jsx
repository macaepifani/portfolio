import Image from 'next/image'
import Link from 'next/link'
import git from '../../../public/assets/git.svg'
import wpp from '../../../public/assets/wpp.svg'
import li from '../../../public/assets/li.svg'

export default function Contacto () {
    return (
        <section id='sobremi' className='bg-violet-400  flex h-screen w-full items-center justify-center'>
            <div m-6>
            <div className="flex items-center justify-center p-3 my-6">
                <h1 className="text-5xl">CONTACTO</h1>
            </div>
            <form className='max-w-sm mx-auto'>
                <div class="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <form class="max-w-sm mx-auto mb-5"> 
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@name.com"/>
                </form>
                <form class="max-w-sm mx-auto mb-5">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Mensaje</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Deja un mensaje..."></textarea>
                </form>
            </form>
            <div className='flex justify-center my-4'>
                <button type="button" className="px-5 py-2.5 text-sm font-medium text-black inline-flex items-center bg-white hover:bg-violet-600  rounded-lg text-center">
                    Enviar
                </button>
            </div>
            <div className="flex mt-8  sm:justify-center space-x-5 rtl:space-x-reverse">
				<Link href="https://github.com/macaepifani" target='blank'>
					<Image src={git} alt="logo fb" className="w-8 h-8 text-violet-800 hover:text-white "/>
					<span className="sr-only">GitHub page</span>
				</Link>
				<Link href="https://wa.me/5492613878428" target='_blank'>
					<Image src={wpp} alt="logo wpp" className="w-8 h-8 text-violet-800 hover:text-white "/>
					<span className="sr-only">Whatsapp</span>
				</Link>
				<Link href="https://www.linkedin.com/" target='_blank' >
					<Image src={li} alt="logo li" className="w-8 h-8 text-violet-800 hover:text-white"/>	
					<span className="sr-only">Linkedin page</span>
				</Link>
			</div>
            

        </div>
        </section>
        
    )
}