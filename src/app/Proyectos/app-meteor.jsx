import Image from "next/image"
import weather from '../../../public/assets/weather.png'
import Link from 'next/link'

export default function AppMeteorologica () {
    return(
        <section className=" flex w-full h-full my-2">
            <div className="flex items-center my-6 mx-20">
                <Image class="object-cover rounded-t-lgmd:rounded-none md:rounded-s-lg" width={300} height={55}  src={weather} alt=".."/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="m-2 text-2xl font-bold tracking-tight text-violet-800">APP METEOROLÓGICA</h5>
                    <p class="m-2 pr-10 font-normal text-violet-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat deserunt reprehenderit repellat dignissimos molestias? Sequi quas dolorem similique deserunt provident!</p>
                    <div>
                        <Link href="https://weather-ten-hazel.vercel.app/" target="_blank" type="button" className="bg-violet-400 hover:bg-violet-800 text-pink-100 p-2 m-3 text-sm rounded-lg"> Ver en línea </Link>
                        <Link href="https://github.com/macaepifani/weather"target="_blank" type="button" className="bg-violet-400 hover:bg-violet-800 text-pink-100 p-2 m-3 text-sm rounded-lg"> Ver código </Link>
                    </div>
                </div>
            </div>
            </section>
    )
}