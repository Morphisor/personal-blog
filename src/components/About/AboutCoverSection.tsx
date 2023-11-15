import Image from "next/image";
import profileCharacter from "@/public/character.jpg"

export function AboutCoverSection() {
    return (
        <section className="w-full md:h-[75vh] border-b2 border-solid border-dark dark:border-light flex 
        flex-col md:flex-row items-center justify-center text-dark dark:text-light">
            <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light felx justify-center">
                <Image 
                    src={profileCharacter} 
                    alt="Morphisor" 
                    priority
                    sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
                    className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center rounded-full"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:pb-10 lg:px-16">
                <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left">
                    Dream Big, Work Hard, Achieve More!
                </h2>
                <p className="font-medium capitalize mt-4 text-base">
                As a senior full-stack developer, each line of code is my canvas for innovation. I turn challenges into opportunities, crafting websites for immersive experiences. Adaptability is my strength in the dynamic tech landscape, where innovation and collaboration drive my career forward. My unique perspective weaves into a tapestry of continuous learning, creating a harmonious journey toward new coding horizons. Happy coding!
                </p>
            </div>
        </section>
    )
}