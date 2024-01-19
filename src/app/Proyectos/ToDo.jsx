import Image from "next/image"
import todo from '../../../public/assets/to-do.png'
import Link from "next/link"

export default function ToDo () {
    return(
        <section className=" flex w-full h-full my-2">
            <div className="flex items-center my-6 mx-20">
                <Image class="object-cover rounded-t-lg md:rounded-none md:rounded-s-lg" width={300} height={55}  src={todo} alt=".."/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="m-2 text-2xl font-bold tracking-tight text-violet-800">TODO LIST</h5>
                    <p class="m-2 pr-10 font-normal text-violet-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat deserunt reprehenderit repellat dignissimos molestias? Sequi quas dolorem similique deserunt provident!</p>
                    <div>
                        <Link href="https://to-do-js-psi.vercel.app/" target="_blank" type="button" className="bg-violet-400 hover:bg-violet-800 text-pink-100 p-2 m-3 text-sm rounded-lg"> Ver en línea </Link>
                        <Link href="https://github.com/macaepifani/ToDo.js" target="_blank" type="button" className="bg-violet-400 hover:bg-violet-800 text-pink-100 p-2 m-3 text-sm rounded-lg"> Ver código </Link>
                    </div>
                </div>
            </div>
            </section>
    )
}