import { Blog } from "contentlayer/generated"
import { Tag } from "../Elements"
import Link from "next/link"
import Image from "next/image"
import { slug } from "github-slugger"

interface Props {
    blog: Blog
}

export function BlogLayoutOne({ blog }: Props) {
    return (
        <div className="group inline-block overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10" />
            <Image 
                src={blog.image.filePath.replace('../public', '')} 
                alt={blog.title} 
                placeholder="blur" 
                blurDataURL={blog.image.blurhashDataUrl} 
                width={blog.image.width}
                height={blog.image.height}
                sizes="(max-width: 1180px) 100vw, 50vw"
                className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
            />
            <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
                <Tag 
                    link={`/categories/${(blog.tags as string[])[0]}`} 
                    name={slug((blog.tags as string[])[0])} 
                    className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border"
                />
                <Link href={blog.url} className="mt-6">
                    <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
                        <span className="bg-gradient-to-r from-accent dark:from-accentDark/50 to-accent dark:to-accentDark/50 bg-[length:0px_6px]
                        group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                            {blog.title}
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}