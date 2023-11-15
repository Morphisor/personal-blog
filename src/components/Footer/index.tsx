import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import { SITE_METADATA } from "@/src/utils/site-metadata";


export function Footer() {
    return (
        <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-5 sm:m-10 flex flex-col items-center text-light dark:text-dark">
            <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
                Interesting Stories | Updates | Guides
            </h3>
            <p className="mt-5 mb-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
                Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
            </p>
            <div className="flex items-center mt-8">
                <a href={SITE_METADATA.linkedin} className='inline-block w-6 h-6 mr-4' >
                    <LinkedinIcon className='hover:scale-125 transition-all ease duration-200' />
                </a>
                <a href={SITE_METADATA.twitter} className='inline-block w-6 h-6 mr-4' >
                    <TwitterIcon className='hover:scale-125 transition-all ease duration-200'  />
                </a>
                <a href={SITE_METADATA.github} className='inline-block w-6 h-6 mr-4' >
                    <GithubIcon className='hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark'  />
                </a>
            </div>
            <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light 
            py-6 px-8 flex flex-col md:flex-row items-center justify-between">
                <span className="text-center">&copy;2023 Morphisor. All rights reserved.</span>
                <Link href="/sitemap.xml" className="text-center underline my-4 md:my-0">sitemap.xml</Link>
                <div className="text-center">
                    Made with &hearts; by <a href={SITE_METADATA.personal} className="underline">Morphisor</a>
                </div>
            </div>
        </footer>
    )
}