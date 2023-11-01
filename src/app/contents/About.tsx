import {BiLogoReact,BiLogoDocker, BiLogoKubernetes,BiLogoTypescript,BiLogoJavascript,BiLogoJava,BiLogoMongodb,BiLogoPostgresql,BiLogoFirebase,BiHardHat,BiLogoFlask,BiLogoPython,BiLogoGithub,BiLogoRedux} from 'react-icons/bi'
import {SiNextdotjs,SiExpress,SiSolidity,SiTailwindcss,SiAppwrite,SiOpenai} from 'react-icons/si'
import {AiFillBug} from 'react-icons/ai'


export default function About(){
    return(
        <div className=" h-screen mb-10">
            <h1 className="text-white text-9xl ">Skills</h1>
            <div>
            <div className='flex h-screen items-center justify-center pb-60 '>
                <div className='m-10'>
                <BiLogoReact className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl     "/>
                <BiLogoDocker className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl "/>
                <BiLogoKubernetes className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl "/>
                <SiNextdotjs className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                </div>
                <div className='m-10'>
                <BiLogoTypescript className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <BiLogoJavascript className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <BiLogoJava className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <BiLogoMongodb className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                </div>
                <div className='m-10'>

                <BiLogoPostgresql className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <SiExpress className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <SiTailwindcss className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <BiLogoFirebase className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                </div>
                <div className='m-10'>
                    
                <SiSolidity className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <BiHardHat className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <BiLogoFlask className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <BiLogoPython className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>

                </div>
                <div className='m-10'>
                    
                    <BiLogoGithub className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                    <BiLogoRedux className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                    <SiAppwrite className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>
                <SiOpenai className="text-white sm: text-5xl md:text-6xl lg:text-7xl xl:text-9xl"/>

    
                    </div>
                </div>



            </div>
        </div>
    )
}