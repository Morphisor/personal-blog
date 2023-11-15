import { sortBlogs } from "@/src/utils"
import { Blog } from "contentlayer/generated"
import Link from "next/link"
import { BlogLayoutThree } from "../Blog/BlogLayoutThree"

interface Props {
    blogs: Blog[]
}

export function RecentPosts(props: Props) {
    const sortedBlogs = sortBlogs(props.blogs)

    return (
        <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
            <div className="flex w-full justify-between">
            <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">Recent Posts</h2>
            <Link href="/categories/all" className="inline-block font-medium text-accent dark:text-accentDark 
            underline underline-offset-2 text-base md:text-lg">View All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gird-rows-2 gap-16 mt-16">
                {sortedBlogs.slice(5, 11).map((blog, index) => 
                <article key={index} className="col-span-1 row-span-1 relative">
                    <BlogLayoutThree blog={blog} />
                </article>)}
            </div>
        </section>
    )
}