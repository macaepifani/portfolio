import Image from "next/image"
import meme1 from '../../../public/assets/proyecto.jpg'
import meme2 from '../../../public/assets/proyecto - copia.jpg'

export default function Meme () {
    return(
        <div className="flex w-full h-full justify-center">
            <Image src={meme1} alt='meme' width={100} height={10} className='m-6'/>
            <Image src={meme2} alt='meme2' width={100} height={20} className='m-6'/>
        </div> 
    )
}