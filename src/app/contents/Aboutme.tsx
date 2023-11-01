import Image from "next/image";
import mainpic from "../../assets/aadipic-fotor-bg-remover-20231101153751.png"
import { Indie_Flower,Poppins,Righteous} from 'next/font/google'

const poppins = Poppins({subsets:['latin'],weight:'400'})

export default function Aboutme(){
 
    return(
        <div className=" h-max mt-36">
            <h1 className="text-white text-9xl mb-10 ">About Me</h1>
            <div className="bg-white m-20 rounded-3xl">
            <div className="flex text-left items-center">
            <Image className="rounded-full p-12 m-3" src={mainpic} alt="pic"/>
            <h1 className={`${poppins.className} text-black m-2 sm: text-sm md:text-4xl lg:text-5xl xl:text-4xl   `}>Hey I'm Aadithya Niranjan, As a recent Electronics and Computer<br/> Engineering graduate, I’m eager to launch my career as a software engineer.
Proficient in Java, Python, and JavaScript,I have a strong foundation in software development and hands‑on experience with modern web tech stacks.I’m motivated to contribute my skills and enthusiasm to an internship that
fosters continuous learning and professional growth in software engineering</h1>
            </div>
            <button className="mb-7 bg-neutral-950 text-white p-10 rounded-full text-xl">
                <a href="https://drive.google.com/file/d/1UA5SnWQX9D2hXTF4cJJdVwXc-yEKlS76/view?usp=sharing">View my Resume</a>
            </button>
            </div>

        </div>
    )
}